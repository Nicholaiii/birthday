const { version } = require('./package.json')
console.log(
  `@nicholai/core v${version}`,
  (new Date).toLocaleDateString('da-DK')
)
