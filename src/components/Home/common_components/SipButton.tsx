import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Props {
  title: string;
  screen: string;
}

const SipButton: React.FC<Props> = ({ title, screen }) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(screen)}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SipButton;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#2A2A2A',
    backgroundColor: '#1E1E1E',
  },

  text: {
    color: '#F5F5F5',
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.5,
  },
});