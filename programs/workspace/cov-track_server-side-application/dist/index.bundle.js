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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.placesSchema = exports.HistorySchema = exports.CitizenSchema = undefined;

var _bson = __webpack_require__(20);

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _validator = __webpack_require__(31);

var _validator2 = _interopRequireDefault(_validator);

var _bcryptNodejs = __webpack_require__(19);

var _jsonwebtoken = __webpack_require__(26);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _mongooseUniqueValidator = __webpack_require__(27);

var _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);

var _validations = __webpack_require__(6);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-unused-vars
const CitizenSchema = exports.CitizenSchema = new _mongoose.Schema({
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
  historyID: {
    type: String
  },
  lastCheckedLongitude: {
    type: String
  },
  lastCheckedLatitude: {
    type: String
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
  checkinlongitude: {
    type: Number,
    required: "Longitude is required"
  },
  checkinlatitude: {
    type: Number,
    required: "Latitude is required"
  },
  checkoutlongitude: {
    type: Number
  },
  checkoutlatitude: {
    type: Number
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
  uid: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  sector: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  }
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
  },
  DOB: {
    type: Date,
    required: [true, 'Date of birth is required!']
  },
  phone: {
    type: String,
    required: [true, 'phone is required!'],
    unique: true
  },
  address: {
    type: String,
    required: [true, 'address is required!']
  },
  userType: {
    type: String,
    required: [true, 'user Type is required!']
  },
  city: {
    type: String,
    required: [true, 'city is required!']
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
  }
};

exports.default = _mongoose2.default.model('User', UserSchema);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
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
  PORT: process.env.PORT || 8081
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authJwt = exports.authLocal = undefined;

var _passport = __webpack_require__(8);

var _passport2 = _interopRequireDefault(_passport);

var _passportLocal = __webpack_require__(30);

var _passportLocal2 = _interopRequireDefault(_passportLocal);

var _passportJwt = __webpack_require__(29);

var _covTrackModel = __webpack_require__(0);

var _covTrackModel2 = _interopRequireDefault(_covTrackModel);

var _config = __webpack_require__(2);

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
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passwordReg = undefined;

var _joi = __webpack_require__(25);

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
/* 7 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(4);

var _expressValidation = __webpack_require__(22);

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _auth = __webpack_require__(3);

var _userController = __webpack_require__(18);

var userController = _interopRequireWildcard(_userController);

var _placesController = __webpack_require__(16);

var placesController = _interopRequireWildcard(_placesController);

var _officersController = __webpack_require__(15);

var officersController = _interopRequireWildcard(_officersController);

var _queryController = __webpack_require__(17);

var queryController = _interopRequireWildcard(_queryController);

var _citizensController = __webpack_require__(14);

var _validations = __webpack_require__(6);

var _validations2 = _interopRequireDefault(_validations);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = new _express.Router();

// JWT test route
routes.get('/test', _auth.authJwt, (req, res) => {
  res.send('Private route accessed!');
});
/** 
 * AUTHENTICATION 
 * */
// Auth
routes.post("/signup", (0, _expressValidation2.default)(_validations2.default.signup), userController.signUp);
routes.post("/login", _auth.authLocal, userController.login);

/**
 * REACT MOBILE APP ROUTES 
 * */

/** Citizen Manage Routes  */
// For creating a Citizen 
routes.post("/citizens", _citizensController.addNewCitizen);
// For deleting Citizen from NIC
routes.delete("/citizens/:nic", _citizensController.removeCitizenFromNIC);
// For updating Citizen from NIC
routes.put("/citizens/:nic", _citizensController.updateCitizenFromNIC);
// For getting Citizen from NIC
routes.get("/citizens/:nic", _citizensController.getCitizenFromNIC);
// For getting all Citizens
routes.get("/citizens", _auth.authJwt, _citizensController.getCitizens);
// routes.get('/get-Citizens', authJwt, (req, res) => {
//   res.send('Private route accessed!');
// });

/** Citizen Checkin and History Routes */

// For getting checkin status
routes.get("/citizens/:nic/checkinstatus", _citizensController.getCitizenCheckInStatus);
// For validating in Business or Place QRCode
routes.get("/citizens/checkin/validate/:uid", _citizensController.getUIDAuthenticity);
// For checking in Citizen
routes.post("/citizens/checkin", _citizensController.setCitizenCheckIn);
// For getting in Citizen history
routes.get("/citizens/:nic/history", _citizensController.getCitizenHistory);

// History stuff
const fs = __webpack_require__(5);

routes.get('/fs/json', (req, res) => {
  fs.readFile('../../data/db.json', (err, json) => {
    const obj = JSON.parse(json);
    res.json(obj);
  });
});

// routes.get('/citizen-list', (req, res) => {
//   const citizenMap = queryController.AllUsers;
//   console.log(citizenMap);
//   res.send(citizenMap);
// });
// import mongoose from "mongoose";
// import { CitizenSchema } from "../models/covTrackModel";

// const Citizen = mongoose.model("Citizen", CitizenSchema);
// routes.get('/citizen-list', async function (req, res) {
//   await Citizen.find({}, function (err, citizens) {
//     console.log('-----------------------------------------------------------------------');
//     console.log(citizens);
//     console.log('-----------------------------------------------------------------------');
//     res.render('/citizen-list', { citizens: citizens });
//   });

// });

/** 
 * ANGULAR APP ROUTES 
 * 
 * */

// need to authenticate (by adding authJwt)  but left like this until authentication is finished
routes.post("/places", placesController.createPlaces, (req, res) => {
  res.send('Private route accessed!');
});

// need to authenticate (by adding authJwt) but left like this until authentication is finished
routes.get("/places/:type", placesController.getPlaces, (req, res) => {
  res.send('Private route accessed!');
});

routes.get("/one/place/:code", placesController.getSinglePlaces, (req, res) => {
  res.send('Private route accessed!');
});

// stifi....... // need to authenticate (by adding authJwt)  but left like this until authentication is finished
routes.get("/places", placesController.getAllPlaces, (req, res) => {
  res.send('Private route accessed!');
});

routes.put("/places/:email", placesController.updateLocation, (req, res) => {
  res.send('Private route accessed!');
});

routes.delete("/places/delete/:email", placesController.deleteLocation, (req, res) => {
  res.send('Private route accessed!');
});

// need to authenticate (by adding authJwt) but left like this until authentication is finished
routes.get("/officers/:type", officersController.getOfficers, (req, res) => {
  res.send('Private route accessed!');
});

// need to authenticate (by adding authJwt) but left like this until authentication is finished
routes.get("/officer/:email", officersController.getOfficer, (req, res) => {
  res.send('Private route accessed!');
});

exports.default = routes;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = __webpack_require__(2);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _morgan = __webpack_require__(28);

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = __webpack_require__(7);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _compression = __webpack_require__(21);

var _compression2 = _interopRequireDefault(_compression);

var _helmet = __webpack_require__(23);

var _helmet2 = _interopRequireDefault(_helmet);

var _passport = __webpack_require__(8);

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
/* 12 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(12);

var _cors2 = _interopRequireDefault(_cors);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

__webpack_require__(10);

var _middlewares = __webpack_require__(11);

var _middlewares2 = _interopRequireDefault(_middlewares);

var _covTrackRoutes = __webpack_require__(9);

var _covTrackRoutes2 = _interopRequireDefault(_covTrackRoutes);

var _auth = __webpack_require__(3);

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _covTrackModel = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Temp
const Citizen = _mongoose2.default.model("Citizen", _covTrackModel.CitizenSchema); /* eslint-disable no-console */

const fs = __webpack_require__(5);

const apiRoutes = () => {
  app.use('/api', _covTrackRoutes2.default);
};

const app = (0, _express2.default)();
app.use((0, _cors2.default)());

(0, _middlewares2.default)(app);

app.get('/', (req, res) => {
  res.send('Running...');
});

// Setup express static middleware to look for files in the api directory for all requests starting with /api
app.use('/data', _auth.authJwt, _express2.default.static('data'), (req, res) => {
  // Optional 404 handler
  res.status(404);
  res.json({ error: { code: 404 } });
});

// const content = 'Some content!'

const fileWrite = content => {
  fs.writeFile('./data/newtest.txt', content, err => {
    if (err) {
      console.error(err);
      return;
    }
  });
};

app.get('/writedata', (req, res) => {
  fileWrite("???");
  res.send('File written!');
});

app.get('/test', _auth.authJwt, (req, res) => {
  res.send('Private route accessed!');
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUIDAuthenticity = exports.getCitizenHistory = exports.setCitizenCheckIn = exports.getCitizenCheckInStatus = exports.removeCitizenFromNIC = exports.updateCitizenFromNIC = exports.getCitizenFromNIC = exports.getCitizens = exports.addNewCitizen = undefined;

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _covTrackModel = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-const */
/* eslint-disable no-shadow */
const Citizen = _mongoose2.default.model("Citizen", _covTrackModel.CitizenSchema);
const History = _mongoose2.default.model("History", _covTrackModel.HistorySchema);
const Business = _mongoose2.default.model("Business", _covTrackModel.placesSchema);
/** Creating a New Citizen */
const addNewCitizen = exports.addNewCitizen = (req, res) => {
  let newCitizen = new Citizen(req.body);

  newCitizen.save((err, Citizen) => {
    if (err) {
      res.sendStatus(err);
    }
    res.json({ message: `Citizen Registered` });
  });
};
/** Search Citizen List */
const getCitizens = exports.getCitizens = (req, res) => {
  Citizen.find({}, (err, Citizen) => {
    if (err) {
      res.send(err);
    }
    res.json(Citizen);
  });
};
/** 
 * Find Citizen by NIC 
 * @param {string} nic requests provides NIC to find Citizen
*/
const getCitizenFromNIC = exports.getCitizenFromNIC = (req, res) => {
  Citizen.findOne({ nic: req.params.nic }, (err, Citizen) => {
    if (err) {
      res.send(err);
    }
    res.json(Citizen);
  });
};
/** 
 * Update Citizen by NIC 
 * @param {string} nic requests provides NIC to update Citizen data
 * @param {string} body consists data as a JSON object to update existing Profile
*/
const updateCitizenFromNIC = exports.updateCitizenFromNIC = (req, res) => {
  Citizen.findOne({ nic: req.params.nic }, req.body, { new: true, useFindAndModify: false }, (err, Citizen) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: `Citizen with NIC: ${req.params.nic} was updated.` });
  });
};
/** 
 * Remove Citizen by NIC 
 * @param {string} nic remove Citizen by provided NIC
*/
const removeCitizenFromNIC = exports.removeCitizenFromNIC = (req, res) => {
  // eslint-disable-next-line no-unused-vars
  Citizen.findOneAndDelete({ nic: req.params.nic }, (err, Citizen) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: `Citizen with NIC: ${req.params.nic} was deleted.` });
  });
};
/** 
 * Find Citizen CheckIn Status 
 * @param {string} nic to find Citizen checkin status by provided NIC
 * */
