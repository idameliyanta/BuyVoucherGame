import express from 'express';
import { getVouchers, purchaseVoucher, getTransactionHistory } from './api';

const app = express();
app.use(express.json());

app.get('/api/vouchers', async (req, res) => {
  const vouchers = await getVouchers();
  res.json(vouchers);
});

app.post('/api/purchase', async (req, res) => {
  const { voucherId, paymentInfo } = req.body;
  const result = await purchaseVoucher(voucherId, paymentInfo);
  res.json(result);
});

app.get('/api/transactions', async (req, res) => {
  const transactions = await getTransactionHistory();
  res.json(transactions);
});

app.listen(3000, () => {
  console.log('Backend is running on port 3000');
});
