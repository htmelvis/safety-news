webpackHotUpdate("main",{

/***/ "./client/js/containers/news-container.js":
/*!************************************************!*\
  !*** ./client/js/containers/news-container.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar fakeTags = ['Fall Hazards', 'Spectator Safety', 'Transportation Safety', 'Aerospace Safety', 'Safety Netting'];\n\nvar NewsContainer = function NewsContainer(props) {\n  return _react2.default.createElement(\n    'div',\n    { className: 'news-container container' },\n    _react2.default.createElement(\n      'div',\n      { className: 'row' },\n      _react2.default.createElement(\n        'div',\n        { className: 'column column-50' },\n        _react2.default.createElement(\n          'h1',\n          { className: 'page-title' },\n          'Your Latest Work Safety News'\n        )\n      ),\n      _react2.default.createElement(\n        'div',\n        { className: 'column column-50' },\n        _react2.default.createElement(\n          'div',\n          { className: 'float-right' },\n          _react2.default.createElement(\n            'a',\n            { href: '#button', className: 'button button-outline button-active' },\n            'Latest'\n          ),\n          _react2.default.createElement(\n            'a',\n            { href: '#vsd', className: 'button button-outline' },\n            'Most Popular'\n          )\n        )\n      )\n    ),\n    _react2.default.createElement('hr', null),\n    props.stories.slice(0, 10).map(function (story, i) {\n      return _react2.default.createElement(\n        'div',\n        { key: story + i, className: 'story story-card' },\n        _react2.default.createElement(\n          'header',\n          null,\n          _react2.default.createElement(\n            'h1',\n            null,\n            _react2.default.createElement(\n              'a',\n              { href: '#' + Math.floor(Math.random() * 30) * i + 40 },\n              story.title\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'footer',\n          null,\n          _react2.default.createElement(\n            'ul',\n            { className: 'story-controls' },\n            _react2.default.createElement(\n              'li',\n              null,\n              _react2.default.createElement(\n                'a',\n                { href: '#' },\n                Math.floor(Math.random() * 20) * i + 40,\n                ' votes'\n              )\n            ),\n            _react2.default.createElement(\n              'li',\n              null,\n              _react2.default.createElement(\n                'a',\n                { href: '#' },\n                'View Comments'\n              )\n            ),\n            _react2.default.createElement(\n              'li',\n              null,\n              _react2.default.createElement(\n                'a',\n                { className: 'tag', href: '#' },\n                fakeTags[Math.floor(Math.random() * fakeTags.length)]\n              )\n            ),\n            _react2.default.createElement(\n              'li',\n              null,\n              _react2.default.createElement(\n                'a',\n                { className: 'tag', href: '#' },\n                fakeTags[Math.floor(Math.random() * fakeTags.length)]\n              )\n            )\n          )\n        )\n      );\n    })\n  );\n};\n\nexports.default = NewsContainer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvanMvY29udGFpbmVycy9uZXdzLWNvbnRhaW5lci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9qcy9jb250YWluZXJzL25ld3MtY29udGFpbmVyLmpzP2ViMDIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBmYWtlVGFncyA9IFsnRmFsbCBIYXphcmRzJywgJ1NwZWN0YXRvciBTYWZldHknLCAnVHJhbnNwb3J0YXRpb24gU2FmZXR5JywgJ0Flcm9zcGFjZSBTYWZldHknLCAnU2FmZXR5IE5ldHRpbmcnXTtcblxudmFyIE5ld3NDb250YWluZXIgPSBmdW5jdGlvbiBOZXdzQ29udGFpbmVyKHByb3BzKSB7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICB7IGNsYXNzTmFtZTogJ25ld3MtY29udGFpbmVyIGNvbnRhaW5lcicgfSxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6ICdyb3cnIH0sXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnY29sdW1uIGNvbHVtbi01MCcgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2gxJyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3BhZ2UtdGl0bGUnIH0sXG4gICAgICAgICAgJ1lvdXIgTGF0ZXN0IFdvcmsgU2FmZXR5IE5ld3MnXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnY29sdW1uIGNvbHVtbi01MCcgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdmbG9hdC1yaWdodCcgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgIHsgaHJlZjogJyNidXR0b24nLCBjbGFzc05hbWU6ICdidXR0b24gYnV0dG9uLW91dGxpbmUgYnV0dG9uLWFjdGl2ZScgfSxcbiAgICAgICAgICAgICdMYXRlc3QnXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgIHsgaHJlZjogJyN2c2QnLCBjbGFzc05hbWU6ICdidXR0b24gYnV0dG9uLW91dGxpbmUnIH0sXG4gICAgICAgICAgICAnTW9zdCBQb3B1bGFyJ1xuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICksXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2hyJywgbnVsbCksXG4gICAgcHJvcHMuc3Rvcmllcy5zbGljZSgwLCAxMCkubWFwKGZ1bmN0aW9uIChzdG9yeSwgaSkge1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBrZXk6IHN0b3J5ICsgaSwgY2xhc3NOYW1lOiAnc3Rvcnkgc3RvcnktY2FyZCcgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2hlYWRlcicsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdoMScsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgeyBocmVmOiAnIycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMCkgKiBpICsgNDAgfSxcbiAgICAgICAgICAgICAgc3RvcnkudGl0bGVcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdmb290ZXInLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAndWwnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdzdG9yeS1jb250cm9scycgfSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnbGknLFxuICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgICAgeyBocmVmOiAnIycgfSxcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMCkgKiBpICsgNDAsXG4gICAgICAgICAgICAgICAgJyB2b3RlcydcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnbGknLFxuICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgICAgeyBocmVmOiAnIycgfSxcbiAgICAgICAgICAgICAgICAnVmlldyBDb21tZW50cydcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnbGknLFxuICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICd0YWcnLCBocmVmOiAnIycgfSxcbiAgICAgICAgICAgICAgICBmYWtlVGFnc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmYWtlVGFncy5sZW5ndGgpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdsaScsXG4gICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3RhZycsIGhyZWY6ICcjJyB9LFxuICAgICAgICAgICAgICAgIGZha2VUYWdzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZha2VUYWdzLmxlbmd0aCldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE5ld3NDb250YWluZXI7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/js/containers/news-container.js\n");

/***/ })

})