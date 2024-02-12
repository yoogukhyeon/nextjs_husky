const path = require('path')

const buildEslintCommand = (filenames) => `npm run lint`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}
