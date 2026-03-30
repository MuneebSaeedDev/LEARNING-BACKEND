import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        // basic validation
        if (!username || !password || !email) {
            return res.status(400).json({ message: "All fields important" });
        }

        // check if user already exists
        const existingUser = await User.findOne({ email: email.toLowerCase() });

        if (existingUser) {
            return res.status(400).json({ message: "User Already Exists" });
        }

        // create new user
        const user = await User.create({
            username,
            password,
            email: email.toLowerCase()
        });

        return res.status(201).json({
            message: "User Registered",
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // check if user already exist
        const user = await User.findOne({
            email: email.toLowerCase()
        })

        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }

        // compare password
        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid Credentials"
            });
        }

        return res.status(200).json({
            message: "User Logined",
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};

const logoutUser = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({
        email
    });

    if(!user) {
        res.status(400).json({
            message: "User not found"
        })
    }

    res.status(200).json({
        message: "User Logout"
    })
}

export {
    registerUser,
    loginUser,
    logoutUser
};