import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'USER_TOKEN';
//save token
export const saveToken = async (token: string) => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);

    console.log('✅ TOKEN SAVED:', token);

    const stored = await AsyncStorage.getItem(TOKEN_KEY);
    console.log('📦 TOKEN FROM STORAGE:', stored);

  } catch (error) {
    console.log('❌ ERROR SAVING TOKEN:', error);
  }
};

//get token
export const getToken = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  console.log('🔍 GET TOKEN:', token);
  return token;
};

// remove token 
export const removeToken = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY);
  console.log('🗑 TOKEN REMOVED');
};