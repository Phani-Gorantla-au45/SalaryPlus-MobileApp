import { apiRequest } from './apiClient';

// SEND OTP
export const sendOtpApi = async (phone: string) => {
  return await apiRequest('/registration/send-otp', 'POST', {
    phone,
  });
};

// VERIFY OTP
export const verifyOtpApi = async (phone: string, otp: string) => {
  return await apiRequest('/registration/verify-otp', 'POST', {
    phone,
    otp,
  });
};

// COMPLETE PROFILE
export const registerApi = async (data: {
  First_name: string;
  Last_name: string;
  email: string;
  stateName: string;
}) => {
  return await apiRequest(
    '/registration/complete-profile',
    'POST',
    data
  );
};
