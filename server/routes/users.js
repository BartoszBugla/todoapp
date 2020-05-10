const router = require("express").Router();
// const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");
const auth = require("../middleware/auth");
let User = require("../models/user.model");

//?    @route   POST*cause bugged* users/
//?    @desc    Load user
//?    @access  Private

router.post("/", auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if (!user) throw Error("User Does not exist");
        res.json(user);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
});

//?     @route   POST users/register
//?     @desc    Login user
//?     @access  Public

router.post("/register", async (req, res) => {
    try {
        const { name, lastName, email, password } = req.body;
        if (!name || !lastName || !email || !password) throw Error("missing credentials");

        const user = await User.findOne({ email });
        if (user) throw Error("Account with that email exist");

        const salt = await bcrypt.genSalt(10);
        if (!salt) throw Error("can not make salt");

        const hash = await bcrypt.hash(password, salt);
        if (!hash) throw Error("cannot get hash");

        const newUser = new User({ name, lastName, password: hash, email });

        const savedUser = await newUser.save();
        if (!savedUser) throw Error("Something went wrong saving the user");

        const token = jwt.sign({ id: savedUser._id }, config.get("jwtsecret"), { expiresIn: 3600 });
        res.status(200).json({
            token,
            user: {
                id: savedUser.id,
                name: savedUser.name,
                lastName: savedUser.lastName,
                email: savedUser.email,
            },
        });
    } catch (e) {
        res.status(400).json({ msg: e.message, status: "400" });
    }
});

//?     @route   POST users/login
//?     @desc    Login user
//?     @access  Public

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) throw Error("fill all crendetials");
        const user = await User.findOne({ email });
        if (!user) throw Error("User does not exist");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw Error("Password does not match the user");

        const token = jwt.sign({ id: user.id }, config.get("jwtsecret"), { expiresIn: 3600 });
        if (!token) throw Error("could not sign the token");

        res.status(200).json({
            token,
            user: {
                id: user._id,
                name: user.name,
                lastName: user.lastName,
                email: user.email,
            },
        });
    } catch (e) {
        res.status(400).json({ msg: e.message, status: "400" });
    }
});

module.exports = router;
