import { FormExercisePage } from './app.po';

describe('form-exercise App', () => {
  let page: FormExercisePage;

  beforeEach(() => {
    page = new FormExercisePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
