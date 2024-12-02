import React, { useEffect, useState } from 'react';
import { getTransactionHistory } from '../services/api';

const TransactionHistory: React.FC = () => {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const data = await getTransactionHistory();
      setTransactions(data);
    };
    fetchTransactions();
  }, []);

  return (
    <div>
      <h1>Riwayat Transaksi</h1>
      <ul>
        {transactions.map((transaction: any) => (
          <li key={transaction.id}>
            <p>ID Transaksi: {transaction.id}</p>
            <p>Status Pembayaran: {transaction.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
