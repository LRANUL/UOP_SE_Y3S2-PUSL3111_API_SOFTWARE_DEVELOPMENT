module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const devConfig = {
  MONGO_URL: 'mongodb://developer:OWBFpoXsPEQWjKgK@covtrack-cluster-1-shard-00-00.tpmbm.mongodb.net:27017,covtrack-cluster-1-shard-00-01.tpmbm.mongodb.net:27017,covtrack-cluster-1-shard-00-02.tpmbm.mongodb.net:27017/CovTrack_DB_Primary?ssl=true&replicaSet=atlas-r45e9e-shard-0&authSource=admin&retryWrites=true&w=majority',
  JWT_SECRET: 'thisisasecret',
  JWT_SECRET_ADMIN: 'thisistheadminsecret',
  JWT_SECRET_PHI: 'thisisthephisecret',
  JWT_SECRET_CDC: 'thisisthecdcsecret'
};

const testConfig = {
  MONGO_URL: 'mongodb://127.0.0.1:27017/server-test'
};

const prodConfig = {
  MONGO_URL: 'mongodb://127.0.0.1:27017/server-prod'
};

const defaultConfig = {
  PORT: process.env.PORT || 5000
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

exports.default = Object.assign({}, defaultConfig, envConfig(process.env.NODE_ENV));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.placesSchema = exports.HistorySchema = exports.CustomerSchema = undefined;

var _bson = __webpack_require__(16);

var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _validator = __webpack_require__(27);

var _validator2 = _interopRequireDefault(_validator);

var _bcryptNodejs = __webpack_require__(14);

var _jsonwebtoken = __webpack_require__(22);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _mongooseUniqueValidator = __webpack_require__(23);

var _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);

var _validations = __webpack_require__(5);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-unused-vars
const CustomerSchema = exports.CustomerSchema = new _mongoose.Schema({
  firstName: {
    type: String,
    required: "First Name is required"
  },
  lastName: {
    type: String,
    required: "Last Name is required"
  },
  emailAddress: {
    type: String,
    required: "Email address is required"
  },
  heathStatus: {
    type: String
  },
  address: {
    type: String
  },
  affliation: {
    type: String
  },
  checkedin: {
    type: Boolean,
    default: false
  },
  nic: {
    type: String,
    required: "NIC is required"
  },
  mobileNumber: {
    type: Number,
    required: "Phone is required"
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

const HistorySchema = exports.HistorySchema = new _mongoose.Schema({
  nic: {
    type: String,
    required: "NIC is required"
  },
  uid: {
    type: String,
    required: "UID is required"
  },
  emailAddress: {
    type: String,
    required: "Email address is required"
  },
  longitude: {
    type: Number,
    required: "Longitude is required"
  },
  latitude: {
    type: Number,
    required: "Latitude is required"
  },
  checkintime: {
    type: String,
    default: new Date().toLocaleTimeString()
  },
  checkouttime: {
    type: String
  },
  date: {
    type: String,
    default: new Date().toLocaleDateString()
  }
});

const placesSchema = exports.placesSchema = new _mongoose.Schema({
  QRimage: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true },
  name: {
    type: String,
    required: true },
  sector: {
    type: String,
    required: true },
  phone: {
    type: Number,
    required: true },
  streetAddress: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true }
});

const UserSchema = new _mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required!'],
    trim: true,
    validate: {
      validator(email) {
        return _validator2.default.isEmail(email);
      },
      message: '{VALUE} is not a valid email!'
    }
  },
  firstName: {
    type: String,
    required: [true, 'FirstName is required!'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'LastName is required!'],
    trim: true
  },
  userName: {
    type: String,
    required: [true, 'userName is required!'],
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
    trim: true,
    minlength: [6, 'Password need to be longer!'],
    validate: {
      validator(password) {
        return _validations.passwordReg.test(password);
      },
      message: '{VALUE} is not a valid password!'
    }
  }
}, { timestamps: true });

UserSchema.plugin(_mongooseUniqueValidator2.default, {
  message: '{VALUE} already taken!'
});

UserSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password);
  }

  return next();
});

UserSchema.methods = {
  _hashPassword(password) {
    return (0, _bcryptNodejs.hashSync)(password);
  },
  authenticateUser(password) {
    return (0, _bcryptNodejs.compareSync)(password, this.password);
  },
  createToken() {
    return _jsonwebtoken2.default.sign({
      _id: this._id
    }, _config2.default.JWT_SECRET);
  },
  toAuthJSON() {
    return {
      _id: this._id,
      userName: this.userName,
      token: `JWT ${this.createToken()}`
    };
  },
  toJSON() {
    return {
      _id: this._id,
      userName: this.userName
    };
  }
};

exports.default = _mongoose2.default.model('User', UserSchema);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authJwt = exports.authLocal = undefined;

var _passport = __webpack_require__(6);

var _passport2 = _interopRequireDefault(_passport);

var _passportLocal = __webpack_require__(26);

