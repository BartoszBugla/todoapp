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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/userProvider.js":
/*!************************************!*\
  !*** ./components/userProvider.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/authActions */ "./redux/actions/authActions.js");
/* harmony import */ var _redux_actions_todosActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/todosActions */ "./redux/actions/todosActions.js");
/* harmony import */ var _redux_actions_errorActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/errorActions */ "./redux/actions/errorActions.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function UserProvider({
  token,
  children
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const userID = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.Auth.user._id);
  dispatch(Object(_redux_actions_errorActions__WEBPACK_IMPORTED_MODULE_4__["clearErrors"])());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (userID) dispatch(Object(_redux_actions_todosActions__WEBPACK_IMPORTED_MODULE_3__["loadTodos"])(userID, token));
    if (token) dispatch(Object(_redux_actions_authActions__WEBPACK_IMPORTED_MODULE_2__["loadUser"])(token));
  }, [userID, token]);
  return __jsx("div", null, children);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles.css */ "./styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_userProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/userProvider */ "./components/userProvider.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









const MyApp = ({
  Component,
  pageProps,
  store,
  token
}) => {
  MyApp.getInitialProps = async ({
    Component,
    ctx
  }) => {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    const token = next_cookies__WEBPACK_IMPORTED_MODULE_5___default()(ctx).token || "";
    console.log("anything"); //Anything returned here can be access by the client

    return {
      pageProps,
      token
    };
  };

  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: store
  }, __jsx(_components_userProvider__WEBPACK_IMPORTED_MODULE_7__["default"], {
    token: token
  }, __jsx(Component, pageProps)));
}; //makeStore function that returns a new store for every request


const makeStore = () => _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"]; //withRedux wrapper that passes the store to the App Component


/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default()(makeStore)(MyApp));

/***/ }),

/***/ "./redux/actions/authActions.js":
/*!**************************************!*\
  !*** ./redux/actions/authActions.js ***!
  \**************************************/
/*! exports provided: loadUser, register, login, logout, tokenConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUser", function() { return loadUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenConfig", function() { return tokenConfig; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./redux/actions/types.js");
/* harmony import */ var _errorActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorActions */ "./redux/actions/errorActions.js");


 // Check token & load user

const loadUser = token => dispatch => {
  // User loading
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["USER_LOADING"]
  });
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/users", {}, tokenConfig(token)).then(res => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["USER_LOADED"],
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
    type: _types__WEBPACK_IMPORTED_MODULE_1__["REGISTER_SUCCESS"],
    payload: res.data
  })).catch(err => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["REGISTER_FAIL"]
    });
    if (err) dispatch(Object(_errorActions__WEBPACK_IMPORTED_MODULE_2__["returnErrors"])(err.response.data));
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
      type: _types__WEBPACK_IMPORTED_MODULE_1__["LOGIN_SUCCESS"],
      payload: res.data
    });
  }).catch(err => {
    console.log(err);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["LOGIN_FAIL"]
    });
    if (err) dispatch(Object(_errorActions__WEBPACK_IMPORTED_MODULE_2__["returnErrors"])(err.response.data));
  });
}; // Logout User

const logout = type => {
  console.log("action");
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["LOGOUT_SUCCESS"]
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

/***/ "./redux/actions/errorActions.js":
/*!***************************************!*\
  !*** ./redux/actions/errorActions.js ***!
  \***************************************/
/*! exports provided: returnErrors, clearErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "returnErrors", function() { return returnErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearErrors", function() { return clearErrors; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./redux/actions/types.js");
 // RETURN ERRORS

const returnErrors = msg => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_ERRORS"],
    payload: msg
  };
}; // CLEAR ERRORS

const clearErrors = () => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["CLOSE_ERRORS"]
  });
};

/***/ }),

/***/ "./redux/actions/todosActions.js":
/*!***************************************!*\
  !*** ./redux/actions/todosActions.js ***!
  \***************************************/
/*! exports provided: loadTodos, addTodo, deleteTodo, editTodo, checkTodo, tokenConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTodos", function() { return loadTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTodo", function() { return addTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTodo", function() { return deleteTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editTodo", function() { return editTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkTodo", function() { return checkTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenConfig", function() { return tokenConfig; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./redux/actions/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const loadTodos = (userID, token) => dispatch => {
  // Todos loading
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/todos`, {
    userID
  }, tokenConfig(token)).then(res => {
    dispatch({
      type: _actions_types__WEBPACK_IMPORTED_MODULE_0__["TODOS_LOADED"],
      payload: res.data
    });
  }).catch(err => {
    console.log(err);
  });
};
const addTodo = (body, token) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/todos/add`, body, tokenConfig(token)).then(res => {
    dispatch({
      type: _actions_types__WEBPACK_IMPORTED_MODULE_0__["TODO_ADDED"],
      payload: res.data
    });
  }).catch(err => {
    console.log(err);
  });
};
const deleteTodo = id => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/todos/${id}`).then(res => {
    dispatch({
      type: _actions_types__WEBPACK_IMPORTED_MODULE_0__["TODO_DELETED"],
      payload: id
    });
  }).catch(err => {
    console.log(err);
  });
};
const editTodo = (id, body) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/todos/${id}`, body).then(res => {
    dispatch({
      type: _actions_types__WEBPACK_IMPORTED_MODULE_0__["TODO_EDITED"],
      payload: body,
      id
    });
  }).catch(err => {});
};
const checkTodo = (id, body) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/todos/check/${id}`, body).then(res => {
    dispatch({
      type: _actions_types__WEBPACK_IMPORTED_MODULE_0__["TODO_EDITED"],
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

/***/ "./redux/actions/types.js":
/*!********************************!*\
  !*** ./redux/actions/types.js ***!
  \********************************/
