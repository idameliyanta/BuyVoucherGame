import React, { useState } from 'react';
import { purchaseVoucher } from '../services/api';

const PurchaseVoucher: React.FC = () => {
  const [voucherId, setVoucherId] = useState('');
  const [paymentInfo, setPaymentInfo] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await purchaseVoucher(voucherId, paymentInfo);
    alert(result.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="ID Voucher" 
        value={voucherId} 
        onChange={(e) => setVoucherId(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Informasi Pembayaran" 
        value={paymentInfo} 
        onChange={(e) => setPaymentInfo(e.target.value)} 
      />
      <button type="submit">Beli Voucher</button>
    </form>
  );
};

export default PurchaseVoucher;
