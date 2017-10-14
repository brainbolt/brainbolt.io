import { Brainbolt.IoPage } from './app.po';

describe('brainbolt.io App', () => {
  let page: Brainbolt.IoPage;

  beforeEach(() => {
    page = new Brainbolt.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
