import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: '.',
  timeout: 60 * 1000,
  expect: {
    timeout: 60 * 1000,
  },
  use: {
    trace: 'on',
    screenshot: 'on'
  },
  reporter: [['html', { open: 'never' }]],
};

export default config;
