import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import TabIcon from '../../asserts/TabIcon';


const AppHeader = ({ onMenuPress }: any) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {console.log('MENU CLICKED');onMenuPress();}}>
                <TabIcon name="menu" size={24} color="#1E293B" />
            </TouchableOpacity>
        </View>
    );
};

export default AppHeader;

const styles = StyleSheet.create({
    container: {
        height: 70,
        backgroundColor: '#e5e0d4',
        paddingHorizontal: 20,
        justifyContent: 'center',
        elevation: 5,
    },
});
