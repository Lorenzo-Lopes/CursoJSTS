/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}
function espera(msg, tempo) {
  return new Promise(function (resolve, reject) {
    if (typeof msg !== 'string') {
      reject(new TypeError('erro'));
      return;
    }
    setTimeout(function () {
      resolve(msg);
    }, tempo);
  });
}
var promises = ['primeiro', espera('promise 1', rand(1, 3)), espera('promise 2', rand(1, 3)), espera('promise 3', rand(1, 3)), espera(10, 1000), 'ultimo'];
Promise.race(promises).then(function (valor) {
  console.log(valor);
})["catch"](function (erro) {
  console.log(erro);
});
function baixarPagina() {
  var emCache = false;
  if (emCache) {
    return Promise.reject /* .resolve*/('Monstra pagina');
  } else {
    return espera('Baixei a pagina', 3000);
  }
}
baixarPagina().then(function (dadosPg) {
  console.log(dadosPg);
})["catch"](function (e) {
  return console.log('ERRO', e);
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map