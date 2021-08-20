import passport from "passport";
import LocalStrategy from ("passport-local").Strategy;
import User from '../models/User.js';

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallBack: true
}, async (req, email, password, done) => {
    const user = new User();
    user.email = email;
    user.password = password;
    await user.save();
    done(null, user);
}));