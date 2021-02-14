import type { Preflight, CSSRules, Context } from 'twind'

import { apply, directive } from 'twind'

// Based on https://github.com/tigt/mini-svg-data-uri/blob/master/index.js (License MIT)
const specialHexEncode = (match: string): string => {
  switch (
    match // Browsers tolerate these characters, and they're frequent
  ) {
    case '%20':
      return ' '
    case '%3D':
      return '='
    case '%3A':
      return ':'
    case '%2F':
      return '/'
    default:
      return match.toLowerCase() // compresses better
  }
}

const svgToDataUri = (svgString: string): string => {
  return (
    'data:image/svg+xml,' +
    encodeURIComponent(svgString.trim().replace(/\s+/g, ' ').replace(/"/g, "'")).replace(
      /%[\dA-F]{2}/g,
      specialHexEncode,
    )
  )
}

// Same as in preflight
const placeholder = ({ theme }: Context): CSSRules => ({
  '&::placeholder': {
    opacity: '1',
    color: theme('placeholderColor.DEFAULT', theme('colors.gray.400', '#a1a1aa')),
  },
})

const multiple = ({ theme }: Context): CSSRules => ({
  backgroundImage: 'initial',
  backgroundPosition: 'initial',
  backgroundRepeat: 'unset',
  backgroundSize: 'initial',
  paddingRight: theme('spacing.3'),
  colorAdjust: 'unset',
})

const select = ({ theme }: Context): CSSRules => ({
  'background-image': `url("${svgToDataUri(
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${theme(
      'colors.gray.500',
    )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`,
  )}")`,
  backgroundPosition: `right ${theme('spacing.2')} center`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `1.5em 1.5em`,
  paddingRight: theme('spacing.10'),
  colorAdjust: `exact`,
})

export const formField = apply`
  appearance-none bg-white border(& gray-500) rounded-none
  py-2 px-3 text-base
  focus:(outline-none ring(1 blue-600) border-blue-600)
`

const webkitInput = (self: '&' | ''): CSSRules => ({
  [self + '::-webkit-datetime-edit-fields-wrapper']: apply`p-0`,
  [self + '::-webkit-date-and-time-value']: { minHeight: '1.5em' },
})

export const formInput = apply(
  formField,
  placeholder,
  (): CSSRules => ({
    ...webkitInput('&'),
    '&[multiple]': multiple,
  }),
)

export const formTextarea = apply(formField, placeholder)

export const formSelect = apply(
  formField,
  select,
  (): CSSRules => ({
    '&[multiple]': multiple,
  }),
)

const toggle = (): CSSRules => ({
  '&': apply`
    appearance-none p-0 inline-block align-middle select-none
    flex-shrink-0 h-4 w-4 text-blue-600 bg-white border(& gray-500)
    ${() => ({ colorAdjust: 'exact', backgroundOrigin: 'border-box' })}
  `,
  '&:focus': apply`outline-none ring(2 blue-600) border-gray-500`,
  '&:checked': apply`border-transparent bg(current center no-repeat) ${() => ({
    backgroundSize: `100% 100%`,
  })}`,
  '&:checked:hover,&:checked:focus': apply`border-transparent bg-current`,
})

const checkbox = (): CSSRules => ({
  '&': apply`rounded-none`,
  '&:checked': {
    backgroundImage: `url("${svgToDataUri(
      `<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>`,
    )}")`,
  },
  '&:indeterminate': apply`border-transparent bg(current center no-repeat) ${() => ({
    backgroundImage: `url("${svgToDataUri(
      `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>`,
    )}")`,
    backgroundSize: `100% 100%`,
  })}`,
  '&:indeterminate:hover,&:indeterminate:focus': apply`border-transparent bg-current`,
})

const radio = (): CSSRules => ({
  '&': apply`rounded-full`,
  '&:checked': {
    backgroundImage: `url("${svgToDataUri(
      `<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`,
    )}")`,
  },
})

export const formCheckbox = apply(toggle, checkbox)
export const formRadio = apply(toggle, radio)

const file = (): CSSRules => ({
  '&': {
    background: 'unset',
    borderColor: 'inherit',
    borderWidth: '0',
    borderRadius: '0',
    padding: '0',
    fontSize: 'unset',
    lineHeight: 'inherit',
  },

  '&:focus': {
    outline: [`1px solid ButtonText`, `1px auto -webkit-focus-ring-color`],
  },
})

export const formFile = apply(file)

