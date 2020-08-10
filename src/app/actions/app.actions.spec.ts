import * as fromAppActions from './app.actions';

describe('enterHomePage', () => {
  it('should return an action', () => {
    expect(fromAppActions.enterHomePage().type).toBe('[Home Page] Enter');
  });
});
