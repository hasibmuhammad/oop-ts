class BankAccount {
  public readonly accountNo: string;
  protected _balance: number;
  public name: string;

  constructor(accountNo: string, _balance: number, name: string) {
    this.accountNo = accountNo;
    this._balance = _balance;
    this.name = name;
  }

  public deposit(amount: number) {
    this._balance += amount;
  }

  public getBalance() {
    return this._balance;
  }
}

const account1 = new BankAccount("134adjkjf", 500, "shuvo");
account1.deposit(49);

console.log(account1.getBalance());

// inherit bankAccount class
class NormalAccount extends BankAccount {
  constructor(accountNo: string, _balance: number, name: string) {
    super(accountNo, _balance, name);
  }
}
const normal = new NormalAccount("jfkdfsd", 10, "fjdfj");
normal.getBalance();

// inherit bankAccount class
class AnotherClass extends NormalAccount {
  constructor(accountNo: string, _balance: number, name: string) {
    super(accountNo, _balance, name);
  }
}
