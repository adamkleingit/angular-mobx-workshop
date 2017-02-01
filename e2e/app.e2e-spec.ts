import { MulticheckboxPage } from './app.po';

describe('multicheckbox App', function() {
  let page: MulticheckboxPage;

  beforeEach(() => {
    page = new MulticheckboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
