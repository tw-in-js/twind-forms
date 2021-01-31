# @twind/forms

A [Twind](https://twind.dev) extension that provides a basic reset for form styles that makes form elements easy to override with utilities.

[![MIT License](https://flat.badgen.net/github/license/tw-in-js/twind-forms)](https://github.com/tw-in-js/twind-forms/blob/main/LICENSE)
[![Latest Release](https://flat.badgen.net/npm/v/@twind/forms?icon=npm&label&cache=10800&color=blue)](https://www.npmjs.com/package/@twind/forms)
[![Github](https://flat.badgen.net/badge/icon/tw-in-js%2Ftwind-forms?icon=github&label)](https://github.com/tw-in-js/twind-forms)
[![Module Size](https://flat.badgen.net/badgesize/brotli/https:/unpkg.com/@twind/forms/forms.js?icon=jsdelivr&label&color=blue&cache=10800)](https://unpkg.com/@twind/forms/forms.js 'brotli module size')
[![Typescript](https://flat.badgen.net/badge/icon/included?icon=typescript&label)](https://unpkg.com/browse/@twind/forms/forms.d.ts)

> Based on [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) and [with form classes](https://github.com/tailwindlabs/tailwindcss-forms/pull/39).

## Installation

Install from npm:

```sh
# Using npm
npm install @twind/forms

# Using Yarn
yarn add @twind/forms
```

## Usage as Directive

```js
import { forms } from '@twind/forms'

document.body.innerHTML = `
  <form class="${tw`max-w-xs mx-auto ${forms}`}">
    <!-- ... -->
  </form>
`
```

## Usage as Plugin

```js
import { forms } from '@twind/forms'

setup({
  plugins: {
    forms,
  },
})
```

```html
<form class="max-w-xs mx-auto forms">
  <!-- ... -->
</form>
```

## Usage as Preflight

Add to the `preflight` of your setup call:

```js
import { withForms } from '@twind/forms'

setup({
  preflight: withForms(),
})

setup({
  preflight: withForms({
    /* custom preflight */
  }),
})

setup({
  preflight: withForms((preflight, context) => {
    /* custom preflight */
  }),
})
```

## Usage as form field Directive


```js
import { formCheckbox, formField, formFile, formInput, formRadio, formSelect, formTextarea } from '@twind/forms'

document.body.innerHTML = `
  <input class="${tw`${formInput}`}">
`
```

## Usage as form field Plugins

```js
import { forms } from '@twind/forms'

setup({
  plugins: {
    'form-checkbox': formCheckbox,
    'form-field': formField,
    'form-file': formFile,
    'form-input': formInput,
    'form-radio': formRadio,
    'form-select': formSelect,
    'form-textarea': formTextarea,
  },
})
```

```html
<input class="${tw`form-input`}">
```
