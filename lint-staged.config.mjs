const isCI = !!process.env.CI;

const quote = (files) => files.map((file) => JSON.stringify(file)).join(' ');

const eslint = `eslint --cache --no-warn-ignored ${isCI ? '--quiet' : '--fix'}`;
const prettier = `prettier --cache ${isCI ? '--check' : '--write'}`;
const stylelint = `stylelint --cache ${isCI ? '' : '--fix'}`;

/** @type {import('lint-staged').Configuration} */
export default {
  '*.{ts,tsx,mts,cts,js,jsx,mjs,cjs}': (files) => [
    // Refresh the Nx project graph so @nx/enforce-module-boundaries sees new projects
    'nx daemon --stop',
    'nx show projects',
    `${eslint} ${quote(files)}`,
    `${prettier} ${quote(files)}`,
  ],
  // Prettier first: stylelint --fix then adds what Prettier doesn't (e.g. empty lines between rules)
  'front/{apps,libs}/**/*.{css,scss}': [prettier, stylelint],
  '*.{json,md,html,yml,yaml}': prettier,
};
