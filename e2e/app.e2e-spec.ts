import { Angularapp1Page } from './app.po';

describe('angularapp1 App', function() {
  let page: Angularapp1Page;

  beforeEach(() => {
    page = new Angularapp1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
