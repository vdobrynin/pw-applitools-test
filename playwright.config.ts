import { EyesFixture } from '@applitools/eyes-playwright/fixture';
import { defineConfig, devices } from '@playwright/test';
import { MatchLevel, StitchMode } from '@applitools/eyes-playwright';

export default defineConfig<EyesFixture>({
  // reporter: 'html',                                      // #75.1 first test
  reporter: '@applitools/eyes-playwright/reporter',  // #75.1 then change

  use: {
    /* Configuration for Eyes VisualAI */
    eyesConfig: {
      /* The following and other configuration parameters are documented at: <url> */
      apiKey: 'PfOl8NHYrjt108PYZSqybag00UOOqG16zROdRo4QVIFvc110', // alternatively, set this via environment variable APPLITOOLS_API_KEY
      // apiKey: process.env.APPLITOOLS_API_KEY,
      // serverUrl: 'https://eyes.applitools.com',

      // failTestsOnDiff: 'false',
      // appName: 'My App',
      // matchLevel: 'Strict',
      // batch: { name: 'My batch' },
      // proxy: '{url:http://127.0.0.1:8888',
      // stitchMode: 'CSS',
      // matchTimeout: '0',
      // waitBeforeScreenshots: 50,
      // saveNewTests: true,
    },

    baseURL: 'http://localhost:4200',
    viewport: { height: 720, width: 1280 }
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
