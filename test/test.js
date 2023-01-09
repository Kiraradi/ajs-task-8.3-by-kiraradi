import Settings from '../src/Settings';

test('test 1', () => {
  const testSettings = new Settings();
  testSettings.setDifficultyUserSettings('hard');
  testSettings.setMusicUserSettings('rock');
  testSettings.setThemeUserSettings('gray');

  const result = new Map([
    ['difficulty', 'hard'],
    ['music', 'rock'],
    ['theme', 'gray'],
  ]);

  expect(testSettings.userSettings).toEqual(result);
});

test('test throw setDifficultyUserSettings', () => {
  const testSettings = new Settings();
  expect(() => {
    testSettings.setDifficultyUserSettings('haerd');
  }).toThrow();
});

test('test throw setMusicUserSettings', () => {
  const testSettings = new Settings();
  expect(() => {
    testSettings.setMusicUserSettings('kpop');
  }).toThrow();
});

test('test throw setThemeUserSettings', () => {
  const testSettings = new Settings();
  expect(() => {
    testSettings.setThemeUserSettings('yellow');
  }).toThrow();
});

test('test get settings', () => {
  const testSettings = new Settings();
  testSettings.setDifficultyUserSettings('hard');
  testSettings.setMusicUserSettings('rock');
  testSettings.setThemeUserSettings('gray');

  const result = new Map([
    ['difficulty', 'hard'],
    ['music', 'rock'],
    ['theme', 'gray'],
  ]);

  expect(testSettings.settings).toEqual(result);
});
