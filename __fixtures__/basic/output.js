import _tailwindUtils from 'tailwind-canary.macro/utils.umd.js'
import _tailwindConfig2 from './tailwind.config.js'

const _tailwindConfig = _tailwindUtils.resolveConfig(_tailwindConfig2)

import _styled from '@emotion/styled'
let styles = {
  textTransform: 'uppercase'
}

let Box = _styled.div({
  textTransform: 'uppercase'
})

let BoxExtended = _styled(Box)({
  display: 'flex'
})

let ColRowGap = {
  gridRowGap: _tailwindConfig.theme.gap['4'],
  rowGap: _tailwindConfig.theme.gap['4'],
  gridColumnGap: _tailwindConfig.theme.gap['4'],
  columnGap: _tailwindConfig.theme.gap['4']
}
