const pluginTester = require('babel-plugin-tester').default
const plugin = require('babel-plugin-macros')
const path = require('path')
const glob = require('glob-all')
const fs = require('fs')
const prettier = require('prettier')

pluginTester({
  plugin,
  pluginName: 'tailwind-canary.macro',
  babelOptions: {   
    filename: __filename, 
    babelrc: true
  },
  snapshot: false,
  formatResult: code => {
    return prettier
      .format(code, {
        parser: 'babel',
        semi: false,
        singleQuote: true
      })
      .trim()
  },
  tests: glob.sync('__fixtures__/*').map(dir => {
    return {
      title: path.basename(dir),
      code: fs.readFileSync(path.join(dir, 'code.js'), 'utf-8'),
      output: fs.readFileSync(path.join(dir, 'output.js'), 'utf-8')
    }
  })
})
