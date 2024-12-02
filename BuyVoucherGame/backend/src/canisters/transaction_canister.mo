actor TransactionCanister {
  stable var transactions: [Transaction] = [];

  type Transaction = {
    id: Nat;
    voucherId: Nat;
    userId: Text;
    status: Text;
  };

  public func createTransaction(voucherId: Nat, userId: Text, paymentInfo: Text) : async Text {
    let id = Nat.fromInt(List.length(transactions));
    let status = "Pending"; // Status awal transaksi
    transactions := transactions # [{ id = id; voucherId = voucherId; userId = userId; status = status }];
    "Transaction created successfully."
  };

  public func getTransactionHistory() : async [Transaction] {
    transactions
  };
};
