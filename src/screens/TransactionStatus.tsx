import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { checkTransactionStatusApi } from '../services/Home/authApi';

const TransactionStatus = () => {
  const route = useRoute<any>();
  const { merchantRequestId } = route.params;

  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState<number | null>(null);
  const [txnId, setTxnId] = useState<string | null>(null);
  const [status, setStatus] = useState<'SUCCESS' | 'FAILED' | 'PENDING' | null>(null);
  const [metalType, setMetalType] = useState<string | null>(null);

  useEffect(() => {
    checkStatus();
  }, []);

  const checkStatus = async () => {
    try {
      console.log('📤 Checking Status For:', merchantRequestId);

      const response = await checkTransactionStatusApi({
        merchantRequestId,
      });

      console.log('📥 FULL STATUS RESPONSE:', response);

      // 🔎 Detailed Debug Logs
      console.log("🔎 FINAL STATUS:", response?.status);
      console.log("🔎 SUCCESS FLAG:", response?.success);
      console.log("🔎 TXN EXISTS:", !!response?.txn);
      console.log("🔎 TXN STATUS:", response?.txn?.status);
      console.log("🔎 PROVIDER STATUS:", response?.txn?.providerStatus);

      /**
       * ✅ SUCCESS CONDITION
       * We trust backend status OR txn.status
       */
      if (
        response?.success &&
        response?.txn &&
        (response?.status === 'SUCCESS' || response?.txn?.status === 'SUCCESS')
      ) {
        console.log("✅ SUCCESS BLOCK TRIGGERED");

        setQuantity(response.txn.quantity);
        setTxnId(response.txn.merchantTransactionId);
        setMetalType(response.txn.metalType);
        setStatus('SUCCESS');

        return;
      }

      /**
       * ⏳ PENDING CONDITION
       */
      if (
        response?.status === 'PENDING' ||
        response?.txn?.status === 'PENDING'
      ) {
        console.log("⏳ PAYMENT STILL PENDING");
        setStatus('PENDING');
        return;
      }

      /**
       * ❌ FAILURE FALLBACK
       */
      console.log("❌ FAILED BLOCK TRIGGERED");
      setStatus('FAILED');

    } catch (error) {
      console.log('🔥 STATUS ERROR:', error);
      setStatus('FAILED');
    } finally {
      setLoading(false);
    }
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