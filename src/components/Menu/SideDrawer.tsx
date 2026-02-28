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
    backgroundColor: 'rgba(0,0,0,0.6)', // slightly deeper overlay
  },

  drawer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: width * 0.78,
    backgroundColor: '#121212', // premium dark
    paddingTop: 70,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    borderRightWidth: 1,
    borderRightColor: '#1E1E1E',
  },

  profileSection: {
    marginBottom: 40,
  },

  name: {
    color: '#F5F5F5',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  phone: {
    color: '#9CA3AF',
    marginTop: 6,
    fontSize: 14,
  },

  signOutButton: {
    marginBottom: 50,
  },

  signOutText: {
    color: '#D4AF37', // metallic gold
    fontSize: 16,
    fontWeight: '600',
  },
});