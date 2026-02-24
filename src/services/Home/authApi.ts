import { getToken } from '../../utils/tokenStorage';
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
export const registerApi = async (
  data: {
    First_name: string;
    Last_name: string;
    email: string;
    stateName: string;
  },
  token: string
) => {
  return await apiRequest(
    '/registration/complete-profile',
    'POST',
    data,
    token
  );
};

// GET GOLD & SILVER RATES
export const getRatesApi = async () => {
  return await apiRequest('/augmont/master/rates', 'GET');
};

// CREATE GOLD BUY INTENT
export const createGoldIntentApi = async (payload: {
  amount?: number;
  quantity?: number;
  lockPrice: number;
  blockId: string;
}) => {
  return await apiRequest('/juspay/metal/intent', 'POST', {
    metalType: 'gold',
    ...payload,
  });
};

// CREATE SILVER BUY INTENT
export const createSilverIntentApi = async (payload: {
  amount?: number;
  quantity?: number;
  lockPrice: number;
  blockId: string;
}) => {
  return await apiRequest('/juspay/metal/intent', 'POST', {
    metalType: 'silver',
    ...payload,
  });
};

// CHECK JUSPAY TRANSACTION STATUS
export const checkTransactionStatusApi = async (payload: {
  merchantRequestId: string;
}) => {
  return await apiRequest('/juspay/transaction-status', 'POST', {
    merchantRequestId: payload.merchantRequestId,
    transactionType: 'MERCHANT_CREDITED_VIA_PAY', // hardcoded for now
  });
};

// CREATE GOLD ACCOUNT (Auto)
export const createGoldAccountApi = async () => {
  return await apiRequest('/gold/create', 'POST');
};