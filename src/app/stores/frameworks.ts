import { observable, computed, action } from 'mobx';

export class Framework {
  @observable checked:boolean;
  @observable name:string;

  constructor(name) {
    this.name = name;
  }

}
export class Frameworks {
  @observable items:Framework[] = [
    new Framework('Angular'),
    new Framework('React'),
    new Framework('Backbone'),
    new Framework('Vue'),
    new Framework('Ember')
  ];
  @observable filter:string = '';

  constructor() {
  }

  @action setAll(value:boolean) {
    this.filteredItems.forEach((item) => item.checked = value);
  }

  @action addNew(frameworkName:string) {
    this.items.push(new Framework(frameworkName));
  }

  @computed get filteredItems():Framework[] {
    const regexp = new RegExp(this.filter, 'i');
    return this.items.filter((item) => regexp.test(item.name));
  }

  @computed get selectedItems():Framework[] {
    return this.items.filter((item) => item.checked);
  }

  @computed get isAllChecked():boolean {
    for (const item of this.filteredItems) {
      if (!item.checked) return false;
    }

    return true;
  }
  set isAllChecked(value:boolean) {
    this.setAll(value);
  }
}

export const frameworks = new Frameworks();
window['state'] = frameworks;
