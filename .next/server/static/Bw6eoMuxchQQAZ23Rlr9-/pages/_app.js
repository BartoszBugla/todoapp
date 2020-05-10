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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("YNMu");


/***/ }),

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

/***/ "3i/4":
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


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

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

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

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
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
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "L1EO":
/***/ (function(module, exports) {



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

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "YNMu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./redux/actions/types.js
var types = __webpack_require__("u0k+");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./redux/reducers/authReducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  token: null,
  user: {},
  isLoading: false,
  isAuthenticated: false
};
/* harmony default export */ var authReducer = (function (state = initialState, action) {
  switch (action.type) {
    case types["p" /* USER_LOADING */]:
      return _objectSpread({}, state, {
        isLoading: true
      });

    case types["o" /* USER_LOADED */]:
      return _objectSpread({}, state, {
        token: action.token,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      });

    case types["f" /* LOGIN_SUCCESS */]:
    case types["j" /* REGISTER_SUCCESS */]:
      router_default.a.push("/dashboard");
      external_js_cookie_default.a.set("token", action.payload.token);
      return {
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: true,
        isLoading: false
      };

    case types["a" /* AUTH_ERROR */]:
    case types["e" /* LOGIN_FAIL */]:
    case types["g" /* LOGOUT_SUCCESS */]:
    case types["i" /* REGISTER_FAIL */]:
      external_js_cookie_default.a.remove("token");
      return _objectSpread({}, state, {
        user: {},
        isAuthenticated: false,
        isLoading: false
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/errorsReducer.js

const errorsReducer_initialState = {
  msg: "",
  type: "",
  code: 0
};
/* harmony default export */ var errorsReducer = (function (state = errorsReducer_initialState, action) {
  switch (action.type) {
    case types["b" /* CLOSE_ERRORS */]:
      return {
        msg: "",
        status: null,
        id: 0
      };

    case types["d" /* GET_ERRORS */]:
      return action.payload;

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/todosReducer.js
function todosReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function todosReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { todosReducer_ownKeys(Object(source), true).forEach(function (key) { todosReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { todosReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function todosReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var todosReducer = (function (state = [], action) {
  switch (action.type) {
    //can come from form or server
    case types["l" /* TODO_ADDED */]:
      return [...state, action.payload];

    case types["k" /* TODOS_LOADED */]:
      return action.payload;

    case types["m" /* TODO_DELETED */]:
      const upDatedDelete = state.filter(todo => {
        return todo._id != action.payload;
      });
      return upDatedDelete;

    case types["n" /* TODO_EDITED */]:
      const upDatedEdit = state.map(todo => {
        if (todo._id === action.id) return todo = todosReducer_objectSpread({}, todo, {}, action.payload);
        return todo;
      });
      return upDatedEdit;

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/modalReducer.js
function modalReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function modalReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { modalReducer_ownKeys(Object(source), true).forEach(function (key) { modalReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { modalReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function modalReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const today = new Date();
const currentMonth = today.getMonth();
const currentDay = today.getDate();
const currentYear = today.getFullYear();
const currentMinute = today.getMinutes();
const currentHour = today.getHours();
const modalReducer_initialState = {
  day: currentDay,
  hour: currentHour,
  month: currentMonth + 1,
  title: "",
  year: currentYear,
  minute: currentMinute,
  open: false
};
/* harmony default export */ var modalReducer = (function (state = modalReducer_initialState, action) {
  switch (action.type) {
    case types["h" /* OPEN_MODAL */]:
      return modalReducer_objectSpread({}, state, {
        open: true
      }, action.payload);

    case types["c" /* CLOSE_MODAL */]:
      return modalReducer_initialState;

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/rootReducer.js





const rootReducer = Object(external_redux_["combineReducers"])({
  Auth: authReducer,
  errors: errorsReducer,
  modal: modalReducer,
  todos: todosReducer
});
/* harmony default export */ var reducers_rootReducer = (rootReducer);
// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// CONCATENATED MODULE: ./redux/store.js





const bindMiddleware = middleware => {
  if (false) {}

  return Object(external_redux_["applyMiddleware"])(...middleware);
};

const store_store = Object(external_redux_["createStore"])(reducers_rootReducer, bindMiddleware([external_redux_thunk_default.a]));
/* harmony default export */ var redux_store = (store_store);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "next-cookies"
var external_next_cookies_ = __webpack_require__("3i/4");
var external_next_cookies_default = /*#__PURE__*/__webpack_require__.n(external_next_cookies_);

// EXTERNAL MODULE: ./styles.css
var styles = __webpack_require__("L1EO");

// EXTERNAL MODULE: ./redux/actions/authActions.js
var authActions = __webpack_require__("0ZHj");

// EXTERNAL MODULE: ./redux/actions/todosActions.js
var todosActions = __webpack_require__("98BF");

// EXTERNAL MODULE: ./redux/actions/errorActions.js
var errorActions = __webpack_require__("LAVC");

// CONCATENATED MODULE: ./components/userProvider.js
var __jsx = external_react_default.a.createElement;





function UserProvider({
  token,
  children
}) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const userID = Object(external_react_redux_["useSelector"])(state => state.Auth.user._id);
  dispatch(Object(errorActions["a" /* clearErrors */])());
  Object(external_react_["useEffect"])(() => {
    if (userID) dispatch(Object(todosActions["e" /* loadTodos */])(userID, token));
    if (token) dispatch(Object(authActions["a" /* loadUser */])(token));
  }, [userID, token]);
  return __jsx("div", null, children);
}
// CONCATENATED MODULE: ./pages/_app.jsx
var _app_jsx = external_react_default.a.createElement;









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
    const token = external_next_cookies_default()(ctx).token || "";
    console.log("anything"); //Anything returned here can be access by the client

    return {
      pageProps,
      token
    };
  };

  return _app_jsx(external_react_redux_["Provider"], {
    store: store
  }, _app_jsx(UserProvider, {
    token: token
  }, _app_jsx(Component, pageProps)));
}; //makeStore function that returns a new store for every request


const makeStore = () => redux_store; //withRedux wrapper that passes the store to the App Component


/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(makeStore)(MyApp));

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

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

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });