import { QuackPage } from './app.po';

describe('quack App', () => {
  let page: QuackPage;

  beforeEach(() => {
    page = new QuackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
