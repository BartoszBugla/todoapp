webpackHotUpdate("static\\development\\pages\\_app.js",{

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var loadTodos = function loadTodos(userID, token) {
  return function (dispatch) {
    // Todos loading
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/todos", {
      userID: userID
    }, tokenConfig(token)).then(function (res) {
      dispatch({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_0__["TODOS_LOADED"],
        payload: res.data
      });
    })["catch"](function (err) {
      console.log(err);
    });
  };
};
var addTodo = function addTodo(body, token) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/todos/add", body, tokenConfig(token)).then(function (res) {
      dispatch({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_0__["TODO_ADDED"],
        payload: res.data
      });
    })["catch"](function (err) {
      console.log(err);
    });
  };
};
var deleteTodo = function deleteTodo(id) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("/todos/".concat(id)).then(function (res) {
      dispatch({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_0__["TODO_DELETED"],
        payload: id
      });
    })["catch"](function (err) {
      console.log(err);
    });
  };
};
var editTodo = function editTodo(id, body) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("/todos/".concat(id), body).then(function (res) {
      dispatch({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_0__["TODO_EDITED"],
        payload: body,
        id: id
      });
    })["catch"](function (err) {});
  };
};
var checkTodo = function checkTodo(id, body) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("/todos/check/".concat(id), body).then(function (res) {
      dispatch({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_0__["TODO_EDITED"],
        payload: body,
        id: id
      });
    })["catch"](function (err) {});
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
//# sourceMappingURL=_app.js.1e37ce961fdcb728fe44.hot-update.js.map