const getCitizenCheckInStatus = exports.getCitizenCheckInStatus = (req, res) => {
  Citizen.findOne({ nic: req.params.nic }, (err, Citizen) => {
    if (err) {
      res.send(err);
    }
    res.json(Citizen.checkedin);
  });
};
/** 
 * Adding a New Checkin to Citizen 
 * @param {Object} body records Citizen activity to database
 * */
const setCitizenCheckIn = exports.setCitizenCheckIn = (req, res) => {
  let newCheckInRecord = new History(req.body);
  newCheckInRecord.save((err, History) => {
    if (err) {
      res.send(err);
    } else {
      Citizen.findOneAndUpdate({ nic: req.body.nic }, { checkedin: true, historyID: History.id }, (err, Citizen) => {
        if (err) {
          res.send(err);
        }
        res.json({ message: `Citizen with NIC: ${req.params.nic} was checked-in.` });
      });
    }
  });
};
/** 
 * Find records of History per Citizen 
 * @param {string} nic to find Citizen histroy records by provided NIC
 * */
const getCitizenHistory = exports.getCitizenHistory = (req, res) => {
  History.find({ nic: req.params.nic }, (err, History) => {
    if (err) {
      res.send(err);
    }
    res.json(History);
  });
};

/** 
 * Identify Authenticity of a UID - Citizen App Request
 * @param {string} uid contains the unique identifier to track each business
 */
