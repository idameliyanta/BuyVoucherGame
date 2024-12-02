actor VoucherCanister {
  stable var vouchers: [Voucher] = [];

  type Voucher = {
    id: Nat;
    name: Text;
    price: Nat;
    available: Bool;
  };

  public func addVoucher(name: Text, price: Nat) : async Text {
    let id = Nat.fromInt(List.length(vouchers));
    vouchers := vouchers # [{ id = id; name = name; price = price; available = true }];
    "Voucher added successfully."
  };

  public func getVouchers() : async [Voucher] {
    vouchers
  };
};
