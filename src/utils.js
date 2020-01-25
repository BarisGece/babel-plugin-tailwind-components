import resolveTailwindConfig from 'tailwindcss/lib/util/resolveConfig.js'
import defaultTailwindConfig from 'tailwindcss/stubs/defaultConfig.stub.js'
import processPlugins from 'tailwindcss/lib/util/processPlugins.js'
import dlv from 'dlv'
import dset from 'dset'
import container from 'tailwindcss/lib/plugins/container'

let resolvedConfig

let pluginClassNames

export function resolveConfig(config) {
  if (resolvedConfig) return resolvedConfig
  resolvedConfig = resolveTailwindConfig([config, defaultTailwindConfig])
  return resolvedConfig
}

export function stringifyScreen(config, screenName) {
  let screen = dlv(config, ['theme', 'screens', screenName])
  if (typeof screen === 'undefined') {
    throw new Error(`Couldn’t find Tailwind screen: ${screenName}`)
  }
  if (typeof screen === 'string') return `@media (min-width: ${screen})`
  if (typeof screen.raw === 'string') {
    return `@media ${screen.raw}`
  }
  let str = (Array.isArray(screen) ? screen : [screen])
    .map(range => {
      return [
        typeof range.min === 'string' ? `(min-width: ${range.min})` : null,
        typeof range.max === 'string' ? `(max-width: ${range.max})` : null
      ]
        .filter(Boolean)
        .join(' and ')
    })
    .join(', ')
  return str ? `@media ${str}` : ''
}

export function resolveStyle(config, opts, key) {
  for (let opt of opts) {
    if (
      [
        'backgroundColor',
        'borderColor',
        'textColor',
        'fill',
        'stroke'
      ].includes(opt.config)
    ) {
      let colors = flattenColors(dlv(config, ['theme', opt.config], {}))
      if (typeof colors[key] !== 'undefined') {
        return { [opt.prop]: colors[key] }
      }
    } else {
      let value = dlv(config, ['theme', opt.config, key])
      if (typeof value !== 'undefined') {
        if (opt.config === 'fontFamily' && Array.isArray(value)) {
          value = value.join(', ')
        }
        return { [opt.prop]: value }
      }
    }
  }

  return {}
}

function flattenColors(colors) {
  let result = {}
  for (let color in colors) {
    if (colors[color] === Object(colors[color])) {
      for (let key in colors[color]) {
        let suffix = key === 'default' ? '' : `-${key}`
        result[`${color}${suffix}`] = colors[color][key]
      }
    } else {
      result[color] = colors[color]
    }
  }
  return result
}

export function resolveStyleFromPlugins(config, className) {
  if (!pluginClassNames) {
    pluginClassNames = {}

    if ('container' in config.theme) {
      processPlugins([container()], config).components.forEach(rule => {
        if (rule.type === 'rule' && rule.selector === '.container') {
          var match = rule.selector.match(/^\.(\S+)(\s+.*?)?$/)
          if (match === null) {
            return
          }
          var name = match[1]
          var rest = match[2]
          var keys = rest ? [name, rest.trim()] : [name]
          dset(pluginClassNames, keys, {})
          rule.walkDecls(decl => {
            dset(pluginClassNames, keys.concat(decl.prop), decl.value)
          })
        } else if (rule.type === 'atrule' && rule.name === 'media') {
          throw new Error(
            'Container Screen Property is not supported. Please use theme screens'
          )
        } else {
          return
        }
      })
    }

    if (config.plugins && config.plugins.length) {
      processPlugins(config.plugins, config).utilities.forEach(function(rule) {
        if (rule.type !== 'atrule' || rule.name !== 'variants') {
          return
        }
        rule.each(node => {
          var match = node.selector.match(/^\.(\S+)(\s+.*?)?$/)
          if (match === null) {
            return
          }
          var name = match[1]
          var rest = match[2]
          var keys = rest ? [name, rest.trim()] : [name]
          dset(pluginClassNames, keys, {})
          node.walkDecls(decl => {
            dset(pluginClassNames, keys.concat(decl.prop), decl.value)
          })
        })
      })
    }
  }

  if (typeof pluginClassNames[className] === 'undefined') {
    throw new Error('Couldn’t resolve Tailwind class name: ' + className)
  }

  return pluginClassNames[className]
}
