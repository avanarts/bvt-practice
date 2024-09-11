//per Alexander Lucas, we could upload the notes that we took during Udemy course


//inheritance
class Instrument {
    constructor(musicianName, exp) {
        this._musicianName = musicianName;
        this.exp = exp;
    }

    //static method
    static getName = function() {
        console.log('Instrument');
    }

    //method
    logName = function() {
        console.log(`The musician's name is ${this.musicianName}, who has ${this.exp} year(s) of experience.`)
    }

    //getters & setters
    get firstName() {
        return this._musicianName;
    }

    set firstName(name) {
        return this._musicianName = name;
    }
}

class Viola extends Instrument {
    constructor(musicianName, exp, family) {
        super(musicianName, exp);
        this.family = family;
        this.strings = 4;
    }
}

const viol = new Viola('Annie', 3, 'Woodwind')
console.log(viol._musicianName)
viol.firstName = 'Jess'
console.log(viol._musicianName)


//can change flags
const viol2 = new Viola('Maria', 5, 'Woodwind')
Object.defineProperty(viol2, 'musicianName', {
    writable: false,
    configurable: false,
    enumerable: false
});


//bind
class App {
    constructor() {
        this.serverName = 'localhost';

        //common place to put event listeners, runs on instantiation of object
        document.querySelector('click', this.getServerName.bind(this))
    }

    getServerName() {
        console.log(this.serverName)
    }
}

class Wallet {
    constructor() {
        this._balance = 0;
        this._transactions = [];
    }

    deposit(amt) {
        this._processDeposit(amt);
        this._balance += amt;
    }

    withdraw(amt) {
        amt > this._balance ? console.log('Not enough funds') : this._balance -= amt;

        this._processWithdraw(amt);
    }

    get balance() {
        return this._balance;
    }
    
    get transactions() {
        return this._transactions;
    }

    //private method
    _processDeposit(amt) {
        console.log(`Depositing ${amt}...`)
        this._transactions.push({
            type: 'deposit',
            amt
        })
    }

    _processWithdraw(amt) {
        console.log(`Withdrawing ${amt}...`)
        this._transactions.push({
            type: 'withdraw',
            amt
        })
    }
}

const wallet = new Wallet();
wallet.deposit(500);
wallet.withdraw(300);