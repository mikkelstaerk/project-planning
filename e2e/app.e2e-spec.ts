import { TeamWeekPage } from './app.po';

describe('team-week App', () => {
  let page: TeamWeekPage;

  beforeEach(() => {
    page = new TeamWeekPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