const getUIDAuthenticity = exports.getUIDAuthenticity = (req, res) => {
  Business.findOne({ uid: req.params.uid }, (err, Business) => {
    if (err) {
      res.send(err);
    }
    res.json(true);
  });
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOfficer = exports.getOfficers = undefined;

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _covTrackModel = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const officers = _mongoose2.default.model("User", _covTrackModel.UserSchema);

const getOfficers = exports.getOfficers = (req, res) => {
  officers.find({ userType: req.params.type }).then(data => {
    if (data) {
      res.status(200).json({
        message: "It works",
        data
      });
    } else {
      res.status(404).json({
        message: "The user does not exist"
      });
    }
  });
};

const getOfficer = exports.getOfficer = (req, res) => {
  officers.findOne({ email: req.params.email }).then(data => {
    if (data) {
      res.status(200).json({
        message: "It works",
        data
      });
    } else {
      res.status(404).json({
        message: "The user does not exist"
      });
    }
  });
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteLocation = exports.updateLocation = exports.getAllPlaces = exports.getSinglePlaces = exports.getPlaces = exports.createPlaces = undefined;

var _bodyParser = __webpack_require__(7);

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _covTrackModel = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const places = _mongoose2.default.model("place", _covTrackModel.placesSchema);

// creates a new location
const createPlaces = exports.createPlaces = (req, res) => {
  const newplace = new places(req.body);
  newplace.save((err, Place) => {
    if (err) {
      res.send(err);
    }
    res.json(Place);
  });
};

const getPlaces = exports.getPlaces = (req, res) => {
  places.find({ sector: req.params.type }).then(data => {
    if (data) {
      res.status(200).json({
        message: "It works",
        data
      });
    } else {
      res.status(404).json({
        message: "The user does not exist"
      });
    }
  });
};

const getSinglePlaces = exports.getSinglePlaces = (req, res) => {
  places.findOne({ uid: req.params.code }).then(data => {
    if (data) {
      res.status(200).json({
        message: "It works",
        data
      });
    } else {
      res.status(404).json({
        message: "The user does not exist"
      });
    }
  });
};

// get location details
const getAllPlaces = exports.getAllPlaces = (req, res) => {
  places.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log('Error in Retrieving Places : ' + JSON.stringify(err, undefined, 2));
    }
  });
};

