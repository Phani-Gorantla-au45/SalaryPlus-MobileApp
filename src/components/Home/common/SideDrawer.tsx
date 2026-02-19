import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Animated,
    Dimensions,
    Pressable,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignOutButton from './SignOutButton';



const { width } = Dimensions.get('window');

const SideDrawer = ({ visible, onClose }: any) => {
    const slideAnim = useRef(new Animated.Value(-width)).current;

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: visible ? 0 : -width,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [visible]);

    return (
        <View
            pointerEvents={visible ? 'auto' : 'none'}
            style={StyleSheet.absoluteFill}
        >
            {/* Dark Overlay */}
            {visible && (
                <Pressable style={styles.backdrop} onPress={onClose} />
            )}

            <Animated.View
                style={[
                    styles.drawer,
                    { transform: [{ translateX: slideAnim }] },
                ]}
            >
                <View style={styles.profileSection}>
                    <Text style={styles.name}>NITHIN KUMAR</Text>
                    <Text style={styles.phone}>6305166013</Text>
                </View>
                {/* signout button */}
                <SignOutButton onClose={onClose}  />


            </Animated.View>
        </View>
    );
};

export default SideDrawer;

const styles = StyleSheet.create({
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    drawer: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: width * 0.75,
        backgroundColor: '#000309',
        paddingTop: 60,
        paddingHorizontal: 20,
        justifyContent: 'space-between',

    },
    profileSection: {
        marginBottom: 40,
    },
    name: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    phone: {
        color: '#94A3B8',
        marginTop: 5,
    },
    signOutButton: {
        marginBottom: 50,
    },
    signOutText: {
        color: '#FACC15',
        fontSize: 16,
        fontWeight: '600',
    },
});