/*! exports provided: USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL, GET_ERRORS, CLOSE_ERRORS, OPEN_MODAL, OPEN_MODAL_EDIT, CLOSE_MODAL, TODOS_LOADED, TODO_ADDED, TODO_DELETED, TODO_EDITED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOADING", function() { return USER_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOADED", function() { return USER_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ERROR", function() { return AUTH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAIL", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_SUCCESS", function() { return LOGOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_SUCCESS", function() { return REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_FAIL", function() { return REGISTER_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ERRORS", function() { return GET_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_ERRORS", function() { return CLOSE_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_MODAL", function() { return OPEN_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_MODAL_EDIT", function() { return OPEN_MODAL_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_MODAL", function() { return CLOSE_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TODOS_LOADED", function() { return TODOS_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TODO_ADDED", function() { return TODO_ADDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TODO_DELETED", function() { return TODO_DELETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TODO_EDITED", function() { return TODO_EDITED; });
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

/***/ "./redux/reducers/authReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/authReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./redux/actions/types.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  token: null,
  user: {},
  isLoading: false,
  isAuthenticated: false
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["USER_LOADING"]:
      return _objectSpread({}, state, {
        isLoading: true
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["USER_LOADED"]:
      return _objectSpread({}, state, {
        token: action.token,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["REGISTER_SUCCESS"]:
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/dashboard");
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("token", action.payload.token);
      return {
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: true,
        isLoading: false
      };

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["AUTH_ERROR"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FAIL"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_SUCCESS"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["REGISTER_FAIL"]:
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("token");
      return _objectSpread({}, state, {
        user: {},
        isAuthenticated: false,
        isLoading: false
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/errorsReducer.js":
/*!*****************************************!*\
  !*** ./redux/reducers/errorsReducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./redux/actions/types.js");

const initialState = {
  msg: "",
  type: "",
  code: 0
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CLOSE_ERRORS"]:
      return {
        msg: "",
        status: null,
        id: 0
      };

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_ERRORS"]:
      return action.payload;

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/modalReducer.js":
/*!****************************************!*\
  !*** ./redux/reducers/modalReducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./redux/actions/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const today = new Date();
const currentMonth = today.getMonth();
const currentDay = today.getDate();
const currentYear = today.getFullYear();
const currentMinute = today.getMinutes();
const currentHour = today.getHours();
const initialState = {
  day: currentDay,
  hour: currentHour,
  month: currentMonth + 1,
  title: "",
  year: currentYear,
  minute: currentMinute,
  open: false
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["OPEN_MODAL"]:
      return _objectSpread({}, state, {
        open: true
      }, action.payload);

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CLOSE_MODAL"]:
      return initialState;

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/rootReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/rootReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authReducer */ "./redux/reducers/authReducer.js");
/* harmony import */ var _errorsReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorsReducer */ "./redux/reducers/errorsReducer.js");
/* harmony import */ var _todosReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todosReducer */ "./redux/reducers/todosReducer.js");
/* harmony import */ var _modalReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modalReducer */ "./redux/reducers/modalReducer.js");





const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  Auth: _authReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  errors: _errorsReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  modal: _modalReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  todos: _todosReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./redux/reducers/todosReducer.js":
/*!****************************************!*\
  !*** ./redux/reducers/todosReducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./redux/actions/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function (state = [], action) {
  switch (action.type) {
    //can come from form or server
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["TODO_ADDED"]:
      return [...state, action.payload];

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["TODOS_LOADED"]:
      return action.payload;

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["TODO_DELETED"]:
      const upDatedDelete = state.filter(todo => {
        return todo._id != action.payload;
      });
      return upDatedDelete;

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["TODO_EDITED"]:
      const upDatedEdit = state.map(todo => {
        if (todo._id === action.id) return todo = _objectSpread({}, todo, {}, action.payload);
        return todo;
      });
      return upDatedEdit;

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/rootReducer */ "./redux/reducers/rootReducer.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);





const bindMiddleware = middleware => {
  if (true) {
    return Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middleware);
};

const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_0__["default"], bindMiddleware([redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a]));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./pages/_app.jsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map