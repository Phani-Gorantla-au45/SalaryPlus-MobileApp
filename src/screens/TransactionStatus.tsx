import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { checkTransactionStatusApi } from '../services/Home/authApi';

const POLL_INTERVAL = 3000; // 3 seconds
const MAX_POLL_TIME = 60 * 1000; // 1 minute

const TransactionStatus = () => {
  const route = useRoute<any>();
  const { merchantRequestId } = route.params;

  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState<number | null>(null);
  const [txnId, setTxnId] = useState<string | null>(null);
  const [status, setStatus] = useState<'SUCCESS' | 'FAILED' | 'PENDING' | null>(null);
  const [metalType, setMetalType] = useState<string | null>(null);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    startPolling();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startPolling = () => {
    intervalRef.current = setInterval(async () => {
      try {
        console.log('🔁 Polling payment status...');

        const response = await checkTransactionStatusApi({
          merchantRequestId,
        });

        console.log('📥 STATUS RESPONSE:', response);

        const txnStatus = response?.txn?.status;

        /* ---------------- SUCCESS ---------------- */
        if (txnStatus === 'SUCCESS') {
          console.log('✅ PAYMENT SUCCESS DETECTED');

          setQuantity(response.txn.quantity);
          setTxnId(response.txn.merchantTransactionId);
          setMetalType(response.txn.metalType);
          setStatus('SUCCESS');

          clearInterval(intervalRef.current!);
          return;
        }

        /* ---------------- FAILURE ---------------- */
        if (txnStatus === 'FAILED') {
          console.log('❌ PAYMENT FAILED DETECTED');

          setStatus('FAILED');
          clearInterval(intervalRef.current!);
          return;
        }

        /* ---------------- PENDING ---------------- */
        setStatus('PENDING');

        /* ---------------- TIMEOUT SAFETY ---------------- */
        if (Date.now() - startTimeRef.current > MAX_POLL_TIME) {
          console.log('⏰ PAYMENT TIMEOUT');

          setStatus('FAILED');
          clearInterval(intervalRef.current!);
        }

      } catch (error) {
        console.log('🔥 Polling Error:', error);

        // Do NOT mark failed for network issues
        setStatus('PENDING');
      } finally {
        setLoading(false);
      }
    }, POLL_INTERVAL);
  };

  /* ---------------- LOADING SCREEN ---------------- */
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#FFD700" />
        <Text style={styles.loadingText}>
          Checking payment status...
        </Text>
      </View>
    );
  }

  /* ---------------- SUCCESS UI ---------------- */
  if (status === 'SUCCESS') {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.success}>Payment Successful</Text>

          <Text style={styles.label}>Transaction ID</Text>
          <Text style={styles.value}>{txnId}</Text>

          <Text style={styles.label}>
            {metalType === 'gold'
              ? 'Gold Purchased'
              : 'Silver Purchased'}
          </Text>
          <Text style={styles.value}>{quantity} gm</Text>
        </View>
      </View>
    );
  }

  /* ---------------- PENDING UI ---------------- */
  if (status === 'PENDING') {
    return (
      <View style={styles.container}>
        <Text style={styles.pending}>⏳ Payment Processing...</Text>
      </View>
    );
  }

  /* ---------------- FAILED UI ---------------- */
  return (
    <View style={styles.container}>
      <Text style={styles.failed}>❌ Payment Failed</Text>
    </View>
  );
};

export default TransactionStatus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000307',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 15,
    color: '#fff',
  },
  card: {
    backgroundColor: '#111827',
    padding: 25,
    borderRadius: 15,
    width: '100%',
  },
  success: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#22C55E',
    marginBottom: 20,
    textAlign: 'center',
  },
  failed: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EF4444',
  },
  pending: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FACC15',
  },
  label: {
    color: '#aaa',
    marginTop: 10,
  },
  value: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
});