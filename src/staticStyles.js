let staticStyles = {
  // Composable transform utilities added - https://github.com/tailwindcss/tailwindcss/pull/1272
  // transform.js
  transform: {
    '--transform-translate-x': '0',
    '--transform-translate-y': '0',
    '--transform-rotate': '0',
    '--transform-skew-x': '0',
    '--transform-skew-y': '0',
    '--transform-scale-x': '1',
    '--transform-scale-y': '1',
    transform: [
      'translateX(var(--transform-translate-x))',
      'translateY(var(--transform-translate-y))',
      'rotate(var(--transform-rotate))',
      'skewX(var(--transform-skew-x))',
      'skewY(var(--transform-skew-y))',
      'scaleX(var(--transform-scale-x))',
      'scaleY(var(--transform-scale-y))'
    ].join(' ')
  },
  'transform-none': { transform: 'none' },

  // accessibility.js - https://tailwindcss.com/docs/screen-readers
  // Screen readers utilities added
  'sr-only': {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: '0'
  },
  'not-sr-only': {
    position: 'static',
    width: 'auto',
    height: 'auto',
    padding: '0',
    margin: '0',
    overflow: 'visible',
    clip: 'auto',
    whiteSpace: 'normal'
  },

  // alignContent.js - https://tailwindcss.com/docs/align-content
  'content-center': { alignContent: 'center' },
  'content-start': { alignContent: 'flex-start' },
  'content-end': { alignContent: 'flex-end' },
  'content-between': { alignContent: 'space-between' },
  'content-around': { alignContent: 'space-around' },

  // alignItems.js - https://tailwindcss.com/docs/align-items
  'items-start': { alignItems: 'flex-start' },
  'items-end': { alignItems: 'flex-end' },
  'items-center': { alignItems: 'center' },
  'items-baseline': { alignItems: 'baseline' },
  'items-stretch': { alignItems: 'stretch' },

  // alignSelf.js - https://tailwindcss.com/docs/align-self
  'self-auto': { alignSelf: 'auto' },
  'self-start': { alignSelf: 'flex-start' },
  'self-end': { alignSelf: 'flex-end' },
  'self-center': { alignSelf: 'center' },
  'self-stretch': { alignSelf: 'stretch' },

  // appearance.js - https://tailwindcss.com/docs/appearance
  'appearance-none': { appearance: 'none' },

  // backgroundAttachment.js - https://tailwindcss.com/docs/background-attachment
  'bg-fixed': { backgroundAttachment: 'fixed' },
  'bg-local': { backgroundAttachment: 'local' },
  'bg-scroll': { backgroundAttachment: 'scroll' },

  // backgroundRepeat.js - https://tailwindcss.com/docs/background-repeat
  // bg-repeat-round and bg-repeat-space utilities added
  'bg-repeat': { backgroundRepeat: 'repeat' },
  'bg-no-repeat': { backgroundRepeat: 'no-repeat' },
  'bg-repeat-x': { backgroundRepeat: 'repeat-x' },
  'bg-repeat-y': { backgroundRepeat: 'repeat-y' },
  'bg-repeat-round': { backgroundRepeat: 'round' },
  'bg-repeat-space': { backgroundRepeat: 'space' },

  // borderCollapse.js - https://tailwindcss.com/docs/border-collapse
  'border-collapse': { borderCollapse: 'collapse' },
  'border-separate': { borderCollapse: 'separate' },

  // https://tailwindcss.com/docs/border-style
  // border-double utility added
  'border-solid': { borderStyle: 'solid' },
  'border-dashed': { borderStyle: 'dashed' },
  'border-dotted': { borderStyle: 'dotted' },
  'border-double': { borderStyle: 'double' },
  'border-none': { borderStyle: 'none' },

  // boxSizing.js - No Documentation Link
  // boxSizing utilities added
  'box-border': { boxSizing: 'border-box' },
  'box-content': { boxSizing: 'content-box' },

  // clear.js - No Documentation Link
  // clear utilities added
  'clear-left': { clear: 'left' },
  'clear-right': { clear: 'right' },
  'clear-both': { clear: 'both' },

  // display.js - https://tailwindcss.com/docs/display
  // New table and grid utilities added
  block: { display: 'block' },
  'inline-block': { display: 'inline-block' },
  inline: { display: 'inline' },
  flex: { display: 'flex' },
  'inline-flex': { display: 'inline-flex' },
  grid: { display: 'grid' },
  table: { display: 'table' },
  'table-caption': { display: 'table-caption' },
  'table-cell': { display: 'table-cell' },
  'table-column': { display: 'table-column' },
  'table-column-group': { display: 'table-column-group' },
  'table-footer-group': { display: 'table-footer-group' },
  'table-header-group': { display: 'table-header-group' },
  'table-row-group': { display: 'table-row-group' },
  'table-row': { display: 'table-row' },
  hidden: { display: 'none' },

  // flexDirection.js - https://tailwindcss.com/docs/flexbox-direction
  'flex-row': { flexDirection: 'row' },
  'flex-row-reverse': { flexDirection: 'row-reverse' },
  'flex-col': { flexDirection: 'column' },
  'flex-col-reverse': { flexDirection: 'column-reverse' },

  // flexWrap.js - https://tailwindcss.com/docs/flex-wrap
  'flex-no-wrap': { flexWrap: 'nowrap' },
  'flex-wrap': { flexWrap: 'wrap' },
  'flex-wrap-reverse': { flexWrap: 'wrap-reverse' },

  // float.js - https://tailwindcss.com/docs/float
  'float-right': { float: 'right' },
  'float-left': { float: 'left' },
  'float-none': { float: 'none' },
  clearfix: { '::after': { content: '""', display: 'table', clear: 'both' } },

  // fontSmoothing.js - https://tailwindcss.com/docs/font-smoothing/
  antialiased: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  },
  'subpixel-antialiased': {
    WebkitFontSmoothing: 'auto',
    MozOsxFontSmoothing: 'auto'
  },

  // fontStyle.js - https://tailwindcss.com/docs/font-style/
  italic: { fontStyle: 'italic' },
  'not-italic': { fontStyle: 'normal' },

  // gridAutoFlow.js - No Documentation Link
  // gridAutoFlow utilities added
  'grid-flow-row': { gridAutoFlow: 'row' },
  'grid-flow-col': { gridAutoFlow: 'column' },
  'grid-flow-row-dense': { gridAutoFlow: 'row dense' },
  'grid-flow-col-dense': { gridAutoFlow: 'column dense' },

  // justifyContent.js - https://tailwindcss.com/docs/justify-content
  // justify-evenly utility added
  'justify-start': { justifyContent: 'flex-start' },
  'justify-end': { justifyContent: 'flex-end' },
  'justify-center': { justifyContent: 'center' },
  'justify-between': { justifyContent: 'space-between' },
  'justify-around': { justifyContent: 'space-around' },
  'justify-evenly': { justifyContent: 'space-evenly' },

  // listStylePosition.js - https://tailwindcss.com/docs/list-style-position
  'list-inside': { listStylePosition: 'inside' },
  'list-outside': { listStylePosition: 'outside' },

  // objectFit.js - https://tailwindcss.com/docs/object-fit
  'object-contain': { objectFit: 'contain' },
  'object-cover': { objectFit: 'cover' },
  'object-fill': { objectFit: 'fill' },
  'object-none': { objectFit: 'none' },
  'object-scale-down': { objectFit: 'scale-down' },

  // outline.js - https://tailwindcss.com/docs/outline
  'outline-none': { outline: 0 },

  // overflow.js - https://tailwindcss.com/docs/overflow
  'overflow-auto': { overflow: 'auto' },
  'overflow-hidden': { overflow: 'hidden' },
  'overflow-visible': { overflow: 'visible' },
  'overflow-scroll': { overflow: 'scroll' },
  'overflow-x-auto': { overflowX: 'auto' },
  'overflow-y-auto': { overflowY: 'auto' },
  'overflow-x-hidden': { overflowX: 'hidden' },
  'overflow-y-hidden': { overflowY: 'hidden' },
  'overflow-x-visible': { overflowX: 'visible' },
  'overflow-y-visible': { overflowY: 'visible' },
  'overflow-x-scroll': { overflowX: 'scroll' },
  'overflow-y-scroll': { overflowY: 'scroll' },
  'scrolling-touch': { WebkitOverflowScrolling: 'touch' },
  'scrolling-auto': { WebkitOverflowScrolling: 'auto' },

  // pointerEvents.js - https://tailwindcss.com/docs/pointer-events
  'pointer-events-none': { pointerEvents: 'none' },
  'pointer-events-auto': { pointerEvents: 'auto' },

  // position.js - https://tailwindcss.com/docs/position
  static: { position: 'static' },
  fixed: { position: 'fixed' },
  absolute: { position: 'absolute' },
  relative: { position: 'relative' },
  sticky: { position: 'sticky' },

  // resize.js - https://tailwindcss.com/docs/resize
  'resize-none': { resize: 'none' },
  resize: { resize: 'both' },
  'resize-y': { resize: 'vertical' },
  'resize-x': { resize: 'horizontal' },

  // tableLayout.js - https://tailwindcss.com/docs/table-layout
  'table-auto': { tableLayout: 'auto' },
  'table-fixed': { tableLayout: 'fixed' },

  // textAlign.js - https://tailwindcss.com/docs/text-align
  'text-left': { textAlign: 'left' },
  'text-center': { textAlign: 'center' },
  'text-right': { textAlign: 'right' },
  'text-justify': { textAlign: 'justify' },

  // textDecoration.js - https://tailwindcss.com/docs/text-decoration/
  underline: { textDecoration: 'underline' },
  'line-through': { textDecoration: 'line-through' },
  'no-underline': { textDecoration: 'none' },

  // textTransform.js - https://tailwindcss.com/docs/text-transform/
  uppercase: { textTransform: 'uppercase' },
  lowercase: { textTransform: 'lowercase' },
  capitalize: { textTransform: 'capitalize' },
  'normal-case': { textTransform: 'none' },

  // userSelect.js - https://tailwindcss.com/docs/user-select
  // select-all and select-auto utilities added
  'select-none': { userSelect: 'none' },
  'select-text': { userSelect: 'text' },
  'select-all': { userSelect: 'all' },
  'select-auto': { userSelect: 'auto' },

  // verticalAlign.js - https://tailwindcss.com/docs/vertical-align
  'align-baseline': { verticalAlign: 'baseline' },
  'align-top': { verticalAlign: 'top' },
  'align-middle': { verticalAlign: 'middle' },
  'align-bottom': { verticalAlign: 'bottom' },
  'align-text-top': { verticalAlign: 'text-top' },
  'align-text-bottom': { verticalAlign: 'text-bottom' },

  // visibility.js - https://tailwindcss.com/docs/visibility
  visible: { visibility: 'visible' },
  invisible: { visibility: 'hidden' },

  // whitespace.js - https://tailwindcss.com/docs/whitespace
  'whitespace-normal': { whiteSpace: 'normal' },
  'whitespace-no-wrap': { whiteSpace: 'nowrap' },
  'whitespace-pre': { whiteSpace: 'pre' },
  'whitespace-pre-line': { whiteSpace: 'pre-line' },
  'whitespace-pre-wrap': { whiteSpace: 'pre-wrap' },

  // https://tailwindcss.com/docs/word-break
  // break-words ???
  'break-normal': { wordBreak: 'normal', overflowWrap: 'normal' },
  'break-words': { overflowWrap: 'break-word' },
  'break-all': { wordBreak: 'break-all' },
  truncate: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
}

export default staticStyles
