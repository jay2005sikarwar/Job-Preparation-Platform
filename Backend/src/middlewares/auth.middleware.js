// // const jwt = require("jsonwebtoken")
// // const tokenBlacklistModel = require("../models/blacklist.model")



// // async function authUser(req, res, next) {

// //     const token = req.cookies.token

// //     if (!token) {
// //         return res.status(401).json({
// //             message: "Token not provided."
// //         })
// //     }

// //     const isTokenBlacklisted = await tokenBlacklistModel.findOne({
// //         token
// //     })

// //     if (isTokenBlacklisted) {
// //         return res.status(401).json({
// //             message: "token is invalid"
// //         })
// //     }

// //     try {
// //         const decoded = jwt.verify(token, process.env.JWT_SECRET)

// //         req.user = decoded

// //         next()

// //     } catch (err) {

// //         return res.status(401).json({
// //             message: "Invalid token."
// //         })
// //     }

// // }


// // module.exports = { authUser }
// const userModel = require("../models/user.model")
// const bcrypt = require("bcryptjs")
// const jwt = require("jsonwebtoken")
// const tokenBlacklistModel = require("../models/blacklist.model")

// // Helper function for cookie options
// const getCookieOptions = () => {
//     const isProduction = process.env.NODE_ENV === "production";
//     return {
//         httpOnly: true,
//         secure: isProduction,                     // Required for HTTPS on Render
//         sameSite: isProduction ? "none" : "lax",  // Required for cross-site cookies
//         maxAge: 24 * 60 * 60 * 1000               // 1 day
//     };
// };

// /**
//  * @name registerUserController
//  */
// async function registerUserController(req, res) {
//     try {
//         const { username, email, password } = req.body

//         if (!username || !email || !password) {
//             return res.status(400).json({
//                 message: "Please provide username, email and password"
//             })
//         }

//         const isUserAlreadyExists = await userModel.findOne({
//             $or: [{ username }, { email }]
//         })

//         if (isUserAlreadyExists) {
//             return res.status(400).json({
//                 message: "Account already exists with this email address or username"
//             })
//         }

//         const hash = await bcrypt.hash(password, 10)

//         const user = await userModel.create({
//             username,
//             email,
//             password: hash
//         })

//         const token = jwt.sign(
//             { id: user._id, username: user.username },
//             process.env.JWT_SECRET,
//             { expiresIn: "1d" }
//         )

//         res.cookie("token", token, getCookieOptions())

//         res.status(201).json({
//             message: "User registered successfully",
//             user: {
//                 id: user._id,
//                 username: user.username,
//                 email: user.email
//             }
//         })
//     } catch (err) {
//         console.error("Register Controller Error:", err)
//         res.status(500).json({ message: "Internal server error" })
//     }
// }

// /**
//  * @name loginUserController
//  */
// async function loginUserController(req, res) {
//     try {
//         const { email, password } = req.body

//         if (!email || !password) {
//             return res.status(400).json({ message: "Please provide email and password" })
//         }

//         const user = await userModel.findOne({ email })

//         if (!user) {
//             return res.status(400).json({ message: "Invalid email or password" })
//         }

//         const isPasswordValid = await bcrypt.compare(password, user.password)

//         if (!isPasswordValid) {
//             return res.status(400).json({ message: "Invalid email or password" })
//         }

//         const token = jwt.sign(
//             { id: user._id, username: user.username },
//             process.env.JWT_SECRET,
//             { expiresIn: "1d" }
//         )

//         res.cookie("token", token, getCookieOptions())

//         res.status(200).json({
//             message: "User logged in successfully.",
//             user: {
//                 id: user._id,
//                 username: user.username,
//                 email: user.email
//             }
//         })
//     } catch (err) {
//         console.error("Login Controller Error:", err)
//         res.status(500).json({ message: "Internal server error" })
//     }
// }

// /**
//  * @name logoutUserController
//  */
// async function logoutUserController(req, res) {
//     try {
//         const token = req.cookies.token

//         if (token) {
//             await tokenBlacklistModel.create({ token })
//         }

//         // Clear cookie with exact matching options
//         res.clearCookie("token", getCookieOptions())

//         res.status(200).json({
//             message: "User logged out successfully"
//         })
//     } catch (err) {
//         console.error("Logout Controller Error:", err)
//         res.status(500).json({ message: "Internal server error" })
//     }
// }

// /**
//  * @name getMeController
//  */
// async function getMeController(req, res) {
//     try {
//         const user = await userModel.findById(req.user.id)

//         if (!user) {
//             return res.status(404).json({ message: "User not found" })
//         }

//         res.status(200).json({
//             message: "User details fetched successfully",
//             user: {
//                 id: user._id,
//                 username: user.username,
//                 email: user.email
//             }
//         })
//     } catch (err) {
//         console.error("GetMe Controller Error:", err)
//         res.status(500).json({ message: "Internal server error" })
//     }
// }

// module.exports = {
//     registerUserController,
//     loginUserController,
//     logoutUserController,
//     getMeController
// }
const jwt = require("jsonwebtoken")
const tokenBlacklistModel = require("../models/blacklist.model")

async function authUser(req, res, next) {
    try {
        const token = req.cookies.token

        if (!token) {
            return res.status(401).json({
                message: "Token not provided."
            })
        }

        const isTokenBlacklisted = await tokenBlacklistModel.findOne({ token })

        if (isTokenBlacklisted) {
            return res.status(401).json({
                message: "Token is invalid or logged out."
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()

    } catch (err) {
        return res.status(401).json({
            message: "Invalid or expired token."
        })
    }
}

module.exports = { authUser }