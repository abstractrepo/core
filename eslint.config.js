import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  typescript: true,
  files: ['./src/**/*.ts', './src/**/*.js'],
})
