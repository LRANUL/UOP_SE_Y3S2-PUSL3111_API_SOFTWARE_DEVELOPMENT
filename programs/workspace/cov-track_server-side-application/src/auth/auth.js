const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const UserModel = require('../models/covTrackModel');

passport.use(
  'customer-register',
  new localStrategy(
    {
      usernameField: 'emailAddress',
      passwordField: 'password'
    },
    async (emailAddress, password, done) => {
      try {
        const user = await UserModel.create({ emailAddress, password });

        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  'customer-login',
  new localStrategy(
    {
      usernameField: 'emailAddress',
      passwordField: 'password'
    },
    async (emailAddress, password, done) => {
      try {
        const user = await UserModel.findOne({ emailAddress });

        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        const validate = await user.isValidPassword(password);

        if (!validate) {
          return done(null, false, { message: 'Wrong Password' });
        }

        return done(null, user, { message: 'Logged in Successfully' });
      } catch (error) {
        return done(error);
      }
    }
  )
);

const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
  new JWTstrategy(
    {
      secretOrKey: 'TOP_SECRET',
      jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);
