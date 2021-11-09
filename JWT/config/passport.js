const fs = require("fs");
const path = require("path");
const User = require("mongoose").model("User");

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const pathToKey = path.join(__dirname, "..", "id_rsa_pub.pem");
const PUB_KEY = fs.readFileSync(pathToKey, "utf8");

// TODO

// Authorization: Bearer <token>

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ["RS256"],
};

const strategy = new JwtStrategy(options, (jwt_payload, done) => {
  User.findOne({ _id: jwt_payload.sub })
    .then((user) => {
      //we already know that the jwt token is valid,just have to check for user in database
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    })
    .catch((err) => done(err, null));
});

//! this function will be called, when we call passport.authenticate()
module.exports = (passport) => {
  passport.use(strategy);
};
