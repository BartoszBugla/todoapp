module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0ZHj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loadUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return logout; });
/* unused harmony export tokenConfig */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("u0k+");
/* harmony import */ var _errorActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("LAVC");


 // Check token & load user

const loadUser = token => dispatch => {
  // User loading
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* USER_LOADING */ "p"]
  });
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/users", {}, tokenConfig(token)).then(res => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__[/* USER_LOADED */ "o"],
      payload: res.data,
      token: token
    });
  }).catch(err => {});
};
const register = items => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }; // Request body
  //always check it out

  const body = JSON.stringify(items);
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/users/register", body, config).then(res => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* REGISTER_SUCCESS */ "j"],
    payload: res.data
  })).catch(err => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__[/* REGISTER_FAIL */ "i"]
    });
    if (err) dispatch(Object(_errorActions__WEBPACK_IMPORTED_MODULE_2__[/* returnErrors */ "b"])(err.response.data));
  });
}; // Login User

const login = payload => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }; // Request body

  const body = JSON.stringify(payload);
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/users/login", body, config).then(res => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__[/* LOGIN_SUCCESS */ "f"],
      payload: res.data
    });
  }).catch(err => {
    console.log(err);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__[/* LOGIN_FAIL */ "e"]
    });
    if (err) dispatch(Object(_errorActions__WEBPACK_IMPORTED_MODULE_2__[/* returnErrors */ "b"])(err.response.data));
  });
}; // Logout User

const logout = type => {
  console.log("action");
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* LOGOUT_SUCCESS */ "g"]
  };
}; // Setup config/headers and token

const tokenConfig = token => {
  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  }; // If token, add to headers

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("u9iw");


/***/ }),