var _passportLocal2 = _interopRequireDefault(_passportLocal);

var _passportJwt = __webpack_require__(25);

var _covTrackModel = __webpack_require__(1);

var _covTrackModel2 = _interopRequireDefault(_covTrackModel);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Local strategy
const localOpts = {
  usernameField: 'email'
};

const localStrategy = new _passportLocal2.default(localOpts, async (email, password, done) => {
  try {
    const user = await _covTrackModel2.default.findOne({ email });
    if (!user) {
      return done(null, false);
    } else if (!user.authenticateUser(password)) {
      return done(null, false);
    }

    return done(null, user);
  } catch (e) {
    return done(e, false);
  }
});

// Jwt strategy
const jwtOpts = {
  jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeader('authorization'),
  secretOrKey: _config2.default.JWT_SECRET
};

const jwtStrategy = new _passportJwt.Strategy(jwtOpts, async (payload, done) => {
  try {
    const user = await _covTrackModel2.default.findById(payload._id);

    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  } catch (e) {
    return done(e, false);
  }
});

_passport2.default.use(localStrategy);
_passport2.default.use(jwtStrategy);

const authLocal = exports.authLocal = _passport2.default.authenticate('local', { session: false });
const authJwt = exports.authJwt = _passport2.default.authenticate('jwt', { session: false });

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passwordReg = undefined;

var _joi = __webpack_require__(21);

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const passwordReg = exports.passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

exports.default = {
  signup: {
    body: {
      email: _joi2.default.string().email().required(),
      password: _joi2.default.string().regex(passwordReg).required(),
      firstName: _joi2.default.string().required(),
      lastName: _joi2.default.string().required(),
      userName: _joi2.default.string().required()
    }
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: C:/dev/webdev/GROUP/UOP_SE_Y3S2-PUSL3111_API_SOFTWARE_DEVELOPMENT/programs/workspace/cov-track_server-side-application/src/routes/covTrackRoutes.js: Unexpected token (6:23)\n\n\u001b[0m \u001b[90m 4 | \u001b[39m\u001b[36mimport\u001b[39m { authLocal\u001b[33m,\u001b[39m authJwt } from \u001b[32m'../services/auth'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 5 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 6 | \u001b[39m\u001b[36mimport\u001b[39m {signUp\u001b[33m,\u001b[39m login} as userController from \u001b[32m'../controllers/userController'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m                       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 7 | \u001b[39m\u001b[36mimport\u001b[39m createPlaces from \u001b[32m'../controllers/locationController'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 8 | \u001b[39m\n \u001b[90m 9 | \u001b[39m\u001b[36mimport\u001b[39m {\u001b[0m\n");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Remove the warning with Promise
/* eslint-disable no-console */

_mongoose2.default.Promise = global.Promise;

// Connect the db with the url provided
try {
  _mongoose2.default.connect(_config2.default.MONGO_URL);
} catch (err) {
  _mongoose2.default.createConnection(_config2.default.MONGO_URL);
}

_mongoose2.default.connection.once('open', () => console.log('MongoDB Running')).on('error', e => {
  throw e;
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _morgan = __webpack_require__(24);

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = __webpack_require__(15);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _compression = __webpack_require__(17);

var _compression2 = _interopRequireDefault(_compression);

var _helmet = __webpack_require__(19);

var _helmet2 = _interopRequireDefault(_helmet);

var _passport = __webpack_require__(6);

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

exports.default = app => {
  if (isProd) {
    app.use((0, _compression2.default)());
    app.use((0, _helmet2.default)());
  }

  app.use(_bodyParser2.default.json());
  app.use(_bodyParser2.default.urlencoded({ extended: true }));
  app.use(_passport2.default.initialize());

  if (isDev) {
    app.use((0, _morgan2.default)('dev'));
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(10);

var _cors2 = _interopRequireDefault(_cors);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

__webpack_require__(8);

var _middlewares = __webpack_require__(9);

var _middlewares2 = _interopRequireDefault(_middlewares);

var _covTrackRoutes = __webpack_require__(7);

var _covTrackRoutes2 = _interopRequireDefault(_covTrackRoutes);

var _auth = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const apiRoutes = () => {
  app.use('/protected', _covTrackRoutes2.default);
}; /* eslint-disable no-console */

const app = (0, _express2.default)();
app.use((0, _cors2.default)());

(0, _middlewares2.default)(app);

app.get('/', (req, res) => {
  res.send('Running...');
});
app.get('/test', _auth.authJwt, (req, res) => {
  res.send('Private route accessed!');
});

app.post('/places', _auth.authJwt, (req, res) => {
  res.send('User Created');
});

apiRoutes(app);

app.listen(_config2.default.PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`
      Server running on port: ${_config2.default.PORT}
      ---
      Running on ${process.env.NODE_ENV}
      ---
      Make something great
    `);
  }
});

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

module.exports = require("bcrypt-nodejs");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("bson");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

module.exports = require("joi");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("mongoose-unique-validator");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ })
/******/ ]);