import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as voucherIdl } from './voucher_canister';
import { idlFactory as transactionIdl } from './transaction_canister';

const agent = new HttpAgent();
const voucherCanisterId = "your-voucher-canister-id";
const transactionCanisterId = "your-transaction-canister-id";

const voucherCanister = Actor.createActor(voucherIdl, { agent, canisterId: voucherCanisterId });
const transactionCanister = Actor.createActor(transactionIdl, { agent, canisterId: transactionCanisterId });

export const getVouchers = async () => {
  return await voucherCanister.getVouchers();
};

export const addVoucher = async (name: string, price: number) => {
  return await voucherCanister.addVoucher(name, price);
};

export const purchaseVoucher = async (voucherId: string, paymentInfo: string) => {
  // Proses pembayaran dan validasi (ini hanya contoh, bisa lebih kompleks)
  const userId = "user-example-id"; // Misalnya ID pengguna
  await transactionCanister.createTransaction(BigInt(voucherId), userId, paymentInfo);
  return { message: "Voucher purchased successfully" };
};

export const getTransactionHistory = async () => {
  return await transactionCanister.getTransactionHistory();
};
