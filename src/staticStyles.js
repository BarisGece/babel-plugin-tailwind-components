let staticStyles = {
  // accessibility.js - https://tailwindcss.com/docs/screen-readers
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
  'bg-repeat': { backgroundRepeat: 'repeat' },
  'bg-no-repeat': { backgroundRepeat: 'no-repeat' },
  'bg-repeat-x': { backgroundRepeat: 'repeat-x' },
  'bg-repeat-y': { backgroundRepeat: 'repeat-y' },
  'bg-repeat-round': { backgroundRepeat: 'round' },
  'bg-repeat-space': { backgroundRepeat: 'space' },

  // borderCollapse.js - https://tailwindcss.com/docs/border-collapse
  'border-collapse': { borderCollapse: 'collapse' },
  'border-separate': { borderCollapse: 'separate' },

  // borderStyle.js - https://tailwindcss.com/docs/border-style
  'border-solid': { borderStyle: 'solid' },
  'border-dashed': { borderStyle: 'dashed' },
  'border-dotted': { borderStyle: 'dotted' },
  'border-double': { borderStyle: 'double' },
  'border-none': { borderStyle: 'none' },

  // boxSizing.js - https://tailwindcss.com/docs/box-sizing
  'box-border': { boxSizing: 'border-box' },
  'box-content': { boxSizing: 'content-box' },

  // clear.js - http://tailwindcss.com/docs/clear
  'clear-left': { clear: 'left' },
  'clear-right': { clear: 'right' },
  'clear-both': { clear: 'both' },

  // display.js - https://tailwindcss.com/docs/display
  'inline-block': { display: 'inline-block' },
  'inline-flex': { display: 'inline-flex' },
  'table-caption': { display: 'table-caption' },
  'table-cell': { display: 'table-cell' },
  'table-column-group': { display: 'table-column-group' },
  'table-column': { display: 'table-column' },
  'table-footer-group': { display: 'table-footer-group' },
  'table-header-group': { display: 'table-header-group' },
  'table-row-group': { display: 'table-row-group' },
  'table-row': { display: 'table-row' },
  inline: { display: 'inline' },
  block: { display: 'block' },
  flex: { display: 'flex' },
  grid: { display: 'grid' },
  table: { display: 'table' },
  hidden: { display: 'none' },

  // flexDirection.js - https://tailwindcss.com/docs/flexbox-direction
  'flex-row-reverse': { flexDirection: 'row-reverse' },
  'flex-row': { flexDirection: 'row' },
  'flex-col-reverse': { flexDirection: 'column-reverse' },
  'flex-col': { flexDirection: 'column' },

  // flexWrap.js - https://tailwindcss.com/docs/flex-wrap
  'flex-wrap-reverse': { flexWrap: 'wrap-reverse' },
  'flex-wrap': { flexWrap: 'wrap' },
  'flex-no-wrap': { flexWrap: 'nowrap' },

  // float.js - https://tailwindcss.com/docs/float
  'float-right': { float: 'right' },
  'float-left': { float: 'left' },
  'float-none': { float: 'none' },
  clearfix: { '::after': { content: '""', display: 'table', clear: 'both' } },

  // fontSmoothing.js - https://tailwindcss.com/docs/font-smoothing
  'subpixel-antialiased': {
    WebkitFontSmoothing: 'auto',
    MozOsxFontSmoothing: 'auto'
  },
  antialiased: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  },

  // fontStyle.js - https://tailwindcss.com/docs/font-style
  'not-italic': { fontStyle: 'normal' },
  italic: { fontStyle: 'italic' },

  // gridAutoFlow.js - https://tailwindcss.com/docs/grid-auto-flow
  'grid-flow-row-dense': { gridAutoFlow: 'row dense' },
  'grid-flow-row': { gridAutoFlow: 'row' },
  'grid-flow-col-dense': { gridAutoFlow: 'column dense' },
  'grid-flow-col': { gridAutoFlow: 'column' },

  // justifyContent.js - https://tailwindcss.com/docs/justify-content
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
  'resize-y': { resize: 'vertical' },
  'resize-x': { resize: 'horizontal' },
  resize: { resize: 'both' },

  // tableLayout.js - https://tailwindcss.com/docs/table-layout
  'table-auto': { tableLayout: 'auto' },
  'table-fixed': { tableLayout: 'fixed' },

  // textAlign.js - https://tailwindcss.com/docs/text-align
  'text-left': { textAlign: 'left' },
  'text-center': { textAlign: 'center' },
  'text-right': { textAlign: 'right' },
  'text-justify': { textAlign: 'justify' },

  // textDecoration.js - https://tailwindcss.com/docs/text-decoration
  'no-underline': { textDecoration: 'none' },
  'line-through': { textDecoration: 'line-through' },
  underline: { textDecoration: 'underline' },

  // textTransform.js - https://tailwindcss.com/docs/text-transform
  'normal-case': { textTransform: 'none' },
  uppercase: { textTransform: 'uppercase' },
  lowercase: { textTransform: 'lowercase' },
  capitalize: { textTransform: 'capitalize' },

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

  // userSelect.js - https://tailwindcss.com/docs/user-select
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
  'whitespace-pre-wrap': { whiteSpace: 'pre-wrap' },
  'whitespace-pre-line': { whiteSpace: 'pre-line' },
  'whitespace-pre': { whiteSpace: 'pre' },

  // wordBreak.js - https://tailwindcss.com/docs/word-break
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
