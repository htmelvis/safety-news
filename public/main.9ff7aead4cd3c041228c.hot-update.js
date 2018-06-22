webpackHotUpdate("main",{

/***/ "./client/js/containers/news-container.js":
/*!************************************************!*\
  !*** ./client/js/containers/news-container.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NewsContainer = function NewsContainer(props) {\n  return _react2.default.createElement(\n    \"div\",\n    { className: \"news-container container\" },\n    _react2.default.createElement(\n      \"h1\",\n      null,\n      \"Your Latest News\"\n    ),\n    props.stories.slice(0, 10).map(function (story, i) {\n      return _react2.default.createElement(\n        \"div\",\n        { key: story + i, className: \"story story-card\" },\n        _react2.default.createElement(\n          \"header\",\n          null,\n          _react2.default.createElement(\n            \"h1\",\n            null,\n            story.title\n          )\n        ),\n        _react2.default.createElement(\n          \"p\",\n          null,\n          story.body\n        ),\n        _react2.default.createElement(\n          \"footer\",\n          null,\n          _react2.default.createElement(\n            \"ul\",\n            null,\n            _react2.default.createElement(\n              \"li\",\n              null,\n              _react2.default.createElement(\n                \"a\",\n                { href: \"#\" },\n                Math.floor(Math.random() * 20),\n                \" votes\"\n              )\n            ),\n            _react2.default.createElement(\n              \"li\",\n              null,\n              _react2.default.createElement(\n                \"a\",\n                { href: \"#\" },\n                \"View Comments\"\n              )\n            ),\n            _react2.default.createElement(\n              \"li\",\n              null,\n              _react2.default.createElement(\n                \"a\",\n                { href: \"#\" },\n                \"Suggestion?\"\n              )\n            )\n          )\n        )\n      );\n    })\n  );\n};\n\nexports.default = NewsContainer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvanMvY29udGFpbmVycy9uZXdzLWNvbnRhaW5lci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9qcy9jb250YWluZXJzL25ld3MtY29udGFpbmVyLmpzP2ViMDIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTmV3c0NvbnRhaW5lciA9IGZ1bmN0aW9uIE5ld3NDb250YWluZXIocHJvcHMpIHtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzc05hbWU6IFwibmV3cy1jb250YWluZXIgY29udGFpbmVyXCIgfSxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiaDFcIixcbiAgICAgIG51bGwsXG4gICAgICBcIllvdXIgTGF0ZXN0IE5ld3NcIlxuICAgICksXG4gICAgcHJvcHMuc3Rvcmllcy5zbGljZSgwLCAxMCkubWFwKGZ1bmN0aW9uIChzdG9yeSwgaSkge1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IGtleTogc3RvcnkgKyBpLCBjbGFzc05hbWU6IFwic3Rvcnkgc3RvcnktY2FyZFwiIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwiaGVhZGVyXCIsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFwiaDFcIixcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBzdG9yeS50aXRsZVxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBzdG9yeS5ib2R5XG4gICAgICAgICksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwiZm9vdGVyXCIsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjApLFxuICAgICAgICAgICAgICAgIFwiIHZvdGVzXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICAgICAgICBcIlZpZXcgQ29tbWVudHNcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgIFwiU3VnZ2VzdGlvbj9cIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBOZXdzQ29udGFpbmVyOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/js/containers/news-container.js\n");

/***/ })

})