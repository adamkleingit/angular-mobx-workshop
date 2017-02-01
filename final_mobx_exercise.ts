import {sumBy} from 'lodash';
import {extendObservable, autorunAsync, when,reaction,observable, computed, action, autorun, transaction, useStrict} from 'mobx';
useStrict(true);

class Transaction {
  constructor(value) {
    this.value = value;
  }
  @observable value;
}

class Selected {
  @observable selections = {};

  @action select(p, val) {
    extendObservable(this.selections, {[p.name]: val});
  }

  isSelected(p) {
    return this.selections[p.name];
  }
}

const selected = new Selected();

class Person {
  @observable name;
  @observable lastName;

  @observable transactions = [];

   constructor(name, lastName) {
     Object.assign(this, {name, lastName});
   }

  @computed get funds() {
    return sumBy(this.transactions, 'value');
  }

  @action addFunds(value) {
    this.transactions = [...this.transactions, new Transaction(value)];
  }

  @action clearFunds() {
    this.transactions = [];
  }

  @action setName(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  @computed get fullName() {
    return [this.name, this.lastName].join(' ');
  }
}

const a = new Person('Adam', 'Klein');

selected.select(a, true);
autorun(() => {
  bin.log(selected.isSelected(a));
});
selected.select(a, false);
selected.select(a, true);

/*
reaction(() => a.transactions, () => {
  bin.log(a.transactions.length);
}, {fireImmediately: true, delay: 200});

a.setName('James', 'Bond');
reaction(() => Math.floor(a.funds / 1000), (fundsK) => {
  bin.log(`${fundsK} K`);
});
const i = setInterval(() => {
  a.addFunds(10);
}, 10);

bin.log('start');

when(() => a.funds >= 2000, () => {
  clearInterval(i);
  a.clearFunds();
  bin.log('done');
});
*/
