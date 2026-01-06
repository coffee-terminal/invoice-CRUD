/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js"
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
() {

var saskNr = document.querySelector('.SaskaitosNr');
var saskTerm = document.querySelector('.dokTerminas');
var saskData = document.querySelector('.SaskaitosData');
var buyer = document.querySelector('.buyer');
var seller = document.querySelector('.seller');
var itemsList = document.querySelector('.items');
var totalPrice = document.querySelector('.totalPrice');
var shipping = document.querySelector('.shippingPrice');
var itemsSumaPVM = 0;
var itemsSumaBePVM = 0;
var sasktaitosNr = function sasktaitosNr(meta) {
  var li = document.createElement('span');
  var li2 = document.createElement('span');
  var li3 = document.createElement('span');
  var saskaitosNumber = meta.number; // paimu iš struktūros number
  var saskaitosDate = meta.date; // paimu iš struktūros number
  var saskaitosDueDate = meta.due_date; // paimu iš struktūros number
  li.innerText = 'PVM SĄSKAITA FAKTŪRA Nr. ' + saskaitosNumber;
  li2.innerText = saskaitosDate;
  li3.innerText = saskaitosDueDate;
  saskNr.append(li);
  saskData.append(li2);
  saskTerm.append(li3);
};
var pirkejasInfo = function pirkejasInfo(meta) {
  var li = document.createElement('li');
  var buyerName = meta.company.buyer.name;
  var buyerAdress = meta.company.buyer.address;
  var buyerCode = meta.company.buyer.code;
  var buyerVat = meta.company.buyer.vat;
  var buyerPhone = meta.company.buyer.phone;
  var buyerEmail = meta.company.buyer.email;
  li.innerText = 'Vardas: ' + buyerName + '\nAdresas: ' + buyerAdress + '\nĮmonės kodas: ' + buyerCode + '\nMokėtojo kodas: ' + buyerVat + '\nMobilus telefonas: ' + buyerPhone + '\nEl. paštas: ' + buyerEmail;
  buyer.append(li);
};
var pardavejasInfo = function pardavejasInfo(meta) {
  var li = document.createElement('li');
  var sellerName = meta.company.seller.name;
  var sellerAdress = meta.company.seller.address;
  var sellerCode = meta.company.seller.code;
  var sellerVat = meta.company.seller.vat;
  var sellerPhone = meta.company.seller.phone;
  var sellerEmail = meta.company.seller.email;
  li.innerText = 'Vardas: ' + sellerName + '\nAdresas: ' + sellerAdress + '\nĮmonės kodas: ' + sellerCode + '\nMokėtojo kodas: ' + sellerVat + '\nMobilus telefonas: ' + sellerPhone + '\nEl. paštas: ' + sellerEmail;
  seller.append(li);
};
var items = function items(meta) {
  meta.items.forEach(function (data, i) {
    var item = document.createElement('div');
    item.className = 'item';
    itemsList.append(item);
    itemInside = document.querySelector('.item:last-child');
    var divItemNr = document.createElement('div');
    divItemNr.className = 'itemNr';
    divItemNr.innerText = ++i + '.';
    itemInside.append(divItemNr);
    var divDesc = document.createElement('div');
    divDesc.className = 'itemDesc';
    var itemDesc0 = data.description;
    divDesc.innerText = itemDesc0;
    itemInside.append(divDesc);
    var divPrice = document.createElement('div');
    divPrice.className = 'itemPrice';
    var itemPrice = data.price;
    divPrice.innerText = itemPrice;
    itemInside.append(divPrice);
    var divQuantity = document.createElement('div');
    divQuantity.className = 'itemQuantity';
    var itemQuantity = data.quantity;
    divQuantity.innerText = itemQuantity;
    itemInside.append(divQuantity);
    var divDiscountType = document.createElement('div');
    divDiscountType.className = 'itemDiscountType';
    var itemDiscountType = data.discount.type;
    var divDiscountValue = document.createElement('div');
    divDiscountValue.className = 'itemDiscountValue';
    var itemDiscountValue = data.discount.value;
    var itemItemSuma = 0;
    if (itemDiscountType != undefined) {
      if (itemDiscountType == 'fixed') {
        itemItemSuma = itemPrice - itemDiscountValue;
        itemDiscountValue = -itemDiscountValue * itemQuantity;
      } else if (itemDiscountType == 'percentage') {
        itemItemSuma = itemPrice - itemPrice * itemDiscountValue / 100;
        itemDiscountValue = -(itemPrice * itemQuantity * itemDiscountValue / 100).toFixed(2) + '(' + itemDiscountValue + '%)';
      }
    } else {
      itemItemSuma = itemPrice;
      itemDiscountValue = '';
    }
    divDiscountValue.innerText = itemDiscountValue;
    itemInside.append(divDiscountValue);
    var divItemSuma = document.createElement('div');
    divItemSuma.className = 'itemBePVM';
    divItemSuma.innerText = (itemItemSuma * itemQuantity).toFixed(2);
    itemInside.append(divItemSuma);
    var divItemSuPvm = document.createElement('div');
    divItemSuPvm.className = 'itemSuPVM';
    divItemSuPvm.innerText = (itemItemSuma * itemQuantity * 1.21).toFixed(2);
    itemInside.append(divItemSuPvm);

    // itemsSumaPVM = itemsSumaPVM + itemItemSuma * 1.21;
    itemsSumaBePVM = itemsSumaBePVM + itemItemSuma * itemQuantity;

    // console.log(meta.items.length);
    // console.log(i);

    // console.log(itemsSumaPVM);
    // console.log(itemsSumaBePVM);
    if (meta.items.length == i) {
      var shippment = document.createElement('div');
      shippment.className = 'shippmentPrice';
      shippment.innerText = meta.shippingPrice.toFixed(2) + ' Eur';
      totalPrice.append(shippment);
      var itemsSuma = document.createElement('div');
      itemsSuma.className = 'itemSuma';
      itemsSuma.innerText = itemsSumaBePVM.toFixed(2) + ' Eur' + '\n' + (itemsSumaBePVM + meta.shippingPrice).toFixed(2) + ' Eur' + '\n' + ((itemsSumaBePVM + meta.shippingPrice) * 0.21).toFixed(2) + ' Eur';
      totalPrice.append(itemsSuma);
      var itemsSumaSuPVM = document.createElement('div');
      itemsSumaSuPVM.className = 'itemSumaSuPVM';
      itemsSumaSuPVM.innerText = (itemsSumaBePVM * 1.21).toFixed(2) + ' Eur';
      totalPrice.append(itemsSumaSuPVM);
    }
  });
};
var numbersToWords = {
  0: 'nulis',
  1: 'vienas',
  2: 'du',
  3: 'trys',
  4: 'keturi',
  5: 'penki',
  6: 'šeši',
  7: 'septyni',
  8: 'aštuoni',
  9: 'devyni',
  10: 'dešimt',
  11: 'vienuolika',
  12: 'dvylika',
  13: 'trylika',
  14: 'keturiolika',
  15: 'penkiolika',
  16: 'šešiolika',
  17: 'septyniolika',
  18: 'aštuoniolika',
  19: 'devyniolika',
  20: 'dvidešimt',
  30: 'trisdešimt',
  40: 'keturiasdešimt',
  50: 'penkiasdešimt',
  60: 'šešiasdešimt',
  70: 'septyniasdešimt',
  80: 'aštuoniasdešimt',
  90: 'devyniasdešimt'
};
var skaciusZodziu = function skaciusZodziu(number) {
  saskaitosVisaSuma = document.querySelector('.itemSumaSuPVM');
  pastaba2text = document.querySelector('.pastaba2');
  number = parseInt(saskaitosVisaSuma.innerHTML);
  centai = parseFloat(saskaitosVisaSuma.innerHTML).toFixed(2);
  // console.log(centai.slice(-2));
  if (number in numbersToWords) return numbersToWords[number];
  var words = '';
  if (number >= 21000) {
    words += numbersToWords[Math.floor(number / 10000) * 10] + ' ';
    words += numbersToWords[Math.floor(number / 1000 % 10)] + ' tūkst. ';
    number %= 1000;
  } else {
    if (number >= 10000 && number < 21000) {
      words += numbersToWords[Math.floor(number / 1000)] + ' tūkstančių ';
      number %= 1000;
    } else {
      if (number >= 1000 && number < 2000) {
        words += 'tūkstantis ';
        number %= 1000;
      } else if (number > 1000) {
        words += numbersToWords[Math.floor(number / 1000)] + ' tūkstančiai ';
        number %= 1000;
      }
    }
  }
  if (number >= 100 && number < 200) {
    words += 'šimtas';
    number %= 100;
  } else if (number >= 200) {
    words += numbersToWords[Math.floor(number / 100)] + ' šimtai';
    number %= 100;
  }
  if (number > 0) {
    if (words !== '') words += ' ';
    if (number < 20) words += numbersToWords[number] + ' eur. ' + centai.slice(-2) + ' cent.';else {
      words += numbersToWords[Math.floor(number / 10) * 10];
      if (number % 10 > 0) {
        words += ' ' + numbersToWords[number % 10] + ' eur. ' + centai.slice(-2) + ' cent.';
      } else {
        words += ' eur. ' + centai.slice(-2) + ' cent.';
      }
    }
  }
  return pastaba2text.innerHTML = "<b>I\u0161 viso suma su PVM: </b> ".concat(words);
};
fetch('https://in3.dev/inv/').then(function (res) {
  return res.json();
}).then(function (meta) {
  console.log(meta);
  sasktaitosNr(meta);
  pirkejasInfo(meta);
  pardavejasInfo(meta);
  items(meta);
  console.log(skaciusZodziu(200));
});

/***/ },

/***/ "./src/style.scss"
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/app": 0,
/******/ 			"public/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcrud_saskaita"] = self["webpackChunkcrud_saskaita"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/style"], () => (__webpack_require__("./src/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;