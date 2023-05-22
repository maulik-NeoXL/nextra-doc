const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  basePath: '/help2',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra()
