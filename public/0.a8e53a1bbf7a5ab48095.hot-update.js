webpackHotUpdate(0,{"./client/js/app.js":function(e,t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=c(n("./node_modules/react/index.js")),a=c(n("./node_modules/react-dom/index.js")),l=c(n("./node_modules/axios/index.js")),u=c(n("./client/js/containers/app-container.js")),i=c(n("./client/js/containers/news-container.js"));function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isLoaded:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),o(t,[{key:"componentDidMount",value:function(){var e=this;l.default.get("https://jsonplaceholder.typicode.com/posts").then(function(t){console.log(t),e.setState({stories:t,isLoaded:!0})})}},{key:"render",value:function(){return r.default.createElement("div",null,this.state.isLoaded?r.default.createElement(u.default,null,r.default.createElement(i.default,null)):r.default.createElement(Loader,null))}}]),t}();a.default.render(r.default.createElement(s,null),document.getElementById("root"))}});