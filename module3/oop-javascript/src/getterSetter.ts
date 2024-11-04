class Account {
  public readonly id: string;
  public name: string;
  private _balance: number;

  constructor(id: string, _balance: number, name: string) {
    this.id = id;
    this._balance = _balance;
    this.name = name;
  }

  //getter
  get balance() {
    return this._balance;
  }

  //setter
  set deposit(amount: number) {
    this._balance += amount;
  }
}

const anotherAccount = new Account("134343", 500, "Hasib");
anotherAccount.deposit = 10;
console.log(anotherAccount.balance);
