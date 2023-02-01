// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,f=n.__lookupGetter__,c=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var l,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(t,e)||c.call(t,e)?(l=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=l):t[e]=r.value),s="get"in r,p="set"in r,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,e,r.get),p&&u&&u.call(t,e,r.set),t};var l=e;function a(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function s(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function v(t,e){return null!=t&&g.call(t,e)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var m=y()?function(t){var e,r,n;if(null==t)return b.call(t);r=t[d],e=v(t,d);try{t[d]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[d]=r:delete t[d],n}:function(t){return b.call(t)},j=Number,w=j.prototype.toString;var h=y();function O(t){return"object"==typeof t&&(t instanceof j||(h?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function _(t){return s(t)||O(t)}a(_,"isPrimitive",s),a(_,"isObject",O);var E=Number.POSITIVE_INFINITY,S=j.NEGATIVE_INFINITY,T=Math.floor;function P(t){return T(t)===t}function x(t){return t<E&&t>S&&P(t)}function I(t){return s(t)&&x(t)}function V(t){return O(t)&&x(t.valueOf())}function A(t){return I(t)||V(t)}function N(t){return"string"==typeof t}a(A,"isPrimitive",I),a(A,"isObject",V);var k=String.prototype.valueOf;var F=y();function B(t){return"object"==typeof t&&(t instanceof String||(F?function(t){try{return k.call(t),!0}catch(t){return!1}}(t):"[object String]"===m(t)))}function C(t){return N(t)||B(t)}function G(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}a(C,"isPrimitive",N),a(C,"isObject",B);var L=Array.isArray?Array.isArray:function(t){return"[object Array]"===m(t)};var M=/./;function R(t){return"boolean"==typeof t}var U=Boolean.prototype.toString;var Y=y();function X(t){return"object"==typeof t&&(t instanceof Boolean||(Y?function(t){try{return U.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===m(t)))}function q(t){return R(t)||X(t)}function z(){return new Function("return this;")()}a(q,"isPrimitive",R),a(q,"isObject",X);var D="object"==typeof self?self:null,H="object"==typeof window?window:null,J="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},K="object"==typeof J?J:null;var Q=function(t){if(arguments.length){if(!R(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return z()}if(D)return D;if(H)return H;if(K)return K;throw new Error("unexpected error. Unable to resolve global object.")}(),W=Q.document&&Q.document.childNodes,Z=Int8Array;function $(){return/^\s*function\s*([^(]*)/i}var tt=/^\s*function\s*([^(]*)/i;function et(t){return null!==t&&"object"==typeof t}function rt(t){var e,r,n,o;if(("Object"===(r=m(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=tt.exec(n.toString()))return e[1]}return et(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a($,"REGEXP",tt),a(et,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!L(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(et));var nt="function"==typeof M||"object"==typeof Z||"function"==typeof W?function(t){return rt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?rt(t).toLowerCase():e};function ot(t){return"function"===nt(t)}var it,ut=Object.getPrototypeOf;it=ot(Object.getPrototypeOf)?ut:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===m(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var ft=it;var ct=Object.prototype;function lt(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!L(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),ft(t))}(t),!e||!v(t,"constructor")&&v(e,"constructor")&&ot(e.constructor)&&"[object Function]"===m(e.constructor)&&v(e,"isPrototypeOf")&&ot(e.isPrototypeOf)&&(e===ct||function(t){var e;for(e in t)if(!v(t,e))return!1;return!0}(t)))}function at(t){return t!=t}function st(t){return s(t)&&at(t)}function pt(t){return O(t)&&at(t.valueOf())}function yt(t){return st(t)||pt(t)}a(yt,"isPrimitive",st),a(yt,"isObject",pt);function bt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&P(t.length)&&t.length>=0&&t.length<=9007199254740991}function gt(t,e,r){var n,o;if(!bt(t)&&!N(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!I(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(yt(e)){for(;o<n;o++)if(yt(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var vt=["en","es","fin","fr","de","it","pt","swe"],dt=["masculine","feminine"];function mt(t,e){return lt(e)?v(e,"lang")&&(t.lang=e.lang,-1===gt(vt,t.lang))?new TypeError(G('invalid option. `%s` option must be one of the following: "%s". Value: `%s`.',"lang",vt.join('", "'),t.lang)):v(e,"suffixOnly")&&(t.suffixOnly=e.suffixOnly,!R(t.suffixOnly))?new TypeError(G("null30","suffixOnly",t.suffixOnly)):v(e,"gender")&&(t.gender=e.gender,-1===gt(dt,t.gender))?new TypeError(G('invalid option. `%s` option must be one of the following: "%s". Value: `%s`.',"gender",dt.join('", "'),t.gender)):null:new TypeError(G("null2h",e))}function jt(t,e){var r,n,o,i,u;if(!N(t)&&!I(t))throw new TypeError(G("invalid argument. First argument must be a string or integer. Value: `%s`.",t));if(i={},arguments.length>1&&(u=mt(i,e)))throw u;switch(o=(t=String(t))[t.length-1],n=t.slice(-2),i.lang){case"fr":r="1"===t?"feminine"===i.gender?"re":"er":"e";break;case"de":case"fin":r=".";break;case"it":case"pt":case"es":r="feminine"===i.gender?"ª":"º";break;case"swe":r="11"!==n&&"1"===o||"12"!==n&&"2"===o?":a":":e";break;default:r="11"!==n&&"1"===o?"st":"12"!==n&&"2"===o?"nd":"13"!==n&&"3"===o?"rd":"th"}return i.suffixOnly?r:t+r}export{jt as default};
//# sourceMappingURL=mod.js.map
