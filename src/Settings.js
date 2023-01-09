const correctTheme = [
  'dark',
  'light',
  'gray',
];

const correctMusic = [
  'trance',
  'pop',
  'rock',
  'chillout',
  'off',
];

const correctDifficulty = [
  'easy',
  'normal',
  'hard',
  'nightmare',
];

const startingSettings = new Map([
  ['theme', 'dark'],
  ['music', 'trance'],
  ['difficulty', 'easy'],
]);

export default class Settings {
  constructor() {
    this.defaultSettings = startingSettings;
    this.userSettings = new Map();
  }

  setThemeUserSettings(theme) {
    if (!correctTheme.some((setting) => setting.toLowerCase() === theme.toLowerCase())) {
      throw new Error('Некорректная theme');
    }
    this.userSettings.set('theme', theme);
  }

  setMusicUserSettings(music) {
    if (!correctMusic.some((setting) => setting.toLowerCase() === music.toLowerCase())) {
      throw new Error('Некорректная music');
    }
    this.userSettings.set('music', music);
  }

  setDifficultyUserSettings(difficulty) {
    if (!correctDifficulty.some((setting) => setting.toLowerCase() === difficulty.toLowerCase())) {
      throw new Error('Некорректная difficulty');
    }
    this.userSettings.set('difficulty', difficulty);
  }

  get settings() {
    this.userSettings.forEach((value, key) => this.defaultSettings.set(key, value));
    return this.defaultSettings;
  }
}
