/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

// editor.js

(function (blocks, editor, components, i18n) {
  const {
    registerBlockType
  } = blocks;
  const {
    TextControl
  } = components;
  const {
    __
  } = i18n;
  registerBlockType('custom/block', {
    title: __('Blockchain Stats', 'blockchain-stats'),
    icon: 'chart-line',
    // Replace with an appropriate icon
    category: 'common',
    attributes: {
      apiUrl: {
        type: 'string',
        default: 'https://api.example.com/blockchain/stats'
      }
    },
    edit: function (props) {
      const {
        attributes,
        setAttributes
      } = props;

      // Update API URL attribute
      const updateApiUrl = newApiUrl => {
        setAttributes({
          apiUrl: newApiUrl
        });
      };
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "blockchain-stats-block-editor"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, __('Blockchain Stats Block Settings', 'blockchain-stats')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
        label: __('API URL', 'blockchain-stats'),
        value: attributes.apiUrl,
        onChange: updateApiUrl
      }));
    },
    save: function () {
      // Rendering in the editor is handled by PHP block-template.php
      return null;
    }
  });
})(window.wp.blocks, window.wp.editor, window.wp.components, window.wp.i18n);

/***/ }),

/***/ "./src/frontend.js":
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
/***/ (() => {

// frontend.js

(function () {
  // Function to fetch blockchain statistics from API
  function fetchBlockchainStats() {
    // API endpoint URL
    const apiUrl = 'https://api.blockchain.info/stats';

    // Fetch data from the API
    fetch(apiUrl).then(response => response.json()).then(data => {
      console.log(data);
      // Update the block content with fetched data
      const blockchainStatsBlock = document.querySelector('.blockchain-stats-block');
      blockchainStatsBlock.innerHTML = `
          <div class="blockchain-stat">
            <h3>Number of Transactions</h3>
            <p>${data.n_tx}</p>
          </div>
          <div class="blockchain-stat">
            <h3>Active Nodes</h3>
            <p>${data.n_nodes}</p>
          </div>
        `;
    }).catch(error => {
      console.error('Error fetching blockchain statistics:', error);
    });
  }

  // Execute when the document is ready
  document.addEventListener('DOMContentLoaded', function () {
    fetchBlockchainStats();
  });
})();

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ })

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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.js */ "./src/editor.js");
/* harmony import */ var _frontend_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frontend.js */ "./src/frontend.js");
/* harmony import */ var _frontend_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_frontend_js__WEBPACK_IMPORTED_MODULE_2__);
// Include your block's frontend JavaScript

// index.js

// Include your CSS file
 // Adjust the path as needed

// Include your JavaScript files
 // Adjust the path as needed
 // Adjust the path as needed
 // Adjust the path as needed
})();

/******/ })()
;
//# sourceMappingURL=index.js.map