const styles = (selector: string): CSSRules => ({
  [`[type="text"],[type="email"],[type="url"],[type="password"],[type="number"],[type="date"],[type="datetime-local"],[type="month"],[type="search"],[type="tel"],[type="time"],[type="week"],[multiple],${selector}textarea,${selector}select`]: formField,

  // {
  // appearance: 'none',
  // 'background-color': '#fff',
  // 'border-color': theme('colors.gray.500', colors.gray[500]),
  // 'border-width': borderWidth['DEFAULT'],
  // 'border-radius': borderRadius.none,
  // 'padding-top': spacing[2],
  // 'padding-right': spacing[3],
  // 'padding-bottom': spacing[2],
  // 'padding-left': spacing[3],
  // 'font-size': baseFontSize,
  // 'line-height': baseLineHeight,
  // '&:focus': {
  //   outline: outline.none[0],
  //   'outline-offset': outline.none[1],
  //   '--tw-ring-inset': 'var(--tw-empty,/*!*/ /*!*/)',
  //   '--tw-ring-offset-width': '0px',
  //   '--tw-ring-offset-color': '#fff',
  //   '--tw-ring-color': theme('colors.blue.600', colors.blue[600]),
  //   '--tw-ring-offset-shadow': `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
  //   '--tw-ring-shadow': `var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
  //   'box-shadow': `var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)`,
  //   'border-color': theme('colors.blue.600', colors.blue[600]),
  // },
  // },

  [`${selector}input,${selector}textarea`]: placeholder,
  // {
  //   color: theme('colors.gray.500', colors.gray[500]),
  //   opacity: '1',
  // },

  ...webkitInput(''),
  // '::-webkit-datetime-edit-fields-wrapper': apply`p-0`,
  // {
  //   padding: '0',
  // },

  // Unfortunate hack until https://bugs.webkit.org/show_bug.cgi?id=198959 is fixed.
  // This sucks because users can't change line-height with a utility on date inputs now.
  // Reference: https://github.com/twbs/bootstrap/pull/31993
  // '::-webkit-date-and-time-value': {
  //   minHeight: '1.5em',
  // },

  [`${selector}select`]: select,

  '[multiple]': multiple,

  '[type="checkbox"],[type="radio"]': toggle,
  // {
  //   appearance: 'none',
  //   padding: '0',
  //   'color-adjust': 'exact',
  //   display: 'inline-block',
  //   'vertical-align': 'middle',
  //   'background-origin': 'border-box',
  //   'user-select': 'none',
  //   'flex-shrink': '0',
  //   height: theme('spacing.4'),
  //   width: theme('spacing.4'),
  //   color: theme('colors.blue.600'),
  //   'background-color': '#fff',
  //   'border-color': theme('colors.gray.500'),
  //   'border-width': theme('borderWidth.DEFAULT'),
  // },

  '[type="checkbox"]': checkbox,
  // '[type="checkbox"]': apply`rounded-none`,
  // {
  //   'border-radius': borderRadius['none'],
  // },

  '[type="radio"]': radio,
  // {
  //   'border-radius': '100%',
  // },

  // '[type="checkbox"]:focus,[type="radio"]:focus': apply`outline-none ring(2 blue-600) border-gray-500`,
  // {
  //   outline: outline.none[0],
  //   'outline-offset': outline.none[1],
  //   '--tw-ring-inset': 'var(--tw-empty,/*!*/ /*!*/)',
  //   '--tw-ring-offset-width': '2px',
  //   '--tw-ring-offset-color': '#fff',
  //   '--tw-ring-color': theme('colors.blue.600', colors.blue[600]),
  //   '--tw-ring-offset-shadow': `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
  //   '--tw-ring-shadow': `var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
  //   'box-shadow': `var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)`,
  //   'border-color': theme('colors.gray.500', colors.gray[500]),
  // },

  // '[type="checkbox"]:checked,[type="radio"]:checked': apply`border-transparent bg(current center no-repeat) ${() => ({
  //   backgroundSize: `100% 100%`,
  // })}`,
  // {
  //   'border-color': `transparent`,
  //   'background-color': `currentColor`,
  //   'background-size': `100% 100%`,
  //   'background-position': `center`,
  //   'background-repeat': `no-repeat`,
  // },

  // '[type="checkbox"]:checked': {
  //   backgroundImage: `url("${svgToDataUri(
  //     `<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>`,
  //   )}")`,
  // },

  // '[type="radio"]:checked': {
  //   backgroundImage: `url("${svgToDataUri(
  //     `<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`,
  //   )}")`,
  // },

  // '[type="checkbox"]:checked:hover,[type="checkbox"]:checked:focus,[type="radio"]:checked:hover,[type="radio"]:checked:focus': apply`border-transparent bg-current`,
  // {
  //   'border-color': 'transparent',
  //   'background-color': 'currentColor',
  // },

  // '[type="checkbox"]:indeterminate': apply`border-transparent bg(current center no-repeat) ${() => ({
  //   backgroundImage: `url("${svgToDataUri(
  //     `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>`,
  //   )}")`,
  //   backgroundSize: `100% 100%`,
  // })}`,

  // {
  //   'background-image': `url("${svgToDataUri(
  //     `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>`,
  //   )}")`,
  //   'border-color': `transparent`,
  //   'background-color': `currentColor`,
  //   'background-size': `100% 100%`,
  //   'background-position': `center`,
  //   'background-repeat': `no-repeat`,
  // },

  // '[type="checkbox"]:indeterminate:hover,[type="checkbox"]:indeterminate:focus': apply`border-transparent bg-current`,
  // {
  //   'border-color': 'transparent',
  //   'background-color': 'currentColor',
  // },

  '[type="file"]': file,
  // '[type="file"]': {
  //   background: 'unset',
  //   borderColor: 'inherit',
  //   borderWidth: '0',
  //   borderRadius: '0',
  //   padding: '0',
  //   fontSize: 'unset',
  //   lineHeight: 'inherit',
  // },

  // '[type="file"]:focus': {
  //   outline: [`1px solid ButtonText`, `1px auto -webkit-focus-ring-color`],
  // },
})

export const forms = directive((): CSSRules => styles(''), undefined)

export const withForms = (preflight?: CSSRules | Preflight): Preflight => (
  defaultPreflight,
  context,
) => {
  const formsPreflight = {
    ...defaultPreflight,
    // Ensure higher specificity than default preflight
    ...styles('html '),
  }

  return typeof preflight === 'function'
    ? preflight(formsPreflight, context)
    : { ...formsPreflight, ...preflight }
}
