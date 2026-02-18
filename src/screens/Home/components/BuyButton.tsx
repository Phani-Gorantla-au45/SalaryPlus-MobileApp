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
    >
      <Text style={[styles.text, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BuyButton;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderWidth: 1,
    padding: 14,
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
  },
});
