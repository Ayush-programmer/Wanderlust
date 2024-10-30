const User = require('../models/user.js');

module.exports.renderSignUpForm = (req, res) => {
    res.render('users/signup.ejs');
}

module.exports.signUp = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash('success', "Welcome to Wanderlust");
            res.redirect('/listings');
        });
    } catch (err) {
        req.flash('error', err.message);
        res.redirect('/signUp');
    }
}

module.exports.renderLoginForm = (req, res) => {
    res.render('users/login.ejs');
}

module.exports.logIn = async (req, res) => {
    req.flash("success", "Welcome back to Wanderlust");
    if (res.locals.redirectUrl) {
        res.redirect(res.locals.redirectUrl);
    } else {
        res.redirect('/listings');
    }
}

module.exports.logOut = (req, res, next) => {
    req.logOut((err) => {
        if (err) {
            next();
        }
        req.flash('success', "You're logged out of the platform now");
        res.redirect('/listings');
    });
}