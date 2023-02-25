import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset'
import { defineConfig } from 'cypress'
import setupNodeEvents from './src/plugins/index'

const cypressJsonConfig: Cypress.ConfigOptions = {
  fileServerFolder: '.',
  fixturesFolder: './src/fixtures',
  video: true,
  videosFolder: './src/videos',
  screenshotsFolder: './src/screenshots',
  chromeWebSecurity: false,
  defaultCommandTimeout: 20000,
  responseTimeout: 20000,
  execTimeout: 20000,
  pageLoadTimeout: 20000,
  // projectId: '37q6ed',
  env: {},
  retries: {
    runMode: 1,
    openMode: 0,
  },
  viewportWidth: 1280,
  viewportHeight: 960,
  // specPattern: './src/integration/**/*.cy.{js,jsx,ts,tsx}',
  // supportFile: 'src/support/e2e.ts',
}

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename),
    ...cypressJsonConfig,
    setupNodeEvents,
    env: {
      // CYPRESS_ENABLE_LOGGING: false,
    },
    /**
     * TODO(@nrwl/cypress): In Cypress v12,the testIsolation option is turned on by default.
     * This can cause tests to start breaking where not intended.
     * You should consider enabling this once you verify tests do not depend on each other
     * More Info: https://docs.cypress.io/guides/references/migration-guide#Test-Isolation
     * */
    testIsolation: false,
  },
})
