import React, { useEffect, useState } from 'react';
import { getVouchers } from '../services/api';

const VoucherList: React.FC = () => {
  const [vouchers, setVouchers] = useState<any[]>([]);

  useEffect(() => {
    const fetchVouchers = async () => {
      const data = await getVouchers();
      setVouchers(data);
    };
    fetchVouchers();
  }, []);

  return (
    <div>
      <h1>Daftar Voucher Game</h1>
      <ul>
        {vouchers.map((voucher: any) => (
          <li key={voucher.id}>
            <h3>{voucher.name}</h3>
            <p>Harga: {voucher.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VoucherList;
