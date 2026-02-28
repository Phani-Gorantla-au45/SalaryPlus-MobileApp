import React, { useEffect, useRef, useState } from 'react';
import { AppState, AppStateStatus, View } from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LockScreen from './LockScreen';

const TIMEOUT = 2 * 60 * 1000; // 2 minutes
// const TIMEOUT = 10000; // 5 seconds

const AppLockProvider = ({ children }: any) => {
    const appState = useRef(AppState.currentState);
    const backgroundTime = useRef<number | null>(null);
    const [locked, setLocked] = useState(false);

    useEffect(() => {
        const subscription = AppState.addEventListener(
            'change',
            handleAppStateChange
        );

        return () => subscription.remove();
    }, []);

    const handleAppStateChange = async (nextAppState: AppStateStatus) => {
        console.log('AppState changed:', nextAppState);

        if (appState.current === 'active' && nextAppState === 'background') {
            console.log('App going to background');
            await AsyncStorage.setItem('LAST_ACTIVE_TIME', Date.now().toString());
        }

        if (nextAppState === 'active') {
            console.log('App coming to foreground');

            const token = await AsyncStorage.getItem('USER_TOKEN');
            const lastActive = await AsyncStorage.getItem('LAST_ACTIVE_TIME');

            console.log('Token:', token);
            console.log('LastActive:', lastActive);

            if (token && lastActive) {
                const diff = Date.now() - parseInt(lastActive);
                console.log('Time difference:', diff);

                if (diff > TIMEOUT) {
                    console.log('Lock should trigger');
                    setLocked(true);
                }
            }
        }

        appState.current = nextAppState;
    };

    const unlockWithBiometrics = async () => {
        const rnBiometrics = new ReactNativeBiometrics();

        const { success } = await rnBiometrics.simplePrompt({
            promptMessage: 'Unlock SalaryPlus',
        });

        if (success) {
            setLocked(false);
        }
    };

    if (locked) {
        return <LockScreen onUnlock={unlockWithBiometrics} />;
    }

    return <View style={{ flex: 1 }}>{children}</View>;
};

export default AppLockProvider;