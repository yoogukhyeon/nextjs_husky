const path = require('path')

const buildEslintCommand = (filenames) =>
  `npm lint --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}
