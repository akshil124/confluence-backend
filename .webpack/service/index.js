/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dataSource/organizationDataSource.js":
/*!**********************************************!*\
  !*** ./dataSource/organizationDataSource.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ organizations)
/* harmony export */ });
/* harmony import */ var apollo_datasource_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-datasource-mongodb */ "apollo-datasource-mongodb");
/* harmony import */ var apollo_datasource_mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_datasource_mongodb__WEBPACK_IMPORTED_MODULE_0__);

class organizations extends apollo_datasource_mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoDataSource {
  async createOrganizations(data) {
    console.log('data', data);
    return data;
    // return await this.model.create({name, email, password, role});
  }
}

;

/***/ }),

/***/ "./models/organizationSchema.js":
/*!**************************************!*\
  !*** ./models/organizationSchema.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const organization = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({
  name: {
    type: 'String'
  },
  email: {
    type: 'String'
  },
  category: {
    type: 'String'
  },
  employees: {
    type: 'String'
  },
  password: {
    type: 'String'
  }
});
let Organization = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Organization", organization);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Organization);

/***/ }),

/***/ "./serverConfig/dataSource.js":
/*!************************************!*\
  !*** ./serverConfig/dataSource.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataSources": () => (/* binding */ dataSources)
/* harmony export */ });
/* harmony import */ var _models_organizationSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/organizationSchema */ "./models/organizationSchema.js");
/* harmony import */ var _dataSource_organizationDataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dataSource/organizationDataSource */ "./dataSource/organizationDataSource.js");


const dataSources = {
  organization: new _dataSource_organizationDataSource__WEBPACK_IMPORTED_MODULE_1__["default"](_models_organizationSchema__WEBPACK_IMPORTED_MODULE_0__["default"])
};

/***/ }),

/***/ "./serverConfig/resolver.js":
/*!**********************************!*\
  !*** ./serverConfig/resolver.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolvers": () => (/* binding */ resolvers)
/* harmony export */ });
const resolvers = {
  Query: {
    hello: () => "world"
  },
  Mutation: {
    createOrganization: (parent, args, context) => {
      return context.dataSource.organization.createOrganizations(args);
    }
  }
};

/***/ }),

/***/ "./serverConfig/typeDefs.js":
/*!**********************************!*\
  !*** ./serverConfig/typeDefs.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typeDefs": () => (/* binding */ typeDefs)
/* harmony export */ });
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);

const typeDefs = apollo_server_express__WEBPACK_IMPORTED_MODULE_0__.gql`
  type Query {
    hello: String
  }
  type Mutation{
    createOrganization(name:String,email:String,category:String,employees:String,password:String): organization!
  }
  type organization{
    name:String
    email:String
    category:String
    employees:String
    password:String
  }
`;

/***/ }),

/***/ "apollo-datasource-mongodb":
/*!********************************************!*\
  !*** external "apollo-datasource-mongodb" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("apollo-datasource-mongodb");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "graphql-playground-middleware-express":
/*!********************************************************!*\
  !*** external "graphql-playground-middleware-express" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("graphql-playground-middleware-express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "serverless-http":
/*!**********************************!*\
  !*** external "serverless-http" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("serverless-http");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handler": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var serverless_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! serverless-http */ "serverless-http");
/* harmony import */ var serverless_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(serverless_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_playground_middleware_express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-playground-middleware-express */ "graphql-playground-middleware-express");
/* harmony import */ var graphql_playground_middleware_express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_playground_middleware_express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _serverConfig_typeDefs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serverConfig/typeDefs */ "./serverConfig/typeDefs.js");
/* harmony import */ var _serverConfig_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serverConfig/resolver */ "./serverConfig/resolver.js");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _serverConfig_dataSource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./serverConfig/dataSource */ "./serverConfig/dataSource.js");









const Url = process.env.MONGO_DB_URL;
const connectDB = async () => {
  await mongoose__WEBPACK_IMPORTED_MODULE_6___default().connect(Url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};
connectDB().then(() => {
  console.log('your database run successfully');
}).catch(err => {
  console.log('err', err);
});
const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
let apolloServer = null;
async function startServer() {
  apolloServer = new apollo_server_express__WEBPACK_IMPORTED_MODULE_3__.ApolloServer({
    typeDefs: _serverConfig_typeDefs__WEBPACK_IMPORTED_MODULE_4__.typeDefs,
    resolvers: _serverConfig_resolver__WEBPACK_IMPORTED_MODULE_5__.resolvers,
    context: {
      // const token = req.headers.authorization.split('Bearer ')[1] || '';
      // let user ;
      // if(token){
      //     user = await jwt.verify(token, process.env.JWT_KEY);
      // }
      // return {user};
      dataSources: _serverConfig_dataSource__WEBPACK_IMPORTED_MODULE_8__.dataSources
    }
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({
    app
  });
}
startServer();
app.get("/playground", graphql_playground_middleware_express__WEBPACK_IMPORTED_MODULE_2___default()({
  endpoint: "/dev/graphql"
}));
const handler = serverless_http__WEBPACK_IMPORTED_MODULE_1___default()(app);

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map