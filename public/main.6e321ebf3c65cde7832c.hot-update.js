webpackHotUpdate("main",{

/***/ "./client/js/containers/news-container.js":
/*!************************************************!*\
  !*** ./client/js/containers/news-container.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar fakeTags = ['Fall Hazards', 'Spectator Safety', 'Transportation Safety', 'Aerospace Safety'];\n\nvar NewsContainer = function NewsContainer(props) {\n  return _react2.default.createElement(\n    'div',\n    { className: 'news-container container' },\n    _react2.default.createElement(\n      'h1',\n      { className: 'page-title' },\n      'Your Latest Work Safety News'\n    ),\n    props.stories.slice(0, 10).map(function (story, i) {\n      return _react2.default.createElement(\n        'div',\n        { key: story + i, className: 'story story-card' },\n        _react2.default.createElement(\n          'header',\n          null,\n          _react2.default.createElement(\n            'h1',\n            null,\n            _react2.default.createElement(\n              'a',\n              { href: '#' + Math.floor(Math.random() * 30) * i + 40 },\n              story.title\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'footer',\n          null,\n          _react2.default.createElement(\n            'ul',\n            { className: 'story-controls' },\n            _react2.default.createElement(\n              'li',\n              null,\n              _react2.default.createElement(\n                'a',\n                { href: '#' },\n                Math.floor(Math.random() * 20) * i + 40,\n                ' votes'\n              )\n            ),\n            _react2.default.createElement(\n              'li',\n              null,\n              _react2.default.createElement(\n                'a',\n                { href: '#' },\n                'View Comments'\n              )\n            ),\n            _react2.default.createElement(\n              'li',\n              null,\n              _react2.default.createElement(\n                'a',\n                { href: '#' },\n                'Some Category'\n              )\n            )\n          )\n        )\n      );\n    })\n  );\n};\n\nexports.default = NewsContainer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvanMvY29udGFpbmVycy9uZXdzLWNvbnRhaW5lci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9qcy9jb250YWluZXJzL25ld3MtY29udGFpbmVyLmpzP2ViMDIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBmYWtlVGFncyA9IFsnRmFsbCBIYXphcmRzJywgJ1NwZWN0YXRvciBTYWZldHknLCAnVHJhbnNwb3J0YXRpb24gU2FmZXR5JywgJ0Flcm9zcGFjZSBTYWZldHknXTtcblxudmFyIE5ld3NDb250YWluZXIgPSBmdW5jdGlvbiBOZXdzQ29udGFpbmVyKHByb3BzKSB7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICB7IGNsYXNzTmFtZTogJ25ld3MtY29udGFpbmVyIGNvbnRhaW5lcicgfSxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICdoMScsXG4gICAgICB7IGNsYXNzTmFtZTogJ3BhZ2UtdGl0bGUnIH0sXG4gICAgICAnWW91ciBMYXRlc3QgV29yayBTYWZldHkgTmV3cydcbiAgICApLFxuICAgIHByb3BzLnN0b3JpZXMuc2xpY2UoMCwgMTApLm1hcChmdW5jdGlvbiAoc3RvcnksIGkpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsga2V5OiBzdG9yeSArIGksIGNsYXNzTmFtZTogJ3N0b3J5IHN0b3J5LWNhcmQnIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdoZWFkZXInLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnaDEnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgIHsgaHJlZjogJyMnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzApICogaSArIDQwIH0sXG4gICAgICAgICAgICAgIHN0b3J5LnRpdGxlXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZm9vdGVyJyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ3VsJyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnc3RvcnktY29udHJvbHMnIH0sXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2xpJyxcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2EnLFxuICAgICAgICAgICAgICAgIHsgaHJlZjogJyMnIH0sXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjApICogaSArIDQwLFxuICAgICAgICAgICAgICAgICcgdm90ZXMnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2xpJyxcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2EnLFxuICAgICAgICAgICAgICAgIHsgaHJlZjogJyMnIH0sXG4gICAgICAgICAgICAgICAgJ1ZpZXcgQ29tbWVudHMnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2xpJyxcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2EnLFxuICAgICAgICAgICAgICAgIHsgaHJlZjogJyMnIH0sXG4gICAgICAgICAgICAgICAgJ1NvbWUgQ2F0ZWdvcnknXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE5ld3NDb250YWluZXI7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/js/containers/news-container.js\n");

/***/ })

})