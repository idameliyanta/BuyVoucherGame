import React, { useState, useEffect } from 'react';
import './App.css';
import VoucherList from './components/VoucherList';
import PurchaseVoucher from './components/PurchaseVoucher';
import TransactionHistory from './components/TransactionHistory';
import { getVouchers, getTransactionHistory } from './services/api';

const App: React.FC = () => {
  const [vouchers, setVouchers] = useState<any[]>([]);
  const [transactions, setTransactions] = useState<any[]>([]);

  // Fetch vouchers and transaction history from API
  useEffect(() => {
    const fetchVouchers = async () => {
      const data = await getVouchers();
      setVouchers(data);
    };
    
    const fetchTransactions = async () => {
      const data = await getTransactionHistory();
      setTransactions(data);
    };
    
    fetchVouchers();
    fetchTransactions();
  }, []);

  return (
    <div className="App">
      <h1>Aplikasi Jual Beli Voucher Game</h1>
      <VoucherList vouchers={vouchers} />
      <PurchaseVoucher vouchers={vouchers} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

export default App;
