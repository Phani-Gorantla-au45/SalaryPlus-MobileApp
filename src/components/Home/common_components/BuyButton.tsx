import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Props {
  title: string;
  color: string;
  screen: string;
}

const BuyButton: React.FC<Props> = ({ title, color, screen }) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={[styles.button, { borderColor: color }]}
      onPress={() => navigation.navigate(screen)}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BuyButton;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: 'center',
    borderWidth: 1.5,
    backgroundColor: 'transparent',
  },

  text: {
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.6,
  },
});