/***/ "98BF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return loadTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return editTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkTodo; });
/* unused harmony export tokenConfig */
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("u0k+");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const loadTodos = (userID, token) => dispatch => {
  // Todos loading
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/todos`, {
    userID
  }, tokenConfig(token)).then(res => {
    dispatch({
      type: _actions_types__WEBPACK_IMPORTED_MODULE_0__[/* TODOS_LOADED */ "k"],
      payload: res.data
    });
  }).catch(err => {
    console.log(err);
  });
};
const addTodo = (body, token) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/todos/add`, body, tokenConfig(token)).then(res => {
    dispatch({
      type: _actions_types__WEBPACK_IMPORTED_MODULE_0__[/* TODO_ADDED */ "l"],
      payload: res.data
    });
  }).catch(err => {
    console.log(err);
  });
};
const deleteTodo = id => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/todos/${id}`).then(res => {
    dispatch({
      type: _actions_types__WEBPACK_IMPORTED_MODULE_0__[/* TODO_DELETED */ "m"],
      payload: id
    });
  }).catch(err => {
    console.log(err);
  });
};
const editTodo = (id, body) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/todos/${id}`, body).then(res => {
    dispatch({
      type: _actions_types__WEBPACK_IMPORTED_MODULE_0__[/* TODO_EDITED */ "n"],
      payload: body,
      id
    });
  }).catch(err => {});
};
const checkTodo = (id, body) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/todos/check/${id}`, body).then(res => {
    dispatch({
      type: _actions_types__WEBPACK_IMPORTED_MODULE_0__[/* TODO_EDITED */ "n"],
      payload: body,
      id
    });
  }).catch(err => {});
}; // Setup config/headers and token

const tokenConfig = token => {
  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  }; // If token, add to headers

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};

/***/ }),

/***/ "CafY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "layout__Container",
  componentId: "f5vjdu-0"
})(["min-height:100%;transition:100ms;"]);

const Layout = ({
  children,
  title
}) => {
  return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, __jsx("title", null, title ? title : ""), "/>"), __jsx(Container, null, children));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "LAVC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return returnErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clearErrors; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("u0k+");
 // RETURN ERRORS

const returnErrors = msg => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* GET_ERRORS */ "d"],
    payload: msg
  };
}; // CLEAR ERRORS

const clearErrors = () => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* CLOSE_ERRORS */ "b"]
  });
};

/***/ }),

/***/ "TBJr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.label.withConfig({
  displayName: "formItem__Container",
  componentId: "sc-1kvqiik-0"
})(["font-size:1.4rem;color:black;display:flex;flex-direction:column;svg{width:40px;height:40px;margin-right:20px;fill:black;}div{display:flex;flex-direction:row;}"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "formItem__Input",
  componentId: "sc-1kvqiik-1"
})(["border-radius:10px;height:35px;width:100%;box-shadow:0px 0px 10px rgba(0,0,0,0.25);background-color:rgba(0,0,0,0.1);border:2px solid #ffffff;font-size:1em;color:#2e2e2e;position:relative;padding:0 20px;transition:all 150ms;&::placeholder{color:#666666;}&:focus{border:2px solid #93acec;}"]); //* custom props "label" another are for input

const FormItem = props => {
  return __jsx(Container, null, __jsx("p", null, props.label), __jsx("div", null, props.svg, " ", __jsx(Input, props)));
};

/* harmony default export */ __webpack_exports__["a"] = (FormItem);

/***/ }),

/***/ "V2VJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "SubmitButton__Button",
  componentId: "rblldo-0"
})(["border:solid 2px #ffffff;color:#bc5a5a;background-color:#ffffff;box-shadow:0px 0px 15px rgba(0,0,0,0.3);padding:10px;font-size:1.6rem;&:focus{border:2px solid #93acec;}&:active{box-shadow:inset 0px 0px 10px rgba(0,0,0,0.25);color:#bc5a5a !important;}&:hover{background-color:#f2f2f2;color:#e59797;box-shadow:inset 2px 2px 4px rgba(0,0,0,0.1),0px 0px 15px rgba(0,0,0,0.3);}"]);
function SubmitButton(_ref) {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(Button, props, children);
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "na1t":
/***/ (function(module, exports) {

// import { useSelector } from "react-redux";
// import React, { useEffect } from "react";
// import Router from "next/router";
// export const Auth = (needAuth) => {
//     const isAuth = useSelector((state) => state.Auth.isAuthenticated);
//     if (needAuth) {
//         useEffect(() => {
//             if (!isAuth) Router.push("/");
//         }, [isAuth]);
//     } else if (!needAuth) {
//         useEffect(() => {
//             if (isAuth) Router.push("/dashboard");
//         }, [isAuth]);
//     } else {
//         return console.log("specify auth function");
//     }
// };

/***/ }),

/***/ "u0k+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return USER_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return USER_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOGOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return REGISTER_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CLOSE_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return OPEN_MODAL; });
/* unused harmony export OPEN_MODAL_EDIT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CLOSE_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return TODOS_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return TODO_ADDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return TODO_DELETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return TODO_EDITED; });
//auth
const USER_LOADING = "USER_LOADING";
const USER_LOADED = "USER_LOADED";
const AUTH_ERROR = "AUTH_ERROR"; //login

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"; //register

const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_FAIL = "REGISTER_FAIL"; //errors

const GET_ERRORS = "GET_ERRORS";
const CLOSE_ERRORS = "CLEAR_ERRORS"; //modal

const OPEN_MODAL = "OPEN_MODAL";
const OPEN_MODAL_EDIT = "OPEN_MODAL_EDIT";
const CLOSE_MODAL = "CLOSE_MODAL"; //todos

const TODOS_LOADED = "TODOS_LOADED";
const TODO_ADDED = "TODO_ADDED";
const TODO_DELETED = "TODO_DELETED";
const TODO_EDITED = "TODO_EDITED";

/***/ }),

/***/ "u9iw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/layout.js
var layout = __webpack_require__("CafY");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./components/dumb/NavItem.js
var __jsx = external_react_default.a.createElement;


const Container = external_styled_components_default.a.li.withConfig({
  displayName: "NavItem__Container",
  componentId: "sc-1sfcdox-0"
})(["width:100%;background:linear-gradient(101.38deg,#b85454 0%,#c55645 100.5%);display:flex;flex-direction:row;align-items:center;color:white;text-align:center;border-top:black solid 2px;*{padding:10px;}svg{width:35px;height:35px;fill:white;margin-right:15px;}&:hover{box-shadow:inset 0px 0px 30px rgba(0,0,0,0.2);}&:active{box-shadow:inset 0px 0px 30px rgba(0,0,0,0.5);}"]);

const NavItem = ({
  children,
  svg
}) => {
  return __jsx(Container, null, svg, __jsx("p", null, children));
};

/* harmony default export */ var dumb_NavItem = (NavItem);
// EXTERNAL MODULE: ./components/dumb/SubmitButton.js
var SubmitButton = __webpack_require__("V2VJ");

// EXTERNAL MODULE: ./redux/actions/authActions.js
var authActions = __webpack_require__("0ZHj");

// CONCATENATED MODULE: ./components/smart/Navbar.js
var Navbar_jsx = external_react_default.a.createElement;






var Calendar = function Calendar(props) {
  return Navbar_jsx("svg", props, Navbar_jsx("path", {
    d: "M30.898 2.734h-1.64V0h-2.735v2.734H8.477V0H5.742v2.734h-1.64A4.106 4.106 0 0 0 0 6.836v24.062A4.106 4.106 0 0 0 4.102 35h26.796A4.106 4.106 0 0 0 35 30.898V6.836a4.106 4.106 0 0 0-4.102-4.102zm1.368 28.164c0 .754-.614 1.368-1.368 1.368H4.102a1.369 1.369 0 0 1-1.368-1.368V12.852h29.532v18.046zm0-20.78H2.734V6.835c0-.754.614-1.367 1.368-1.367h1.64v2.734h2.735V5.47h18.046v2.734h2.735V5.47h1.64c.754 0 1.368.613 1.368 1.367v3.281z",
    fill: "#fff"
  }), Navbar_jsx("path", {
    d: "M7.93 15.723H5.195v2.734H7.93v-2.734zM13.398 15.723h-2.734v2.734h2.734v-2.734zM18.867 15.723h-2.734v2.734h2.734v-2.734zM24.336 15.723h-2.734v2.734h2.734v-2.734zM29.805 15.723H27.07v2.734h2.735v-2.734zM7.93 21.191H5.195v2.735H7.93V21.19zM13.398 21.191h-2.734v2.735h2.734V21.19zM18.867 21.191h-2.734v2.735h2.734V21.19zM24.336 21.191h-2.734v2.735h2.734V21.19zM7.93 26.66H5.195v2.735H7.93V26.66zM13.398 26.66h-2.734v2.735h2.734V26.66zM18.867 26.66h-2.734v2.735h2.734V26.66zM24.336 26.66h-2.734v2.735h2.734V26.66zM29.805 21.191H27.07v2.735h2.735V21.19z",
    fill: "#fff"
  }));
};

Calendar.defaultProps = {
  width: "35",
  height: "35",
  viewBox: "0 0 35 35",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var Social = function Social(props) {
  return Navbar_jsx("svg", props, Navbar_jsx("path", {
    d: "M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51.255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805z"
  }));
};

Social.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
};

var Settings = function Settings(props) {
  return Navbar_jsx("svg", props, Navbar_jsx("path", {
    d: "M272.066 512h-32.133c-25.989 0-47.134-21.144-47.134-47.133v-10.871a206.698 206.698 0 0 1-32.097-13.323l-7.704 7.704c-18.659 18.682-48.548 18.134-66.665-.007l-22.711-22.71c-18.149-18.129-18.671-48.008.006-66.665l7.698-7.698A206.714 206.714 0 0 1 58.003 319.2h-10.87C21.145 319.2 0 298.056 0 272.067v-32.134C0 213.944 21.145 192.8 47.134 192.8h10.87a206.755 206.755 0 0 1 13.323-32.097L63.623 153c-18.666-18.646-18.151-48.528.006-66.665l22.713-22.712c18.159-18.184 48.041-18.638 66.664.006l7.697 7.697A206.893 206.893 0 0 1 192.8 58.003v-10.87C192.8 21.144 213.944 0 239.934 0h32.133C298.056 0 319.2 21.144 319.2 47.133v10.871a206.698 206.698 0 0 1 32.097 13.323l7.704-7.704c18.659-18.682 48.548-18.134 66.665.007l22.711 22.71c18.149 18.129 18.671 48.008-.006 66.665l-7.698 7.698a206.714 206.714 0 0 1 13.323 32.097h10.87c25.989 0 47.134 21.144 47.134 47.133v32.134c0 25.989-21.145 47.133-47.134 47.133h-10.87a206.755 206.755 0 0 1-13.323 32.097l7.704 7.704c18.666 18.646 18.151 48.528-.006 66.665l-22.713 22.712c-18.159 18.184-48.041 18.638-66.664-.006l-7.697-7.697a206.893 206.893 0 0 1-32.097 13.323v10.871c0 25.987-21.144 47.131-47.134 47.131zM165.717 409.17a176.812 176.812 0 0 0 45.831 19.025 14.999 14.999 0 0 1 11.252 14.524v22.148c0 9.447 7.687 17.133 17.134 17.133h32.133c9.447 0 17.134-7.686 17.134-17.133v-22.148a14.999 14.999 0 0 1 11.252-14.524 176.812 176.812 0 0 0 45.831-19.025 15 15 0 0 1 18.243 2.305l15.688 15.689c6.764 6.772 17.626 6.615 24.224.007l22.727-22.726c6.582-6.574 6.802-17.438.006-24.225l-15.695-15.695a15 15 0 0 1-2.305-18.242 176.78 176.78 0 0 0 19.024-45.831 15 15 0 0 1 14.524-11.251h22.147c9.447 0 17.134-7.686 17.134-17.133v-32.134c0-9.447-7.687-17.133-17.134-17.133H442.72a15 15 0 0 1-14.524-11.251 176.815 176.815 0 0 0-19.024-45.831 15 15 0 0 1 2.305-18.242l15.689-15.689c6.782-6.774 6.605-17.634.006-24.225l-22.725-22.725c-6.587-6.596-17.451-6.789-24.225-.006l-15.694 15.695a15 15 0 0 1-18.243 2.305 176.812 176.812 0 0 0-45.831-19.025 14.999 14.999 0 0 1-11.252-14.524v-22.15c0-9.447-7.687-17.133-17.134-17.133h-32.133c-9.447 0-17.134 7.686-17.134 17.133v22.148a14.999 14.999 0 0 1-11.252 14.524 176.812 176.812 0 0 0-45.831 19.025 15.002 15.002 0 0 1-18.243-2.305l-15.688-15.689c-6.764-6.772-17.627-6.615-24.224-.007l-22.727 22.726c-6.582 6.574-6.802 17.437-.006 24.225l15.695 15.695a15 15 0 0 1 2.305 18.242 176.78 176.78 0 0 0-19.024 45.831 15 15 0 0 1-14.524 11.251H47.134C37.687 222.8 30 230.486 30 239.933v32.134c0 9.447 7.687 17.133 17.134 17.133h22.147a15 15 0 0 1 14.524 11.251 176.815 176.815 0 0 0 19.024 45.831 15 15 0 0 1-2.305 18.242l-15.689 15.689c-6.782 6.774-6.605 17.634-.006 24.225l22.725 22.725c6.587 6.596 17.451 6.789 24.225.006l15.694-15.695c3.568-3.567 10.991-6.594 18.244-2.304z"
  }), Navbar_jsx("path", {
    d: "M256 367.4c-61.427 0-111.4-49.974-111.4-111.4S194.573 144.6 256 144.6 367.4 194.574 367.4 256 317.427 367.4 256 367.4zm0-192.8c-44.885 0-81.4 36.516-81.4 81.4s36.516 81.4 81.4 81.4 81.4-36.516 81.4-81.4-36.515-81.4-81.4-81.4z"
  }));
};

Settings.defaultProps = {
  height: "512",
  viewBox: "0 0 512 512",
  width: "512",
  xmlns: "http://www.w3.org/2000/svg"
};

const Navbar_Container = external_styled_components_default.a.nav.withConfig({
  displayName: "Navbar__Container",
  componentId: "egy66p-0"
})(["background-color:white;box-shadow:0px 0px 30px rgba(0,0,0,0.3);display:flex;flex-direction:column;width:250px;height:100vh;"]);
const Circle = external_styled_components_default.a.div.withConfig({
  displayName: "Navbar__Circle",
  componentId: "egy66p-1"
})(["width:50px;height:50px;border-radius:50%;background-color:grey;"]);
const NameItem = external_styled_components_default.a.div.withConfig({
  displayName: "Navbar__NameItem",
  componentId: "egy66p-2"
})(["display:flex;flex-direction:row;align-items:center;margin:20px 0px;*{margin:10px;}"]);

const Navbar = () => {
  const {
    name,
    lastName
  } = Object(external_react_redux_["useSelector"])(state => state.Auth.user);
  const dispatch = Object(external_react_redux_["useDispatch"])();

  const handleLogout = () => {
    console.log("button works");
    dispatch(Object(authActions["c" /* logout */])());
  };

  return Navbar_jsx(Navbar_Container, null, Navbar_jsx("div", null, Navbar_jsx(NameItem, null, Navbar_jsx(Circle, null), Navbar_jsx("p", null, name, " ", lastName))), Navbar_jsx("ul", null, Navbar_jsx(dumb_NavItem, {
    svg: Navbar_jsx(Calendar, null)
  }, " Kalendarz"), Navbar_jsx(dumb_NavItem, {
    svg: Navbar_jsx(Social, null)
  }, " Profil U\u017Cytkownika"), Navbar_jsx(dumb_NavItem, {
    svg: Navbar_jsx(Settings, null)
  }, " Ustawienia")), Navbar_jsx(SubmitButton["a" /* default */], {
    onClick: handleLogout
  }, "Logout"));
};

/* harmony default export */ var smart_Navbar = (Navbar);
// EXTERNAL MODULE: ./customHooks/authMiddleware.js
var authMiddleware = __webpack_require__("na1t");

// CONCATENATED MODULE: ./customHooks/convertDate.js
function convertDate(first, second, breaker) {
  let date = String;
  if (first < 10 && second + 1 < 10) date = `0${first}${breaker}0${second}`;else if (first < 10 && second + 1 >= 10) date = `0${first}${breaker}${second}`;else if (first >= 10 && second + 1 >= 10) date = `${first}${breaker}${second}`;else if (first >= 10 && second + 1 < 10) date = `${first}${breaker}0${second}`;
  return date;
}
// EXTERNAL MODULE: ./redux/actions/todosActions.js
var todosActions = __webpack_require__("98BF");

// CONCATENATED MODULE: ./components/dumb/Select.js
var Select_jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Select_Container = external_styled_components_default.a.label.withConfig({
  displayName: "Select__Container",
  componentId: "sc-85o4oh-0"
})(["width:120px;"]);
const StyledSelect = external_styled_components_default.a.select.withConfig({
  displayName: "Select__StyledSelect",
  componentId: "sc-85o4oh-1"
})(["width:100%;text-align-last:center;height:25px;border-radius:5px;font-size:16px;overflow:scroll;&::-webkit-scrollbar{width:1px;}"]);

const Select = (_ref) => {
  let {
    type,
    title,
    options = [],
    divider = 1,
    startNumber = 0,
    lastNumber = 0
  } = _ref,
      props = _objectWithoutProperties(_ref, ["type", "title", "options", "divider", "startNumber", "lastNumber"]);

  let Items = [];

  switch (type) {
    case "number":
      for (let i = startNumber; i <= lastNumber / divider; i++) {
        Items.push(Select_jsx("option", {
          key: i,
          value: i * divider
        }, i * divider));
      }

      break;

    case "word":
      Items = options.map((item, index) => {
        return Select_jsx("option", {
          key: index,
          value: index
        }, item);
      });
      break;
  }

  return Select_jsx(Select_Container, null, Select_jsx("p", null, title), Select_jsx(StyledSelect, props, Items));
};

/* harmony default export */ var dumb_Select = (Select);
// EXTERNAL MODULE: ./components/dumb/formItem.js
var formItem = __webpack_require__("TBJr");

// EXTERNAL MODULE: ./customHooks/formHook.js
var formHook = __webpack_require__("uN3T");

// CONCATENATED MODULE: ./components/dumb/Todo.js
var Todo_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 //svg

var Delete = function Delete(props) {
  return Todo_jsx("svg", props, Todo_jsx("path", {
    d: "M416.875 114.441L405.57 80.555a31.527 31.527 0 0 0-29.941-21.578h-95.012V28.043C280.617 12.582 268.047 0 252.59 0h-87.008c-15.453 0-28.027 12.582-28.027 28.043v30.934H42.547a31.528 31.528 0 0 0-29.945 21.578L1.297 114.44a25.426 25.426 0 0 0 3.484 22.856 25.427 25.427 0 0 0 20.578 10.539h11.817L63.184 469.44C65.117 493.305 85.367 512 109.293 512h204.863c23.922 0 44.176-18.695 46.106-42.563l26.008-321.601h6.543A25.434 25.434 0 0 0 413.39 137.3a25.434 25.434 0 0 0 3.484-22.86zM167.555 30h83.062v28.977h-83.062zm162.804 437.02c-.68 8.402-7.796 14.98-16.203 14.98H109.293c-8.406 0-15.523-6.578-16.203-14.98L67.273 147.836h288.899zM31.793 117.836l9.27-27.79c.21-.64.808-1.07 1.484-1.07h333.082c.676 0 1.27.43 1.484 1.07l9.27 27.79zm0 0"
  }), Todo_jsx("path", {
    d: "M282.516 465.957c.265.016.527.02.793.02 7.925 0 14.55-6.211 14.964-14.22L312.36 181.36c.43-8.273-5.93-15.332-14.199-15.761-8.293-.442-15.328 5.925-15.762 14.199l-14.082 270.398c-.43 8.274 5.926 15.332 14.2 15.762zm0 0M120.566 451.793c.438 7.996 7.055 14.184 14.965 14.184.274 0 .555-.008.832-.024 8.27-.45 14.61-7.52 14.16-15.793L135.77 179.762c-.45-8.274-7.52-14.614-15.793-14.16-8.27.449-14.61 7.52-14.16 15.793zm0 0M209.254 465.977c8.285 0 15-6.715 15-15V180.578c0-8.285-6.715-15-15-15s-15 6.715-15 15v270.399c0 8.285 6.715 15 15 15zm0 0"
  }));
};

Delete.defaultProps = {
  height: "512pt",
  viewBox: "-47 0 512 512",
  width: "512pt",
  xmlns: "http://www.w3.org/2000/svg"
};

var Edit = function Edit(props) {
  return Todo_jsx("svg", props, Todo_jsx("path", {
    d: "M456.836 76.168l-64-64.054c-16.125-16.139-44.177-16.17-60.365.031L45.763 301.682a10.733 10.733 0 0 0-2.688 4.587L.409 455.73a10.682 10.682 0 0 0 10.261 13.606c.979 0 1.969-.136 2.927-.407l149.333-42.703a10.714 10.714 0 0 0 4.583-2.69l289.323-286.983c8.063-8.069 12.5-18.787 12.5-30.192s-4.437-22.124-12.5-30.193zM285.989 89.737l39.264 39.264-204.996 204.997-14.712-29.434a10.671 10.671 0 0 0-9.542-5.896H78.921L285.989 89.737zm-259.788 353.4L40.095 394.5l34.742 34.742-48.636 13.895zm123.135-35.177l-51.035 14.579-51.503-51.503 14.579-51.035h28.031l18.385 36.771a10.671 10.671 0 0 0 4.771 4.771l36.771 18.385v28.032zm21.334-17.543v-17.082c0-4.042-2.281-7.729-5.896-9.542l-29.434-14.712 204.996-204.996 39.264 39.264-208.93 207.068zM441.784 121.72l-47.033 46.613-93.747-93.747 46.582-47.001c8.063-8.063 22.104-8.063 30.167 0l64 64c4.031 4.031 6.25 9.385 6.25 15.083s-2.219 11.052-6.219 15.052z"
  }));
};

Edit.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 469.336 469.336"
};

var Todo_Circle = function Circle(props) {
  return Todo_jsx("svg", props, Todo_jsx("circle", {
    cx: "12.5",
    cy: "12.5",
    r: "11.25",
    stroke: "#000",
    strokeWidth: "2.5"
  }));
};

Todo_Circle.defaultProps = {
  width: "25",
  height: "25",
  viewBox: "0 0 25 25",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var Close = function Close(props) {
  return Todo_jsx("svg", props, Todo_jsx("path", {
    d: "M243.188 182.86L356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"
  }));
};

Close.defaultProps = {
  height: "487.595",
  viewBox: "0 0 365.696 365.696",
  width: "487.595",
  xmlns: "http://www.w3.org/2000/svg"
};

var Tick = function Tick(props) {
  return Todo_jsx("svg", props, Todo_jsx("path", {
    d: "M0 274.226l176.549 176.886L515.556 112.44l-48.67-47.997-290.337 290L47.996 225.891z"
  }));
};

Tick.defaultProps = {
  height: "512",
  viewBox: "0 0 515.556 515.556",
  width: "512",
  xmlns: "http://www.w3.org/2000/svg"
}; //actions


 //elements




const Todo_Container = external_styled_components_default.a.div.withConfig({
  displayName: "Todo__Container",
  componentId: "sc-3ciroh-0"
})(["display:grid;grid-template-columns:50px 100px auto 75px;justify-items:center;align-items:center;padding:10px;border-top:10px;border-top:2px solid black;width:90%;margin:0 auto;min-height:2.5vh;font-size:1.1rem;font-family:\"Jost\";svg{height:25px;width:25px;margin:0 5px;&:hover{filter:drop-shadow(0px 0px 2px rgba(0,0,0,0.3));transform:scale(1.1);}}.edit:hover{fill:#03c04a;}.delete:hover{fill:#c2261f;}.circle{circle{fill:", ";}}.circle:hover{transform:scale(1);circle{fill:#03c04a;}}"], props => props.done ? "#03c04a" : "none");
const ModalItem = external_styled_components_default()(formItem["a" /* default */]).withConfig({
  displayName: "Todo__ModalItem",
  componentId: "sc-3ciroh-1"
})(["color:black;&::placeholder{color:#888888 !important;}transform:scale(0.8);"]);

const Todo = ({
  todo = {}
}) => {
  const {
    title,
    hour,
    minute,
    _id,
    done
  } = todo;
  const convertedHour = convertDate(hour, minute, ":");
  const {
    setInputs,
    inputs,
    handleInputChange
  } = Object(formHook["a" /* useForms */])();
  const containerRef = Object(external_react_["useRef"])(null);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const editPayload = inputs;
  console.log(done); //switch to edt

  const switchEdit = () => {
    setIsEdit(isEdit => !isEdit);
  }; //delete action


  const deleteThis = e => {
    e.preventDefault();
    dispatch(Object(todosActions["c" /* deleteTodo */])(_id));
  }; //edit action


  const editThis = e => {
    e.preventDefault();
    dispatch(Object(todosActions["d" /* editTodo */])(_id, editPayload));
    switchEdit();
  };

  const checkThis = e => {
    e.preventDefault();
    dispatch(Object(todosActions["b" /* checkTodo */])(_id, {
      done: !done
    }));
  };

  const {
    0: isEdit,
    1: setIsEdit
  } = Object(external_react_["useState"])(false); //initial input values

  Object(external_react_["useEffect"])(() => {
    setInputs(i => _objectSpread({}, i, {
      title,
      hour,
      minute
    }));
  }, [isEdit]);

  const eventHandler = e => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      switchEdit();
    }
  }; //!
  //!Editing
  //!


  if (isEdit) {
    if (isEdit) document.addEventListener("mousedown", eventHandler);
    return Todo_jsx(Todo_Container, {
      ref: containerRef
    }, Todo_jsx("p", null, "Hour:"), Todo_jsx("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        width: "100%"
      }
    }, Todo_jsx(dumb_Select, {
      name: "hour",
      value: inputs.hour,
      onChange: handleInputChange,
      type: "number",
      startNumber: "0",
      lastNumber: "24"
    }), ":", Todo_jsx(dumb_Select, {
      name: "minute",
      value: inputs.minute,
      onChange: handleInputChange,
      type: "number",
      startNumber: "0",
      lastNumber: "59",
      divider: "5"
    })), Todo_jsx(ModalItem, {
      value: inputs.title,
      onChange: handleInputChange,
      name: "title",
      placeholder: "Tytu\u0142"
    }), Todo_jsx("div", null, Todo_jsx(Tick, {
      className: "edit",
      onClick: editThis
    }), Todo_jsx(Close, {
      className: "delete",
      onClick: switchEdit
    })));
  } //!
  //!normal
  //!


  document.removeEventListener("mousedown", eventHandler);
  return Todo_jsx(Todo_Container, {
    done: done
  }, Todo_jsx(Todo_Circle, {
    onClick: checkThis,
    className: "circle"
  }), Todo_jsx("div", null, convertedHour), Todo_jsx("div", null, title), Todo_jsx("div", null, Todo_jsx(Edit, {
    className: "edit",
    onClick: switchEdit
  }), Todo_jsx(Delete, {
    className: "delete",
    onClick: deleteThis
  })));
};

const ClearTodo = ({
  todo = {}
}) => {
  return Todo_jsx(Todo_Container, null, " ", Todo_jsx("div", null, todo.hour), Todo_jsx("div", null, todo.title));
};
/* harmony default export */ var dumb_Todo = (Todo);
// EXTERNAL MODULE: ./redux/actions/types.js
var types = __webpack_require__("u0k+");

// CONCATENATED MODULE: ./components/smart/DayPage.js
var DayPage_jsx = external_react_default.a.createElement;




var Plus = function Plus(props) {
  return DayPage_jsx("svg", props, DayPage_jsx("path", {
    d: "M12.398 8.355h7.422v4.336h-7.422v8.457H7.79v-8.457H.33V8.355h7.46V.445h4.61v7.91z",
    fill: "#000"
  }));
};

Plus.defaultProps = {
  width: "20",
  height: "22",
  viewBox: "0 0 20 22",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var DayPage_Edit = function Edit(props) {
  return DayPage_jsx("svg", props, DayPage_jsx("path", {
    d: "M456.836 76.168l-64-64.054c-16.125-16.139-44.177-16.17-60.365.031L45.763 301.682a10.733 10.733 0 0 0-2.688 4.587L.409 455.73a10.682 10.682 0 0 0 10.261 13.606c.979 0 1.969-.136 2.927-.407l149.333-42.703a10.714 10.714 0 0 0 4.583-2.69l289.323-286.983c8.063-8.069 12.5-18.787 12.5-30.192s-4.437-22.124-12.5-30.193zM285.989 89.737l39.264 39.264-204.996 204.997-14.712-29.434a10.671 10.671 0 0 0-9.542-5.896H78.921L285.989 89.737zm-259.788 353.4L40.095 394.5l34.742 34.742-48.636 13.895zm123.135-35.177l-51.035 14.579-51.503-51.503 14.579-51.035h28.031l18.385 36.771a10.671 10.671 0 0 0 4.771 4.771l36.771 18.385v28.032zm21.334-17.543v-17.082c0-4.042-2.281-7.729-5.896-9.542l-29.434-14.712 204.996-204.996 39.264 39.264-208.93 207.068zM441.784 121.72l-47.033 46.613-93.747-93.747 46.582-47.001c8.063-8.063 22.104-8.063 30.167 0l64 64c4.031 4.031 6.25 9.385 6.25 15.083s-2.219 11.052-6.219 15.052z"
  }));
};

DayPage_Edit.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 469.336 469.336"
};



const DayPage_Container = external_styled_components_default.a.div.withConfig({
  displayName: "DayPage__Container",
  componentId: "sc-1lnswyp-0"
})(["border-radius:20px;box-shadow:0px 0px 20px rgba(0,0,0,0.3);margin:20px 100px;width:40vw;"]);
const Day = external_styled_components_default.a.p.withConfig({
  displayName: "DayPage__Day",
  componentId: "sc-1lnswyp-1"
})(["font-weight:700;"]);
const DayPage_Date = external_styled_components_default.a.p.withConfig({
  displayName: "DayPage__Date",
  componentId: "sc-1lnswyp-2"
})(["position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);"]);
const Header = external_styled_components_default.a.div.withConfig({
  displayName: "DayPage__Header",
  componentId: "sc-1lnswyp-3"
})(["display:grid;grid-template-columns:150px auto 50px;justify-items:center;padding:10px;width:90%;margin:0 auto;position:relative;font-size:20px;svg{width:25px;height:25px;&:hover{filter:drop-shadow(0px 0px 3px rgba(0,0,0,0.5));transform:scale(1.1);}&:active{transform:scale(0.9);}}"]);

const DayPage = ({
  weekDay,
  day,
  month,
  children
}) => {
  const date = convertDate(day, month, ".");
  const dispatch = Object(external_react_redux_["useDispatch"])();
  return DayPage_jsx(DayPage_Container, null, DayPage_jsx(Header, null, DayPage_jsx(Day, null, weekDay), DayPage_jsx(DayPage_Date, null, date), DayPage_jsx("div", null), DayPage_jsx(Plus, {
    onClick: () => dispatch({
      type: types["h" /* OPEN_MODAL */],
      payload: {
        day,
        month
      }
    })
  })), children, DayPage_jsx(ClearTodo, null));
};

/* harmony default export */ var smart_DayPage = (DayPage);
// CONCATENATED MODULE: ./components/smart/TodosList.js
var TodosList_jsx = external_react_default.a.createElement;





const dayOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const WeekDays = ["Poniedziałek", "wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];
const Styles = external_styled_components_default.a.ul.withConfig({
  displayName: "TodosList__Styles",
  componentId: "sc-6u26hq-0"
})(["display:flex;flex-direction:column;justify-items:center;align-items:center;height:100vh;overflow-y:scroll;width:100%;"]);

const TodosList = () => {
  let todos = Object(external_react_redux_["useSelector"])(state => state.todos); //! amount of cards

  let limit = 10;
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();
  const currentYear = today.getFullYear();
  const currentWeekDay = today.getDay();
  const currentDate = `${currentDay}.${currentMonth}.${currentYear}`; //intercalary year / leap year

  if (currentYear % 4 == 0) dayOfMonth[1] = 29; //declraing GLOBAL loop variables

  const Items = [];
  let month = currentMonth + 1; //! it is must have to work loop properly

  let next = 100; //loop

  for (let i = 0; i < limit; i++) {
    //declaring in  LOCAL loop variables
    let day = currentDay + i;
    let monthDays = dayOfMonth[month];
    let weekDay = WeekDays[(currentWeekDay + i - 1) % 7]; //if statements

    if (monthDays < day) {
      next++;
      day = next;
    }

    if (monthDays < next && monthDays < day) {
      month++;
      next = 1;
    }

    const passedTodos = todos ? todos.filter(i => i.day === day && i.month == month) : [];
    Items.push(TodosList_jsx(smart_DayPage, {
      currentDate: {
        currentDay,
        currentMonth,
        currentYear
      },
      key: i,
      weekDay: weekDay,
      day: day,
      month: month
    }, passedTodos.map(i => TodosList_jsx(dumb_Todo, {
      todo: i
    }))));
  }

  return TodosList_jsx(Styles, null, Items);
};

/* harmony default export */ var smart_TodosList = (TodosList);
// CONCATENATED MODULE: ./components/dumb/InstancesWindow.js
var InstancesWindow_jsx = external_react_default.a.createElement;


const InstancesWindow_Container = external_styled_components_default.a.nav.withConfig({
  displayName: "InstancesWindow__Container",
  componentId: "sc-120agf7-0"
})(["background-color:white;box-shadow:0px 0px 30px rgba(0,0,0,0.3);display:flex;flex-direction:column;width:250px;height:100vh;"]);

const InstancesWindow = () => {
  return InstancesWindow_jsx(InstancesWindow_Container, null);
};

/* harmony default export */ var dumb_InstancesWindow = (InstancesWindow);
// CONCATENATED MODULE: ./components/smart/AddTodoModal.js
var AddTodoModal_jsx = external_react_default.a.createElement;

function AddTodoModal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AddTodoModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AddTodoModal_ownKeys(Object(source), true).forEach(function (key) { AddTodoModal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AddTodoModal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AddTodoModal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//dev


 //items




 //actions




const BG = external_styled_components_default.a.div.withConfig({
  displayName: "AddTodoModal__BG",
  componentId: "sc-1wbi0hq-0"
})(["background-color:rgba(0,0,0,0.5);position:absolute;top:0;left:0;width:100vw;height:100vh;"]);
const AddTodoModal_Container = external_styled_components_default.a.div.withConfig({
  displayName: "AddTodoModal__Container",
  componentId: "sc-1wbi0hq-1"
})(["position:absolute;top:0;left:0;width:100vw;height:100vh;"]);
const Form = external_styled_components_default.a.form.withConfig({
  displayName: "AddTodoModal__Form",
  componentId: "sc-1wbi0hq-2"
})(["width:50%;margin:auto;& > *{margin-top:20px;}display:flex;flex-direction:column;align-items:center;"]);
const Box = external_styled_components_default.a.div.withConfig({
  displayName: "AddTodoModal__Box",
  componentId: "sc-1wbi0hq-3"
})(["height:600px;width:50vw;background-color:white;box-shadow:0px 0px 30px rgba(0,0,0,0.3);position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:10;border-radius:10px;"]);
const Title = external_styled_components_default.a.h6.withConfig({
  displayName: "AddTodoModal__Title",
  componentId: "sc-1wbi0hq-4"
})(["font-size:26px;text-align:center;width:100%;font-family:\"Jost\";"]);
const AddTodoModal_ModalItem = external_styled_components_default()(formItem["a" /* default */]).withConfig({
  displayName: "AddTodoModal__ModalItem",
  componentId: "sc-1wbi0hq-5"
})(["color:black;&::placeholder{color:#888888 !important;}"]);
const Horizntally = external_styled_components_default.a.div.withConfig({
  displayName: "AddTodoModal__Horizntally",
  componentId: "sc-1wbi0hq-6"
})(["display:flex;flex-direction:center;& > *{margin:0 5px;}"]);
const months = ["", "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

const AddTodoModal = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const userID = Object(external_react_redux_["useSelector"])(state => state.Auth.user._id);
  const open = Object(external_react_redux_["useSelector"])(state => state.modal.open);

  const hide = () => {
    dispatch({
      type: types["c" /* CLOSE_MODAL */]
    });
  };

  const {
    setInputs,
    inputs,
    handleInputChange
  } = Object(formHook["a" /* useForms */])();
  const init = Object(external_react_redux_["useSelector"])(state => state.modal);
  Object(external_react_["useEffect"])(() => {
    setInputs(inputs => AddTodoModal_objectSpread({}, inputs, {}, init));
  }, [open]);

  const handleSubmit = e => {
    e.preventDefault();

    const body = AddTodoModal_objectSpread({}, inputs, {
      userID
    });

    dispatch(Object(todosActions["a" /* addTodo */])(body));
  };

  if (!open) return null;
  return AddTodoModal_jsx(AddTodoModal_Container, null, AddTodoModal_jsx(BG, {
    onClick: hide
  }), AddTodoModal_jsx(Box, null, AddTodoModal_jsx(Form, {
    onSubmit: handleSubmit
  }, AddTodoModal_jsx(Title, null, "Dodaj Czynno\u015B\u0107"), AddTodoModal_jsx(AddTodoModal_ModalItem, {
    onChange: handleInputChange,
    value: inputs.title,
    name: "title",
    placeholder: "Tytu\u0142"
  }), AddTodoModal_jsx(AddTodoModal_ModalItem, {
    placeholder: "Kr\xF3tki opis"
  }), AddTodoModal_jsx(Horizntally, null, AddTodoModal_jsx(dumb_Select, {
    name: "day",
    value: inputs.day,
    onChange: handleInputChange,
    type: "number",
    title: "Dzie\u0144",
    startNumber: "1",
    lastNumber: "30"
  }), AddTodoModal_jsx(dumb_Select, {
    name: "month",
    value: inputs.month,
    onChange: handleInputChange,
    type: "word",
    title: "Miesi\u0105c",
    options: months
  }), AddTodoModal_jsx(dumb_Select, {
    value: inputs.year,
    onChange: handleInputChange,
    type: "number",
    title: "Rok",
    startNumber: "2020",
    lastNumber: "2023"
  })), AddTodoModal_jsx(Horizntally, null, AddTodoModal_jsx(dumb_Select, {
    name: "hour",
    value: inputs.hour,
    onChange: handleInputChange,
    type: "number",
    title: "Godzina",
    startNumber: "0",
    lastNumber: "24"
  }), AddTodoModal_jsx(dumb_Select, {
    name: "minute",
    value: inputs.minute,
    onChange: handleInputChange,
    type: "number",
    title: "Minuta",
    startNumber: "0",
    lastNumber: "59"
  })), AddTodoModal_jsx("p", null, "Podgl\u0105d"), AddTodoModal_jsx(dumb_Todo, {
    todos: inputs
  }), AddTodoModal_jsx(SubmitButton["a" /* default */], null, " Dodaj"))));
};

/* harmony default export */ var smart_AddTodoModal = (AddTodoModal);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./customHooks/handleRequests.js

const getTodos = (userID, token) => {
  let res;
  external_axios_default.a.get(`http://localhost:5000/todos/${userID}`, {}, tokenConfig(token)).then(r => {
    res = r;
  }).catch(e => {
    res = e;
  });
  return res;
};
const addTodo = (body, token) => {
  let res;
  console.log(body);
  external_axios_default.a.post("http://localhost:5000/todos", body, tokenConfig(token)).then(r => {
    res = r;
  }).catch(e => {
    res = e;
    console.log(e);
  });
  return res;
};
const tokenConfig = token => {
  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  }; // If token, add to headers

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
// CONCATENATED MODULE: ./pages/dashboard.js
var dashboard_jsx = external_react_default.a.createElement;










