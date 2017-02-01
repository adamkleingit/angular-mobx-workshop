import {sumBy} from 'lodash';
import {extendObservable, observable, autorun, action, useStrict, computed, reaction, when} from 'mobx';
useStrict(true);

class Registry {
  @observable selected = {};

  @action select(p, value) {
    extendObservable(this.selected, {[p.name]: value});
  }
  isSelected(p) {
    return this.selected[p.name];
  }
}

const r = new Registry();

class Person {
  @observable firstName: string;
  @observable lastName: string;

  @observable transactions = [];

  constructor(firstName, lastName) {
    this.setNames(firstName, lastName);
    r.select(this, false);
  }

  @action addFunds(value) {
    this.transactions.push({value});
  }

  @action clearFunds() {
    this.transactions = [];
  }

  @computed get funds() {
    return sumBy(this.transactions, 'value');
  }

  @action setNames(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  @computed get fullname() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const p = new Person('Adam', 'Klein');

autorun(() => {
  console.log(r.isSelected(p));
});

r.select(p, true);
r.select(p, false);
r.select(p, true);
// const i = setInterval(() => {
//   p.addFunds(100);
// }, 100);

// const dispose = autorun(() => {
//   console.log(p.funds);
// });
//
// reaction(() => Math.floor(p.funds / 1000), (k) => {
//   console.log(`${k}k`);
// });
//
// when(() => p.funds >= 1000, () => {
//   dispose();
// });
//
// when(() => p.funds >= 3000, () => {
//   clearInterval(i);
// });
