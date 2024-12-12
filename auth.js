const passport = require('passport');
const localStrategy=require('passport-local').Strategy;
const Person=require('./models/Person');

passport.use(new localStrategy(async (username, password, done) => {
    try {
        const user = await Person.findOne({username});
        if (!user) {
            return done(null, false, { message: "Incorrect Username" });
        }
        const isPasswordMatch = await user.comparePassword(password);
        if (isPasswordMatch) {
            return done(null, user);
        } else {
            return done(null, false, { message: "Password is incorrect" });
        }
    } catch (err) {
        return done(err);
    }
}));


  
 module.exports = passport; 