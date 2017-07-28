import { Ex2Page } from './app.po';

describe('ex2 App', () => {
  let page: Ex2Page;

  beforeEach(() => {
    page = new Ex2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
