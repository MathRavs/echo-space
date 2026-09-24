const { defineConfig } = require('cz-git');

/**
 * Gitmoji types matching commitlint-config-gitmoji's type-enum
 * (@gitmoji/commit-types), each mapped to a valid code from
 * https://gitmoji.dev so that `commitlint-plugin-gitmoji`
 * (start-with-gitmoji rule) and the `cz-git` prompt stay in sync.
 */
const types = [
  { value: 'feat', name: 'feat:     ✨  A new feature', emoji: ':sparkles:' },
  { value: 'fix', name: 'fix:      🐛  A bug fix', emoji: ':bug:' },
  { value: 'docs', name: 'docs:     📝  Documentation only changes', emoji: ':memo:' },
  { value: 'style', name: 'style:    🎨  Code style / formatting (no logic change)', emoji: ':art:' },
  { value: 'refactor', name: 'refactor: ♻️   A code change that neither fixes a bug nor adds a feature', emoji: ':recycle:' },
  { value: 'perf', name: 'perf:     ⚡️  A code change that improves performance', emoji: ':zap:' },
  { value: 'test', name: 'test:     ✅  Adding or correcting tests', emoji: ':white_check_mark:' },
  { value: 'build', name: 'build:    📦️  Build system or external dependencies', emoji: ':package:' },
  { value: 'ci', name: 'ci:       👷  CI configuration files and scripts', emoji: ':construction_worker:' },
  { value: 'chore', name: 'chore:    🔧  Other changes that don\'t modify src or test files', emoji: ':wrench:' },
  { value: 'revert', name: 'revert:   ⏪️  Reverts a previous commit', emoji: ':rewind:' },
  { value: 'wip', name: 'wip:      🚧  Work in progress', emoji: ':construction:' },
];

/** @type {import('cz-git').UserConfig} */
module.exports = defineConfig({
  extends: ['gitmoji'],
  rules: {
    'header-max-length': [2, 'always', 100],
  },
  prompt: {
    useEmoji: true,
    emojiAlign: 'left',
    types,
    messages: {
      type: "Sélectionne le type de changement que tu commites :",
      scope: 'Portée du changement (optionnel) :',
      customScope: 'Portée du changement :',
      subject: 'Écris une description courte, à l\'impératif :\n',
      body: 'Décris plus en détail le changement (optionnel). Utilise "|" pour un saut de ligne :\n',
      breaking: 'Liste les BREAKING CHANGES (optionnel). Utilise "|" pour un saut de ligne :\n',
      footerPrefixSelect: 'Sélectionne le type de ticket concerné (optionnel) :',
      customFooterPrefix: 'Préfixe du ticket :',
      footer: 'Liste les tickets concernés. Ex: #31, #34 :\n',
      confirmCommit: 'Confirmer la création de ce commit ?',
    },
  },
});
