import { AngularMobxWorkshopPage } from './app.po';

describe('angular-mobx-workshop App', function() {
  let page: AngularMobxWorkshopPage;

  beforeEach(() => {
    page = new AngularMobxWorkshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
