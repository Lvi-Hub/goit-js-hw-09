!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},o.parcelRequired7c6=i);var r=i("6JpON"),u={formEl:document.querySelector(".form"),firstDelay:document.querySelector('input[name="delay"]'),delayStep:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),btnSubmit:document.querySelector('button[type="submit"]')};function l(e,o){var n=Math.random()>.3;return new Promise((function(t,i){setTimeout((function(){n?(t({position:e,delay:o}),console.log({position:e,delay:o})):(i({position:e,delay:o}),console.log({position:e,delay:o}))}),o)}))}u.formEl.addEventListener("submit",(function(o){o.preventDefault();for(var n=Number(u.firstDelay.value),t=Number(u.delayStep.value),i=Number(u.amount.value),a=1;a<=i;a+=1)l(a,n).then((function(o){var n=o.position,t=o.delay;console.log(n,t),e(r).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(o){var n=o.position,t=o.delay;console.log(n,t),e(r).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),n+=t}))}();
//# sourceMappingURL=03-promises.5ebe8865.js.map
