webpackHotUpdate(0,{"./client/js/containers/news-container.js":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n(a("./node_modules/react/index.js"));a("./node_modules/@material-ui/core/styles/index.js"),n(a("./node_modules/@material-ui/core/Paper/index.js")),n(a("./node_modules/@material-ui/core/Grid/index.js"));function n(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return l.default.createElement("div",{className:e.classes.root},l.default.createElement("h1",null,"Your Latest News"),e.stories.map(function(e,t){return l.default.createElement("div",{key:e+t,className:"story story-card"},l.default.createElement("h2",null,e.title),l.default.createElement("p",null,e.body))}))}}});