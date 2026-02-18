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
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SipButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    padding: 14,
    flex: 1,
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
  },
});
