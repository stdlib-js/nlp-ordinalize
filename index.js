// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ordinalize=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,v=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,h,"e"),n=s.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),e.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,y,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===l.call(e.specifier)?l.call(n):f.call(n)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var j=String.fromCharCode,E=Array.isArray;function O(e){return e!=e}function _(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,n,o,a,u,f,l,s,p,g,d,y;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",f=1,l=0;l<e.length;l++)if(n=e[l],"string"==typeof n)u+=n;else{if(r=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,O(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+m(y):m(y)+p)),u+=n.arg||"",f+=1}return u}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function T(e){var r,t,n,i;for(t=[],i=0,n=S.exec(e);n;)(r=e.slice(i,S.lastIndex-n[0].length)).length&&t.push(r),t.push(x(n)),i=S.lastIndex,n=S.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function I(e){var r,t;if("string"!=typeof e)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[T(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return k.apply(null,r)}var V,P=Object.prototype,A=P.toString,F=P.__defineGetter__,C=P.__defineSetter__,$=P.__lookupGetter__,N=P.__lookupSetter__;V=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===A.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(e,r)||N.call(e,r)?(n=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(e,r,t.get),a&&C&&C.call(e,r,t.set),e};var R=V;function X(e,r,t){R(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function B(e){return"number"==typeof e}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function L(){return G&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;function U(e,r){return null!=e&&M.call(e,r)}var W="function"==typeof Symbol?Symbol:void 0,z="function"==typeof W?W.toStringTag:"";var Y=L()?function(e){var r,t,n;if(null==e)return Z.call(e);t=e[z],r=U(e,z);try{e[z]=void 0}catch(r){return Z.call(e)}return n=Z.call(e),r?e[z]=t:delete e[z],n}:function(e){return Z.call(e)},q=Number,D=q.prototype.toString;var H=L();function J(e){return"object"==typeof e&&(e instanceof q||(H?function(e){try{return D.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Y(e)))}function K(e){return B(e)||J(e)}X(K,"isPrimitive",B),X(K,"isObject",J);var Q=Number.POSITIVE_INFINITY,ee=q.NEGATIVE_INFINITY,re=Math.floor;function te(e){return re(e)===e}function ne(e){return e<Q&&e>ee&&te(e)}function ie(e){return B(e)&&ne(e)}function oe(e){return J(e)&&ne(e.valueOf())}function ae(e){return ie(e)||oe(e)}function ce(e){return"string"==typeof e}X(ae,"isPrimitive",ie),X(ae,"isObject",oe);var ue=String.prototype.valueOf;var fe=L();function le(e){return"object"==typeof e&&(e instanceof String||(fe?function(e){try{return ue.call(e),!0}catch(e){return!1}}(e):"[object String]"===Y(e)))}function se(e){return ce(e)||le(e)}function pe(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}X(se,"isPrimitive",ce),X(se,"isObject",le);var ge=Array.isArray?Array.isArray:function(e){return"[object Array]"===Y(e)};var de=/./;function ye(e){return"boolean"==typeof e}var be=Boolean,he=Boolean.prototype.toString;var ve=L();function we(e){return"object"==typeof e&&(e instanceof be||(ve?function(e){try{return he.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Y(e)))}function me(e){return ye(e)||we(e)}X(me,"isPrimitive",ye),X(me,"isObject",we);var je="object"==typeof self?self:null,Ee="object"==typeof window?window:null,Oe="object"==typeof global?global:null,_e="object"==typeof globalThis?globalThis:null;var ke=function(e){if(arguments.length){if(!ye(e))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(_e)return _e;if(je)return je;if(Ee)return Ee;if(Oe)return Oe;throw new Error("unexpected error. Unable to resolve global object.")}(),Se=ke.document&&ke.document.childNodes,xe=Int8Array;function Te(){return/^\s*function\s*([^(]*)/i}var Ie=/^\s*function\s*([^(]*)/i;function Ve(e){return null!==e&&"object"==typeof e}function Pe(e){var r,t,n,i;if(("Object"===(t=Y(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Ie.exec(n.toString()))return r[1]}return Ve(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}X(Te,"REGEXP",Ie),X(Ve,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ge(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ve));var Ae="function"==typeof de||"object"==typeof xe||"function"==typeof Se?function(e){return Pe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Pe(e).toLowerCase():r};function Fe(e){return"function"===Ae(e)}var Ce,$e=Object,Ne=Object.getPrototypeOf;Ce=Fe(Object.getPrototypeOf)?Ne:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===Y(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Re=Ce;var Xe=Object.prototype;function Be(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!ge(e)}(e)&&(r=function(e){return null==e?null:(e=$e(e),Re(e))}(e),!r||!U(e,"constructor")&&U(r,"constructor")&&Fe(r.constructor)&&"[object Function]"===Y(r.constructor)&&U(r,"isPrototypeOf")&&Fe(r.isPrototypeOf)&&(r===Xe||function(e){var r;for(r in e)if(!U(e,r))return!1;return!0}(e)))}function Ge(e){return e!=e}function Le(e){return B(e)&&Ge(e)}function Ze(e){return J(e)&&Ge(e.valueOf())}function Me(e){return Le(e)||Ze(e)}X(Me,"isPrimitive",Le),X(Me,"isObject",Ze);var Ue=9007199254740991;function We(e,r,t){var n,i,o;if(!(o=e,"object"==typeof o&&null!==o&&"number"==typeof o.length&&te(o.length)&&o.length>=0&&o.length<=Ue||ce(e)))throw new TypeError(I("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!ie(t))throw new TypeError(I("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Me(r)){for(;i<n;i++)if(Me(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}var ze=["en","es","fin","fr","de","it","pt","swe"],Ye=["masculine","feminine"];return function(e,r){var t,n,i,o,a;if(!ce(e)&&!ie(e))throw new TypeError(pe("0kXE0",e));if(o={},arguments.length>1&&(a=function(e,r){return Be(r)?U(r,"lang")&&(e.lang=r.lang,-1===We(ze,e.lang))?new TypeError(pe("0kXE1","lang",ze.join('", "'),e.lang)):U(r,"suffixOnly")&&(e.suffixOnly=r.suffixOnly,!ye(e.suffixOnly))?new TypeError(pe("0kX2o","suffixOnly",e.suffixOnly)):U(r,"gender")&&(e.gender=r.gender,-1===We(Ye,e.gender))?new TypeError(pe("0kXE1","gender",Ye.join('", "'),e.gender)):null:new TypeError(pe("0kX2V",r))}(o,r)))throw a;switch(i=(e=String(e))[e.length-1],n=e.slice(-2),o.lang){case"fr":t="1"===e?"feminine"===o.gender?"re":"er":"e";break;case"de":case"fin":t=".";break;case"it":case"pt":case"es":t="feminine"===o.gender?"ª":"º";break;case"swe":t="11"!==n&&"1"===i||"12"!==n&&"2"===i?":a":":e";break;default:t="11"!==n&&"1"===i?"st":"12"!==n&&"2"===i?"nd":"13"!==n&&"3"===i?"rd":"th"}return o.suffixOnly?t:e+t}}));
//# sourceMappingURL=index.js.map
