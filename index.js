let balance = 500.00;

class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
    this._balance = 0;
  }

  get balance() {
    let total = 0;
    this.account.transactions.forEach(x => {
      if (x[0] === 'Deposit') {
        total += x[1].amount;
      }
      if (x[0] === 'Withdrawal') {
        total -= x[1].amount;
      }
    })
    return this._balance = total;
  }
  
  set balance(value) {
    this._balance = value;
  }
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account._balance += this.value;
    this.account.addTransaction(this);
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account('Big Poppa');

console.log(myAccount._balance)

t1 = new Deposit(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 2:', t2);

console.log('Balance:', myAccount._balance);
