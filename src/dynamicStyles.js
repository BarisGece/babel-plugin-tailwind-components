let dynamicStyles = {
  // CSS Grid utilities added - https://github.com/tailwindcss/tailwindcss/pull/1274
  // columnGap.js
  // gap.js
  // gridColumn.js
  // gridColumnEnd.js
  // gridRow.js
  // gridRowEnd.js
  // gridRowStart.js
  // gridTemplateColumns.js
  // gridTemplateRows.js
  // rowGap.js
  'col-gap': { prop: ['gridColumnGap', 'columnGap'], config: 'columnGap' },
  gap: { prop: ['gridGap', 'gap'], config: 'gap' },
  col: { prop: 'gridColumn', config: 'gridColumn' },
  'col-end': { prop: 'gridColumnEnd', config: 'gridColumnEnd' },
  'col-start': { prop: 'gridColumnStart', config: 'gridColumnStart' },
  row: { prop: 'gridRow', config: 'gridRow' },
  'row-end': { prop: 'gridRowEnd', config: 'gridRowEnd' },
  'row-start': { prop: 'gridRowStart', config: 'gridRowStart' },
  'grid-cols': { prop: 'gridTemplateColumns', config: 'gridTemplateColumns' },
  'grid-rows': { prop: 'gridTemplateRows', config: 'gridTemplateRows' },
  'row-gap': { prop: ['gridRowGap', 'rowGap'], config: 'rowGap' },

  // Composable transform utilities added - https://github.com/tailwindcss/tailwindcss/pull/1272
  // rotate.js
  // scale.js
  // transformOrigin.js
  // translate.js
  rotate: { prop: '--transform-rotate', config: 'rotate' },
  scale: {
    prop: ['--transform-scale-x', '--transform-scale-y'],
    config: 'scale'
  },
  'scale-x': { prop: '--transform-scale-x', config: 'scale' },
  'scale-y': { prop: '--transform-scale-y', config: 'scale' },
  origin: { prop: 'transformOrigin', config: 'transformOrigin' },
  'translate-x': { prop: '--transform-translate-x', config: 'translate' },
  'translate-y': { prop: '--transform-translate-y', config: 'translate' },

  // Skew plugin added - https://github.com/tailwindcss/tailwindcss/pull/1292
  // skew.js
  'skew-x': { prop: '--transform-skew-x', config: 'skew' },
  'skew-y': { prop: '--transform-skew-y', config: 'skew' },

  // Transition utilities added - https://github.com/tailwindcss/tailwindcss/pull/1273
  // transitionDuration.js
  // transitionProperty.js
  // transitionTimingFunction.js
  duration: { prop: 'transitionDuration', config: 'transitionDuration' },
  transition: { prop: 'transitionProperty', config: 'transitionProperty' },
  ease: {
    prop: 'transitionTimingFunction',
    config: 'transitionTimingFunction'
  },

  // backgroundColor.js - https://tailwindcss.com/docs/background-color
  // backgroundPosition.js - https://tailwindcss.com/docs/background-position/
  // backgroundSize.js - https://tailwindcss.com/docs/background-size
  bg: [
    { prop: 'backgroundColor', config: 'backgroundColor' },
    { prop: 'backgroundPosition', config: 'backgroundPosition' },
    { prop: 'backgroundSize', config: 'backgroundSize' }
  ],

  // borderColor.js - https://tailwindcss.com/docs/border-color
  border: [
    { prop: 'borderColor', config: 'borderColor' },
    { prop: 'borderWidth', config: 'borderWidth' }
  ],

  // borderWidth.js - https://tailwindcss.com/docs/border-width
  'border-t': { prop: 'borderTopWidth', config: 'borderWidth' },
  'border-b': { prop: 'borderBottomWidth', config: 'borderWidth' },
  'border-l': { prop: 'borderLeftWidth', config: 'borderWidth' },
  'border-r': { prop: 'borderRightWidth', config: 'borderWidth' },

  // borderRadius.js - https://tailwindcss.com/docs/border-radius
  'rounded-tl': { prop: 'borderTopLeftRadius', config: 'borderRadius' },
  'rounded-tr': { prop: 'borderTopRightRadius', config: 'borderRadius' },
  'rounded-br': { prop: 'borderBottomRightRadius', config: 'borderRadius' },
  'rounded-bl': { prop: 'borderBottomLeftRadius', config: 'borderRadius' },
  'rounded-t': {
    prop: ['borderTopLeftRadius', 'borderTopRightRadius'],
    config: 'borderRadius'
  },
  'rounded-r': {
    prop: ['borderTopRightRadius', 'borderBottomRightRadius'],
    config: 'borderRadius'
  },
  'rounded-b': {
    prop: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    config: 'borderRadius'
  },
  'rounded-l': {
    prop: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    config: 'borderRadius'
  },
  rounded: { prop: 'borderRadius', config: 'borderRadius' },

  // boxShadow.js - https://tailwindcss.com/docs/box-shadow/
  shadow: { prop: 'boxShadow', config: 'boxShadow' },

  // cursor.js https://tailwindcss.com/docs/cursor/
  cursor: { prop: 'cursor', config: 'cursor' },

  // fill.js - https://tailwindcss.com/docs/fill/
  fill: { prop: 'fill', config: 'fill' },

  // flex.js - https://tailwindcss.com/docs/flex/
  flex: { prop: 'flex', config: 'flex' },

  // flexGrow.js - https://tailwindcss.com/docs/flex-grow/
  'flex-grow': { prop: 'flexGrow', config: 'flexGrow' },

  // flexShrink.js - https://tailwindcss.com/docs/flex-shrink/
  'flex-shrink': { prop: 'flexShrink', config: 'flexShrink' },

  // fontFamily.js - https://tailwindcss.com/docs/font-family/
  // fontSize.js - https://tailwindcss.com/docs/font-size/
  // fontWeight.js - https://tailwindcss.com/docs/font-weight/
  // textColor.js - No Documentation Link
  font: [
    { prop: 'fontFamily', config: 'fontFamily' },
    { prop: 'fontWeight', config: 'fontWeight' }
  ],
  text: [
    { prop: 'fontSize', config: 'fontSize' },
    { prop: 'color', config: 'textColor' }
  ],

  // height.js - https://tailwindcss.com/docs/height
  h: { prop: 'height', config: 'height' },

  // inset.js - https://tailwindcss.com/docs/top-right-bottom-left/
  inset: { prop: ['top', 'right', 'bottom', 'left'], config: 'inset' },
  'inset-y': { prop: ['top', 'bottom'], config: 'inset' },
  'inset-x': { prop: ['left', 'right'], config: 'inset' },
  top: { prop: 'top', config: 'inset' },
  right: { prop: 'right', config: 'inset' },
  bottom: { prop: 'bottom', config: 'inset' },
  left: { prop: 'left', config: 'inset' },
  '-inset': { prop: ['top', 'right', 'bottom', 'left'], config: 'inset' },
  '-inset-y': { prop: ['top', 'bottom'], config: 'inset' },
  '-inset-x': { prop: ['left', 'right'], config: 'inset' },
  '-top': { prop: 'top', config: 'inset' },
  '-right': { prop: 'right', config: 'inset' },
  '-bottom': { prop: 'bottom', config: 'inset' },
  '-left': { prop: 'left', config: 'inset' },

  // letterSpacing.js - https://tailwindcss.com/docs/letter-spacing
  tracking: { prop: 'letterSpacing', config: 'letterSpacing' },
  '-tracking': { prop: 'letterSpacing', config: 'letterSpacing' },

  // lineHeight.js - https://tailwindcss.com/docs/line-height
  leading: { prop: 'lineHeight', config: 'lineHeight' },

  // listStyleType.js - https://tailwindcss.com/docs/list-style-type
  list: { prop: 'listStyleType', config: 'listStyleType' },

  // margin.js - https://tailwindcss.com/docs/margin/
  m: { prop: 'margin', config: 'margin' },
  my: { prop: ['marginTop', 'marginBottom'], config: 'margin' },
  mx: { prop: ['marginLeft', 'marginRight'], config: 'margin' },
  mt: { prop: 'marginTop', config: 'margin' },
  mr: { prop: 'marginRight', config: 'margin' },
  mb: { prop: 'marginBottom', config: 'margin' },
  ml: { prop: 'marginLeft', config: 'margin' },
  '-m': { prop: 'margin', config: 'margin' },
  '-my': { prop: ['marginTop', 'marginBottom'], config: 'margin' },
  '-mx': { prop: ['marginLeft', 'marginRight'], config: 'margin' },
  '-mt': { prop: 'marginTop', config: 'margin' },
  '-mr': { prop: 'marginRight', config: 'margin' },
  '-mb': { prop: 'marginBottom', config: 'margin' },
  '-ml': { prop: 'marginLeft', config: 'margin' },

  // maxHeight.js - https://tailwindcss.com/docs/max-height
  'max-h': { prop: 'maxHeight', config: 'maxHeight' },

  // maxWidth.js - https://tailwindcss.com/docs/max-width
  'max-w': { prop: 'maxWidth', config: 'maxWidth' },

  // minHeight.js - https://tailwindcss.com/docs/min-height
  'min-h': { prop: 'minHeight', config: 'minHeight' },

  // minWidth.js - https://tailwindcss.com/docs/min-width
  'min-w': { prop: 'minWidth', config: 'minWidth' },

  // objectPosition.js - https://tailwindcss.com/docs/object-position/
  object: { prop: 'objectPosition', config: 'objectPosition' },

  // opacity.js - https://tailwindcss.com/docs/opacity
  opacity: { prop: 'opacity', config: 'opacity' },

  // order.js - https://tailwindcss.com/docs/order
  order: { prop: 'order', config: 'order' },

  // padding.js https://tailwindcss.com/docs/padding/
  p: { prop: 'padding', config: 'padding' },
  py: { prop: ['paddingTop', 'paddingBottom'], config: 'padding' },
  px: { prop: ['paddingLeft', 'paddingRight'], config: 'padding' },
  pt: { prop: 'paddingTop', config: 'padding' },
  pr: { prop: 'paddingRight', config: 'padding' },
  pb: { prop: 'paddingBottom', config: 'padding' },
  pl: { prop: 'paddingLeft', config: 'padding' },

  // placeholderColor.js - https://tailwindcss.com/docs/placeholder-color/
  // placeholderColor utility added
  placeholder: { prop: 'color', config: 'placeholderColor' },

  // stroke.js - https://tailwindcss.com/docs/stroke
  // strokeWidth utility added
  stroke: [
    { prop: 'stroke', config: 'stroke' },
    { prop: 'strokeWidth', config: 'strokeWidth' }
  ],

  // width.js - https://tailwindcss.com/docs/width
  w: { prop: 'width', config: 'width' },

  // zIndex.js - https://tailwindcss.com/docs/z-index
  z: { prop: 'zIndex', config: 'zIndex' },
  '-z': { prop: 'zIndex', config: 'zIndex' }
}

export default dynamicStyles
