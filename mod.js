// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n="function"==typeof Math.f16round?Math.f16round:null,r=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;var u=.0009765625,a=6103515625e-14;var N=4503599627370496;var e="function"==typeof n?n:function(n){var e,f,o,I;return 0===n||isNaN(n)||!function(n){return n==n&&n>t&&n<r}(n)?n:(I=n<0?-1:1,(f=function(n){return Math.abs(n)}(n))<a?I*(f/a/u+N-N)*a*u:(e=(o=4398046511105*f)-(o-f))>65504||isNaN(e)?I*r:I*e)};export{e as default};
//# sourceMappingURL=mod.js.map
