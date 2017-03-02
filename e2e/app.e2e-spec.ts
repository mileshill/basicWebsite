import { BasicWebsitePage } from './app.po';

describe('basic-website App', function() {
  let page: BasicWebsitePage;

  beforeEach(() => {
    page = new BasicWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