const dashboard_Container = external_styled_components_default.a.div.withConfig({
  displayName: "dashboard__Container",
  componentId: "sc-1g5xg5j-0"
})(["display:grid;grid-template-columns:250px auto 250px;"]);

const dashboard = () => {
  return dashboard_jsx(layout["a" /* default */], {
    title: "Dashboard"
  }, dashboard_jsx(dashboard_Container, null, dashboard_jsx(smart_Navbar, null), dashboard_jsx(smart_TodosList, null, dashboard_jsx(smart_DayPage, null)), dashboard_jsx(dumb_InstancesWindow, null), dashboard_jsx(smart_AddTodoModal, null)));
};

/* harmony default export */ var pages_dashboard = __webpack_exports__["default"] = (dashboard);

/***/ }),

/***/ "uN3T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useForms; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const useForms = callback => {
  const {
    0: inputs,
    1: setInputs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const handleInputChange = event => {
    event.persist();

    if (event.target.type === "checkbox") {
      setInputs(inputs => _objectSpread({}, inputs, {
        [event.target.name]: event.target.checked
      }));
    } else {
      setInputs(inputs => _objectSpread({}, inputs, {
        [event.target.name]: event.target.value
      }));
    }
  };

  return {
    handleInputChange,
    inputs,
    setInputs
  };
};

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });