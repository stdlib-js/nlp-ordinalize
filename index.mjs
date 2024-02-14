// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.0-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@v0.1.0-esm/index.mjs";var a=["en","es","fin","fr","de","it","pt","swe"],l=["masculine","feminine"];function d(e,s){return i(s)?t(s,"lang")&&(e.lang=s.lang,-1===o(a,e.lang))?new TypeError(n('invalid option. `%s` option must be one of the following: "%s". Value: `%s`.',"lang",a.join('", "'),e.lang)):t(s,"suffixOnly")&&(e.suffixOnly=s.suffixOnly,!r(e.suffixOnly))?new TypeError(n("invalid option. `%s` option must be a boolean. Option: `%s`.","suffixOnly",e.suffixOnly)):t(s,"gender")&&(e.gender=s.gender,-1===o(l,e.gender))?new TypeError(n('invalid option. `%s` option must be one of the following: "%s". Value: `%s`.',"gender",l.join('", "'),e.gender)):null:new TypeError(n("invalid argument. Options argument must be an object. Value: `%s`.",s))}function m(i,t){var r,o,a,l,m;if(!s(i)&&!e(i))throw new TypeError(n("invalid argument. First argument must be a string or integer. Value: `%s`.",i));if(l={},arguments.length>1&&(m=d(l,t)))throw m;switch(a=(i=String(i))[i.length-1],o=i.slice(-2),l.lang){case"fr":r="1"===i?"feminine"===l.gender?"re":"er":"e";break;case"de":case"fin":r=".";break;case"it":case"pt":case"es":r="feminine"===l.gender?"ª":"º";break;case"swe":r="11"!==o&&"1"===a||"12"!==o&&"2"===a?":a":":e";break;default:r="11"!==o&&"1"===a?"st":"12"!==o&&"2"===a?"nd":"13"!==o&&"3"===a?"rd":"th"}return l.suffixOnly?r:i+r}export{m as default};
//# sourceMappingURL=index.mjs.map
