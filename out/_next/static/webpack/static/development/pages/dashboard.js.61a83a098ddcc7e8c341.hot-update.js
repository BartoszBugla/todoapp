webpackHotUpdate("static\\development\\pages\\dashboard.js",{

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./redux/actions/types.js");
/* harmony import */ var _errorActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorActions */ "./redux/actions/errorActions.js");


 // Check token & load user

var loadUser = function loadUser(token) {
  return function (dispatch) {
    // User loading
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["USER_LOADING"]
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/users", {}, tokenConfig(token)).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["USER_LOADED"],
        payload: res.data,
        token: token
      });
    })["catch"](function (err) {});
  };
};
var register = function register(items) {
  return function (dispatch) {
    // Headers
    var config = {
      headers: {
        "Content-Type": "application/json"
      }
    }; // Request body
    //always check it out

    var body = JSON.stringify(items);
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/users/register", body, config).then(function (res) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["REGISTER_SUCCESS"],
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["REGISTER_FAIL"]
      });
      if (err) dispatch(Object(_errorActions__WEBPACK_IMPORTED_MODULE_2__["returnErrors"])(err.response.data));
    });
  };
}; // Login User

var login = function login(payload) {
  return function (dispatch) {
    // Headers
    var config = {
      headers: {
        "Content-Type": "application/json"
      }
    }; // Request body

    var body = JSON.stringify(payload);
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/users/login", body, config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["LOGIN_SUCCESS"],
        payload: res.data
      });
    })["catch"](function (err) {
      console.log(err);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["LOGIN_FAIL"]
      });
      if (err) dispatch(Object(_errorActions__WEBPACK_IMPORTED_MODULE_2__["returnErrors"])(err.response.data));
    });
  };
}; // Logout User

var logout = function logout(type) {
  console.log("action");
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["LOGOUT_SUCCESS"]
  };
}; // Setup config/headers and token

var tokenConfig = function tokenConfig(token) {
  // Headers
  var config = {
    headers: {
      "Content-type": "application/json"
    }
  }; // If token, add to headers

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};

/***/ })

})
//# sourceMappingURL=dashboard.js.61a83a098ddcc7e8c341.hot-update.js.map