// edit location
const updateLocation = exports.updateLocation = (req, res) => {
  // var location = { name: req.body.name, email: req.body.email, phone: req.body.phone, address: req.body.address };
  places.update({ email: req.params.email }, req.body, { new: true, useFindAndModify: false }, (err, places) => {
    if (err) {
      res.send(err);
    }
    res.json(places);
  });
};

// remove location
const deleteLocation = exports.deleteLocation = (req, res) => {
  places.deleteOne({ email: req.params.email }, (err, places) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: `${req.params.nic} was deleted.` });
  });
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.AllUsers = AllUsers;

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _covTrackModel = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Citizen = _mongoose2.default.model("Citizen", _covTrackModel.CitizenSchema);
// const History = mongoose.model("History", HistorySchema);
// const Business = mongoose.model("Business", placesSchema);

// export async function query(req, res) {
//     const data = await User.create(req.body);
//     return res.json(data);
// }

// const ids = [
//     '4ed3ede8844f0f351100000c',
//     '4ed3f117a844e0471100000d',
//     '4ed3f18132f50c491100000e',
// ];

// export async function query(req, res) {
//     const data = await History.find({ '_id': { $in: ids } }, () => {

//     });
//     return res.json(data);
// }

function AllUsers() {
        Citizen.find({}, function (err, citizens) {

                const citizenMap = {};

                citizens.forEach(function (citizen) {

                        citizenMap[citizen._id] = citizen;
                });
                return citizenMap;
        });
}

// export const queryInfected = (req, res) => {
//     History.findOne(
//       { nic: req.params.nic },
//       req.body,
//       { new: true, useFindAndModify: false },
//       (err, Customer) => {
//         if (err) {
//           res.send(err);
//         }
//         res.json(Customer);
//       }
//     );
//   };

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUp = signUp;
exports.login = login;

var _httpStatus = __webpack_require__(24);

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _covTrackModel = __webpack_require__(0);

var _covTrackModel2 = _interopRequireDefault(_covTrackModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Auth */
async function signUp(req, res) {
  try {
    const user = await _covTrackModel2.default.create(req.body);
    return res.status(_httpStatus2.default.CREATED).json(user.toAuthJSON());
  } catch (e) {
    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);
  }
}

function login(req, res, next) {
  res.status(_httpStatus2.default.OK).json(req.user.toAuthJSON());

  return next();
}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("bcrypt-nodejs");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("bson");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("express-validation");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("http-status");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("joi");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("mongoose-unique-validator");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ })
/******/ ]);