export const getVouchers = async () => {
    const response = await fetch('/api/vouchers');
    return response.json();
  };
  
  export const purchaseVoucher = async (voucherId: string, paymentInfo: string) => {
    const response = await fetch('/api/purchase', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ voucherId, paymentInfo }),
    });
    return response.json();
  };
  
  export const getTransactionHistory = async () => {
    const response = await fetch('/api/transactions');
    return response.json();
  };
  