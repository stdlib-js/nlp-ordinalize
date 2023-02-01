// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).ordinalize=t()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,r=Object.prototype,o=r.toString,i=r.__defineGetter__,u=r.__defineSetter__,f=r.__lookupGetter__,c=r.__lookupSetter__;t=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?n:function(e,t,n){var l,a,s,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((a="value"in n)&&(f.call(e,t)||c.call(e,t)?(l=e.__proto__,e.__proto__=r,delete e[t],e[t]=n.value,e.__proto__=l):e[t]=n.value),s="get"in n,p="set"in n,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(e,t,n.get),p&&u&&u.call(e,t,n.set),e};var l=t;function a(e,t,n){l(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function s(e){return"number"==typeof e}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function d(e,t){return null!=e&&g.call(e,t)}var v="function"==typeof Symbol?Symbol.toStringTag:"";var m=y()?function(e){var t,n,r;if(null==e)return b.call(e);n=e[v],t=d(e,v);try{e[v]=void 0}catch(t){return b.call(e)}return r=b.call(e),t?e[v]=n:delete e[v],r}:function(e){return b.call(e)},j=Number,w=j.prototype.toString;var h=y();function O(e){return"object"==typeof e&&(e instanceof j||(h?function(e){try{return w.call(e),!0}catch(e){return!1}}(e):"[object Number]"===m(e)))}function _(e){return s(e)||O(e)}a(_,"isPrimitive",s),a(_,"isObject",O);var E=Number.POSITIVE_INFINITY,S=j.NEGATIVE_INFINITY,T=Math.floor;function P(e){return T(e)===e}function x(e){return e<E&&e>S&&P(e)}function I(e){return s(e)&&x(e)}function V(e){return O(e)&&x(e.valueOf())}function A(e){return I(e)||V(e)}function N(e){return"string"==typeof e}a(A,"isPrimitive",I),a(A,"isObject",V);var k=String.prototype.valueOf;var F=y();function B(e){return"object"==typeof e&&(e instanceof String||(F?function(e){try{return k.call(e),!0}catch(e){return!1}}(e):"[object String]"===m(e)))}function C(e){return N(e)||B(e)}function G(){var e,t=arguments,n=t[0],r="https://stdlib.io/e/"+n+"?";for(e=1;e<t.length;e++)r+="&arg[]="+encodeURIComponent(t[e]);return r}a(C,"isPrimitive",N),a(C,"isObject",B);var L=Array.isArray?Array.isArray:function(e){return"[object Array]"===m(e)};var M=/./;function R(e){return"boolean"==typeof e}var U=Boolean.prototype.toString;var Y=y();function z(e){return"object"==typeof e&&(e instanceof Boolean||(Y?function(e){try{return U.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===m(e)))}function X(e){return R(e)||z(e)}function q(){return new Function("return this;")()}a(X,"isPrimitive",R),a(X,"isObject",z);var D="object"==typeof self?self:null,H="object"==typeof window?window:null,J="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},K="object"==typeof J?J:null;var Q=function(e){if(arguments.length){if(!R(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return q()}if(D)return D;if(H)return H;if(K)return K;throw new Error("unexpected error. Unable to resolve global object.")}(),W=Q.document&&Q.document.childNodes,Z=Int8Array;function $(){return/^\s*function\s*([^(]*)/i}var ee=/^\s*function\s*([^(]*)/i;function te(e){return null!==e&&"object"==typeof e}function ne(e){var t,n,r,o;if(("Object"===(n=m(e).slice(8,-1))||"Error"===n)&&e.constructor){if("string"==typeof(r=e.constructor).name)return r.name;if(t=ee.exec(r.toString()))return t[1]}return te(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}a($,"REGEXP",ee),a(te,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var n,r;if(!L(t))return!1;if(0===(n=t.length))return!1;for(r=0;r<n;r++)if(!1===e(t[r]))return!1;return!0}}(te));var re="function"==typeof M||"object"==typeof Z||"function"==typeof W?function(e){return ne(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?ne(e).toLowerCase():t};function oe(e){return"function"===re(e)}var ie,ue=Object.getPrototypeOf;ie=oe(Object.getPrototypeOf)?ue:function(e){var t=function(e){return e.__proto__}(e);return t||null===t?t:"[object Function]"===m(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var fe=ie;var ce=Object.prototype;function le(e){var t;return!!function(e){return"object"==typeof e&&null!==e&&!L(e)}(e)&&(t=function(e){return null==e?null:(e=Object(e),fe(e))}(e),!t||!d(e,"constructor")&&d(t,"constructor")&&oe(t.constructor)&&"[object Function]"===m(t.constructor)&&d(t,"isPrototypeOf")&&oe(t.isPrototypeOf)&&(t===ce||function(e){var t;for(t in e)if(!d(e,t))return!1;return!0}(e)))}function ae(e){return e!=e}function se(e){return s(e)&&ae(e)}function pe(e){return O(e)&&ae(e.valueOf())}function ye(e){return se(e)||pe(e)}a(ye,"isPrimitive",se),a(ye,"isObject",pe);function be(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&P(e.length)&&e.length>=0&&e.length<=9007199254740991}function ge(e,t,n){var r,o;if(!be(e)&&!N(e))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+e+"`.");if(0===(r=e.length))return-1;if(3===arguments.length){if(!I(n))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+n+"`.");if(n>=0){if(n>=r)return-1;o=n}else(o=r+n)<0&&(o=0)}else o=0;if(ye(t)){for(;o<r;o++)if(ye(e[o]))return o}else for(;o<r;o++)if(e[o]===t)return o;return-1}var de=["en","es","fin","fr","de","it","pt","swe"],ve=["masculine","feminine"];function me(e,t){return le(t)?d(t,"lang")&&(e.lang=t.lang,-1===ge(de,e.lang))?new TypeError(G('invalid option. `%s` option must be one of the following: "%s". Value: `%s`.',"lang",de.join('", "'),e.lang)):d(t,"suffixOnly")&&(e.suffixOnly=t.suffixOnly,!R(e.suffixOnly))?new TypeError(G("null30","suffixOnly",e.suffixOnly)):d(t,"gender")&&(e.gender=t.gender,-1===ge(ve,e.gender))?new TypeError(G('invalid option. `%s` option must be one of the following: "%s". Value: `%s`.',"gender",ve.join('", "'),e.gender)):null:new TypeError(G("null2h",t))}return function(e,t){var n,r,o,i,u;if(!N(e)&&!I(e))throw new TypeError(G("invalid argument. First argument must be a string or integer. Value: `%s`.",e));if(i={},arguments.length>1&&(u=me(i,t)))throw u;switch(o=(e=String(e))[e.length-1],r=e.slice(-2),i.lang){case"fr":n="1"===e?"feminine"===i.gender?"re":"er":"e";break;case"de":case"fin":n=".";break;case"it":case"pt":case"es":n="feminine"===i.gender?"ª":"º";break;case"swe":n="11"!==r&&"1"===o||"12"!==r&&"2"===o?":a":":e";break;default:n="11"!==r&&"1"===o?"st":"12"!==r&&"2"===o?"nd":"13"!==r&&"3"===o?"rd":"th"}return i.suffixOnly?n:e+n}}));
//# sourceMappingURL=browser.js.map
