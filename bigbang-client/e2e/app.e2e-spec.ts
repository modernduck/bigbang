import { BigbangClientPage } from './app.po';

describe('bigbang-client App', function() {
  let page: BigbangClientPage;

  beforeEach(() => {
    page = new BigbangClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
