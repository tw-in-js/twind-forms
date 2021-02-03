import { suite } from 'uvu'
import * as assert from 'uvu/assert'

import type { Instance } from 'twind'
import type { VirtualSheet } from 'twind/sheets'

import { create } from 'twind'
import { virtualSheet } from 'twind/sheets'
import {
  forms,
  withForms,
  formCheckbox,
  formField,
  formFile,
  formInput,
  formRadio,
  formSelect,
  formTextarea,
} from '.'

const test = suite<{
  sheet: VirtualSheet
  tw: Instance['tw']
}>('@twind/forms')

test.before((context) => {
  context.sheet = virtualSheet()
  const { tw } = create({
    sheet: context.sheet,
    mode: 'strict',
    preflight: false,
    prefix: false,
    plugins: {
      forms,
      'form-checkbox': formCheckbox,
      'form-field': formField,
      'form-file': formFile,
      'form-input': formInput,
      'form-radio': formRadio,
      'form-select': formSelect,
      'form-textarea': formTextarea,
    },
  })
  context.tw = tw
})

test.after.each(({ sheet }) => {
  sheet.reset()
})

test('using directive', ({ tw, sheet }) => {
  assert.is(tw(forms), 'tw-lqt6cb')
  assert.equal(sheet.target, [
    '*{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,var(--tw-ring-opacity,0.5));--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent}',
    '.tw-lqt6cb [type="checkbox"],.tw-lqt6cb [type="radio"]{appearance:none;padding:0px;display:inline-block;vertical-align:middle;user-select:none;flex-shrink:0;height:1rem;width:1rem;--tw-text-opacity:1;color:#2563eb;color:rgba(37,99,235,var(--tw-text-opacity));--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-width:1px;--tw-border-opacity:1;border-color:#6b7280;border-color:rgba(107,114,128,var(--tw-border-opacity));color-adjust:exact;background-origin:border-box}',
    '.tw-lqt6cb [type="text"],.tw-lqt6cb [type="email"],.tw-lqt6cb [type="url"],.tw-lqt6cb [type="password"],.tw-lqt6cb [type="number"],.tw-lqt6cb [type="date"],.tw-lqt6cb [type="datetime-local"],.tw-lqt6cb [type="month"],.tw-lqt6cb [type="search"],.tw-lqt6cb [type="tel"],.tw-lqt6cb [type="time"],.tw-lqt6cb [type="week"],.tw-lqt6cb [multiple],.tw-lqt6cb textarea,.tw-lqt6cb select{appearance:none;--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-width:1px;--tw-border-opacity:1;border-color:#6b7280;border-color:rgba(107,114,128,var(--tw-border-opacity));border-radius:0px;padding-bottom:0.5rem;padding-top:0.5rem;padding-left:0.75rem;padding-right:0.75rem;font-size:1rem;line-height:1.5rem}',
    '.tw-lqt6cb [type="text"]:focus,.tw-lqt6cb [type="email"]:focus,.tw-lqt6cb [type="url"]:focus,.tw-lqt6cb [type="password"]:focus,.tw-lqt6cb [type="number"]:focus,.tw-lqt6cb [type="date"]:focus,.tw-lqt6cb [type="datetime-local"]:focus,.tw-lqt6cb [type="month"]:focus,.tw-lqt6cb [type="search"]:focus,.tw-lqt6cb [type="tel"]:focus,.tw-lqt6cb [type="time"]:focus,.tw-lqt6cb [type="week"]:focus,.tw-lqt6cb [multiple]:focus,.tw-lqt6cb textarea:focus,.tw-lqt6cb select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent);--tw-ring-opacity:1;--tw-ring-color:rgba(37,99,235,var(--tw-ring-opacity));--tw-border-opacity:1;border-color:#2563eb;border-color:rgba(37,99,235,var(--tw-border-opacity))}',
    '.tw-lqt6cb [type="checkbox"]:focus,.tw-lqt6cb [type="radio"]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent);--tw-ring-opacity:1;--tw-ring-color:rgba(37,99,235,var(--tw-ring-opacity));--tw-border-opacity:1;border-color:#6b7280;border-color:rgba(107,114,128,var(--tw-border-opacity))}',
    '.tw-lqt6cb [type="file"]{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}',
    ".tw-lqt6cb select{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");background-position:right 0.5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;color-adjust:exact}",
    '.tw-lqt6cb [multiple]{background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;padding-right:0.75rem;color-adjust:unset}',
    ".tw-lqt6cb [type=\"checkbox\"]:indeterminate{border-color:transparent;background-color:currentColor;background-position:center;background-repeat:no-repeat;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\");background-size:100% 100%}",
    '.tw-lqt6cb [type="checkbox"]:checked,.tw-lqt6cb [type="radio"]:checked{border-color:transparent;background-color:currentColor;background-position:center;background-repeat:no-repeat;background-size:100% 100%}',
    '.tw-lqt6cb input::placeholder,.tw-lqt6cb textarea::placeholder{opacity:1;color:#9ca3af}',
    '.tw-lqt6cb [type="checkbox"]:checked:hover,.tw-lqt6cb [type="checkbox"]:checked:focus,.tw-lqt6cb [type="radio"]:checked:hover,.tw-lqt6cb [type="radio"]:checked:focus{border-color:transparent;background-color:currentColor}',
    '.tw-lqt6cb [type="checkbox"]:indeterminate:hover,.tw-lqt6cb [type="checkbox"]:indeterminate:focus{border-color:transparent;background-color:currentColor}',
    '.tw-lqt6cb ::-webkit-datetime-edit-fields-wrapper{padding:0px}',
    '.tw-lqt6cb [type="file"]:focus{outline:1px solid ButtonText;outline:1px auto -webkit-focus-ring-color}',
    '.tw-lqt6cb ::-webkit-date-and-time-value{min-height:1.5em}',
    ".tw-lqt6cb [type=\"checkbox\"]:checked{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")}",
    ".tw-lqt6cb [type=\"radio\"]:checked{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\")}",
    '.tw-lqt6cb [type="checkbox"]{border-radius:0px}',
    '.tw-lqt6cb [type="radio"]{border-radius:9999px}',
  ])
})

