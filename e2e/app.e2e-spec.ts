import { MealTrackerAngularCliPage } from './app.po';

describe('meal-tracker-angular-cli App', function() {
  let page: MealTrackerAngularCliPage;

  beforeEach(() => {
    page = new MealTrackerAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
