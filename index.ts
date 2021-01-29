import type { Preflight, CSSRules } from 'twind'
import svgToDataUri from 'mini-svg-data-uri'

import { apply, directive } from 'twind'

export const forms = directive(
  (data, { theme }): CSSRules => ({
    '[type="text"],[type="email"],[type="url"],[type="password"],[type="number"],[type="date"],[type="datetime-local"],[type="month"],[type="search"],[type="tel"],[type="time"],[type="week"],[multiple],textarea,select': apply`
        appearance-none bg-white border(& gray-500) rounded-none
        py-2 px-3 text-base
        focus:(outline-none ring(1 blue-600) border-blue-600)
      `,

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

    'input::placeholder,textarea::placeholder': apply`text-gray-500 opacity-100`,
    // {
    //   color: theme('colors.gray.500', colors.gray[500]),
    //   opacity: '1',
    // },

    '::-webkit-datetime-edit-fields-wrapper': apply`p-0`,
    // {
    //   padding: '0',
    // },

    // Unfortunate hack until https://bugs.webkit.org/show_bug.cgi?id=198959 is fixed.
    // This sucks because users can't change line-height with a utility on date inputs now.
    // Reference: https://github.com/twbs/bootstrap/pull/31993
    '::-webkit-date-and-time-value': {
      minHeight: '1.5em',
    },

    select: {
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
    },

    '[multiple]': {
      backgroundImage: 'initial',
      backgroundPosition: 'initial',
      backgroundRepeat: 'unset',
      backgroundSize: 'initial',
      paddingRight: theme('spacing.3'),
      colorAdjust: 'unset',
    },

    '[type="checkbox"],[type="radio"]': apply`
      appearance-none p-0 inline-block align-middle select-none
      flex-shrink-0 h-4 w-4 text-blue-600 bg-white border(& gray-500)
      ${() => ({ colorAdjust: 'exact', backgroundOrigin: 'border-box' })}
    `,
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

    '[type="checkbox"]': apply`rounded-none`,
    // {
    //   'border-radius': borderRadius['none'],
    // },

    '[type="radio"]': apply`rounded-full`,
    // {
    //   'border-radius': '100%',
    // },

    '[type="checkbox"]:focus,[type="radio"]:focus': apply`outline-none ring(2 blue-600) border-gray-500`,
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

    '[type="checkbox"]:checked,[type="radio"]:checked': apply`border-transparent bg(current center no-repeat) ${() => ({
      backgroundSize: `100% 100%`,
    })}`,
    // {
    //   'border-color': `transparent`,
    //   'background-color': `currentColor`,
    //   'background-size': `100% 100%`,
    //   'background-position': `center`,
    //   'background-repeat': `no-repeat`,
    // },

    '[type="checkbox"]:checked': {
      backgroundImage: `url("${svgToDataUri(
        `<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>`,
      )}")`,
    },

    '[type="radio"]:checked': {
      backgroundImage: `url("${svgToDataUri(
        `<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`,
      )}")`,
    },

    '[type="checkbox"]:checked:hover,[type="checkbox"]:checked:focus,[type="radio"]:checked:hover,[type="radio"]:checked:focus': apply`border-transparent bg-current`,
    // {
    //   'border-color': 'transparent',
    //   'background-color': 'currentColor',
    // },

    '[type="checkbox"]:indeterminate': apply`border-transparent bg(current center no-repeat) ${() => ({
      backgroundImage: `url("${svgToDataUri(
        `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>`,
      )}")`,
      backgroundSize: `100% 100%`,
    })}`,

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

    '[type="checkbox"]:indeterminate:hover,[type="checkbox"]:indeterminate:focus': apply`border-transparent bg-current`,
    // {
    //   'border-color': 'transparent',
    //   'background-color': 'currentColor',
    // },

    '[type="file"]': {
      background: 'unset',
      borderColor: 'inherit',
      borderWidth: '0',
      borderRadius: '0',
      padding: '0',
      fontSize: 'unset',
      lineHeight: 'inherit',
    },

    '[type="file"]:focus': {
      outline: [`1px solid ButtonText`, `1px auto -webkit-focus-ring-color`],
    },
  }),
  undefined,
)

export const withForms = (preflight?: CSSRules | Preflight): Preflight => (
  defaultPreflight,
  context,
) => {
  const formsPreflight = {
    ...defaultPreflight,
    ...forms(context),
  }

  return typeof preflight === 'function'
    ? preflight(formsPreflight, context)
    : { ...formsPreflight, ...preflight }
}