test('using preflight', () => {
  const sheet = virtualSheet()

  create({
    sheet,
    mode: 'strict',
    preflight: withForms(),
    prefix: false,
  })

  assert.equal(sheet.target, [
    '[type="checkbox"],[type="radio"]{appearance:none;padding:0px;display:inline-block;vertical-align:middle;user-select:none;flex-shrink:0;height:1rem;width:1rem;--tw-text-opacity:1;color:#2563eb;color:rgba(37,99,235,var(--tw-text-opacity));--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-width:1px;--tw-border-opacity:1;border-color:#6b7280;border-color:rgba(107,114,128,var(--tw-border-opacity));color-adjust:exact;background-origin:border-box}',
    '[type="text"],[type="email"],[type="url"],[type="password"],[type="number"],[type="date"],[type="datetime-local"],[type="month"],[type="search"],[type="tel"],[type="time"],[type="week"],[multiple],html textarea,html select{appearance:none;--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-width:1px;--tw-border-opacity:1;border-color:#6b7280;border-color:rgba(107,114,128,var(--tw-border-opacity));border-radius:0px;padding-bottom:0.5rem;padding-top:0.5rem;padding-left:0.75rem;padding-right:0.75rem;font-size:1rem;line-height:1.5rem}',
    '[type="text"]:focus,[type="email"]:focus,[type="url"]:focus,[type="password"]:focus,[type="number"]:focus,[type="date"]:focus,[type="datetime-local"]:focus,[type="month"]:focus,[type="search"]:focus,[type="tel"]:focus,[type="time"]:focus,[type="week"]:focus,[multiple]:focus,html textarea:focus,html select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent);--tw-ring-opacity:1;--tw-ring-color:rgba(37,99,235,var(--tw-ring-opacity));--tw-border-opacity:1;border-color:#2563eb;border-color:rgba(37,99,235,var(--tw-border-opacity))}',
    '[type="checkbox"]:focus,[type="radio"]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent);--tw-ring-opacity:1;--tw-ring-color:rgba(37,99,235,var(--tw-ring-opacity));--tw-border-opacity:1;border-color:#6b7280;border-color:rgba(107,114,128,var(--tw-border-opacity))}',
    '[type="file"]{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}',
    'button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;margin:0;padding:0;line-height:inherit;color:inherit}',
    "html select{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");background-position:right 0.5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;color-adjust:exact}",
    '[multiple]{background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;padding-right:0.75rem;color-adjust:unset}',
    "[type=\"checkbox\"]:indeterminate{border-color:transparent;background-color:currentColor;background-position:center;background-repeat:no-repeat;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\");background-size:100% 100%}",
    '*{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,var(--tw-ring-opacity,0.5));--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent}',
    '[type="checkbox"]:checked,[type="radio"]:checked{border-color:transparent;background-color:currentColor;background-position:center;background-repeat:no-repeat;background-size:100% 100%}',
    'sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}',
    'html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}',
    'table{text-indent:0;border-color:inherit;border-collapse:collapse}',
    'hr{height:0;color:inherit;border-top-width:1px}',
    'input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}',
    '::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}',
    'html input::placeholder,html textarea::placeholder{opacity:1;color:#9ca3af}',
    'button{background-color:transparent;background-image:none}',
    'body{font-family:inherit;line-height:inherit}',
    '*,::before,::after{box-sizing:border-box;border:0 solid #e5e7eb}',
    'h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}',
    'a{color:inherit;text-decoration:inherit}',
    '::-moz-focus-inner{border-style:none;padding:0}',
    '[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}',
    'pre,code,kbd,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:1em}',
    'img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}',
    'img,video{max-width:100%;height:auto}',
    '[type="checkbox"]:checked:hover,[type="checkbox"]:checked:focus,[type="radio"]:checked:hover,[type="radio"]:checked:focus{border-color:transparent;background-color:currentColor}',
    '[type="checkbox"]:indeterminate:hover,[type="checkbox"]:indeterminate:focus{border-color:transparent;background-color:currentColor}',
    'body,blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre,fieldset,ol,ul{margin:0}',
    'button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}',
    'fieldset,ol,ul,legend{padding:0}',
    'textarea{resize:vertical}',
    'button,[role="button"]{cursor:pointer}',
    ':-moz-focusring{outline:1px dotted ButtonText}',
    '::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}',
    'summary{display:list-item}',
    '::-webkit-datetime-edit-fields-wrapper{padding:0px}',
    '[type="file"]:focus{outline:1px solid ButtonText;outline:1px auto -webkit-focus-ring-color}',
    ':root{tab-size:4}',
    'ol,ul{list-style:none}',
    'img{border-style:solid}',
    'button,select{text-transform:none}',
    ':-moz-ui-invalid{box-shadow:none}',
    'progress{vertical-align:baseline}',
    'abbr[title]{text-decoration:underline dotted}',
    'b,strong{font-weight:bolder}',
    'sub{bottom:-0.25em}',
    'sup{top:-0.5em}',
    '::-webkit-date-and-time-value{min-height:1.5em}',
    "[type=\"checkbox\"]:checked{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")}",
    "[type=\"radio\"]:checked{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\")}",
    '[type="checkbox"]{border-radius:0px}',
    '[type="radio"]{border-radius:9999px}',
    'button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}',
    '::-webkit-search-decoration{-webkit-appearance:none}',
  ])
})

