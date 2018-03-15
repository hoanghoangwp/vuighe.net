/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function init_clickSeasonsList() {
    $('.season__dropdown').on('click', '.season__dropdown-link', function () {
        $('.episodes__content').scroll();
        $('.episodes__content').animate({
            scrollTop: 0
        }, 500);
        $('.season__dropdown > li').each(function () {
            $(this).removeClass('active');
        });
    });
}

function init_clickSearchBar() {
    $('.search__form').on('submit', function (e) {
        if ($('.search__input').val() === '') {
            e.preventDefault();
            $('.search__input').addClass('search__input--active');
            $('.search__space').addClass('search__space--active');
            $('.search__button').addClass('search__button--border-right');
        }
    });

    $(document).on('click', function (e) {
        const className = e.target.className;
        if (className.indexOf('search__input') < 0 && className.indexOf('search__button') < 0 && className.indexOf('search__form') < 0 && className.indexOf('search__button__icon') < 0) {
            $('.search__input').removeClass('search__input--active');
            $('.search__space').removeClass('search__space--active');
            $('.search__button').removeClass('search__button--border-right');
        }
    });
}

function closeSignUpModal() {
    $('.signin').on('click', function () {
        $('#myModal1').modal('hide');
    });
}

function init_toggleMenu() {
    $('.navbar-toggle').on('click', function () {
        $('.navbar--collapse').slideToggle(200);
        $('.navbar--collapse2').slideUp(200);
    });

    $('.login__icon').on('click', function (e) {
        $('.navbar--collapse2').slideToggle(200);
        if ($(window).width() + 10 < 640)
            $('.navbar--collapse').slideUp(200);
    });
}

$(document).ready(function () {
    init_clickSearchBar();
    init_toggleMenu();
    init_clickSeasonsList();
    closeSignUpModal();
});

/***/ })
/******/ ]);