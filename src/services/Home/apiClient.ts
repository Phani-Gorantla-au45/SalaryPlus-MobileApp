import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'https://salaryplus.club/api';

export const apiRequest = async (
  endpoint: string,
  method: string,
  body?: any
) => {
  try {
    // Get token from storage
    const token = await AsyncStorage.getItem('USER_TOKEN');

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : '',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log('API Error:', error);
    throw error;
  }
};