test('using field directives', ({ tw, sheet }) => {
  assert.is(tw(formInput), 'tw-lhhgwn')
  assert.equal(sheet.target, [
    '*{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,var(--tw-ring-opacity,0.5));--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent}',
    '.tw-lhhgwn{appearance:none;--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-width:1px;--tw-border-opacity:1;border-color:#6b7280;border-color:rgba(107,114,128,var(--tw-border-opacity));border-radius:0px;padding-bottom:0.5rem;padding-top:0.5rem;padding-left:0.75rem;padding-right:0.75rem;font-size:1rem;line-height:1.5rem}',
    '.tw-lhhgwn:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent);--tw-ring-opacity:1;--tw-ring-color:rgba(37,99,235,var(--tw-ring-opacity));--tw-border-opacity:1;border-color:#2563eb;border-color:rgba(37,99,235,var(--tw-border-opacity))}',
    '.tw-lhhgwn[multiple]{background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;padding-right:0.75rem;color-adjust:unset}',
    '.tw-lhhgwn::placeholder{opacity:1;color:#9ca3af}',
    '.tw-lhhgwn::-webkit-datetime-edit-fields-wrapper{padding:0px}',
    '.tw-lhhgwn::-webkit-date-and-time-value{min-height:1.5em}',
  ])

  sheet.reset()

  assert.is(tw(formCheckbox), 'tw-5rpl0o')
  assert.equal(sheet.target, [
    '*{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,var(--tw-ring-opacity,0.5));--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent}',
    '.tw-5rpl0o{appearance:none;padding:0px;display:inline-block;vertical-align:middle;user-select:none;flex-shrink:0;height:1rem;width:1rem;--tw-text-opacity:1;color:#2563eb;color:rgba(37,99,235,var(--tw-text-opacity));--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-width:1px;--tw-border-opacity:1;border-color:#6b7280;border-color:rgba(107,114,128,var(--tw-border-opacity));color-adjust:exact;background-origin:border-box;border-radius:0px}',
    '.tw-5rpl0o:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent);--tw-ring-opacity:1;--tw-ring-color:rgba(37,99,235,var(--tw-ring-opacity));--tw-border-opacity:1;border-color:#6b7280;border-color:rgba(107,114,128,var(--tw-border-opacity))}',
    ".tw-5rpl0o:checked{border-color:transparent;background-color:currentColor;background-position:center;background-repeat:no-repeat;background-size:100% 100%;background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")}",
    ".tw-5rpl0o:indeterminate{border-color:transparent;background-color:currentColor;background-position:center;background-repeat:no-repeat;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\");background-size:100% 100%}",
    '.tw-5rpl0o:checked:hover,.tw-5rpl0o:checked:focus{border-color:transparent;background-color:currentColor}',
    '.tw-5rpl0o:indeterminate:hover,.tw-5rpl0o:indeterminate:focus{border-color:transparent;background-color:currentColor}',
  ])
})

test.run()
