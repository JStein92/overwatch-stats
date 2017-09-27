import { OverwatchSitePage } from './app.po';

describe('overwatch-site App', () => {
  let page: OverwatchSitePage;

  beforeEach(() => {
    page = new OverwatchSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
