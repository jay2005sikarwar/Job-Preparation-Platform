// // const userModel = require("../models/user.model")
// // const bcrypt = require("bcryptjs")
// // const jwt = require("jsonwebtoken")
// // const tokenBlacklistModel = require("../models/blacklist.model")

// // /**
// //  * @name registerUserController
// //  * @description register a new user, expects username, email and password in the request body
// //  * @access Public
// //  */
// // async function registerUserController(req, res) {

// //     const { username, email, password } = req.body

// //     if (!username || !email || !password) {
// //         return res.status(400).json({
// //             message: "Please provide username, email and password"
// //         })
// //     }

// //     const isUserAlreadyExists = await userModel.findOne({
// //         $or: [ { username }, { email } ]
// //     })

// //     if (isUserAlreadyExists) {
// //         return res.status(400).json({
// //             message: "Account already exists with this email address or username"
// //         })
// //     }

// //     const hash = await bcrypt.hash(password, 10)

// //     const user = await userModel.create({
// //         username,
// //         email,
// //         password: hash
// //     })

// //     const token = jwt.sign(
// //         { id: user._id, username: user.username },
// //         process.env.JWT_SECRET,
// //         { expiresIn: "1d" }
// //     )

// //     res.cookie("token", token)


// //     res.status(201).json({
// //         message: "User registered successfully",
// //         user: {
// //             id: user._id,
// //             username: user.username,
// //             email: user.email
// //         }
// //     })

// // }


// // /**
// //  * @name loginUserController
// //  * @description login a user, expects email and password in the request body
// //  * @access Public
// //  */
// // async function loginUserController(req, res) {

// //     const { email, password } = req.body

// //     const user = await userModel.findOne({ email })

// //     if (!user) {
// //         return res.status(400).json({
// //             message: "Invalid email or password"
// //         })
// //     }

// //     const isPasswordValid = await bcrypt.compare(password, user.password)

// //     if (!isPasswordValid) {
// //         return res.status(400).json({
// //             message: "Invalid email or password"
// //         })
// //     }

// //     const token = jwt.sign(
// //         { id: user._id, username: user.username },
// //         process.env.JWT_SECRET,
// //         { expiresIn: "1d" }
// //     )

// //     res.cookie("token", token)
// //     res.status(200).json({
// //         message: "User loggedIn successfully.",
// //         user: {
// //             id: user._id,
// //             username: user.username,
// //             email: user.email
// //         }
// //     })
// // }


// // /**
// //  * @name logoutUserController
// //  * @description clear token from user cookie and add the token in blacklist
// //  * @access public
// //  */
// // async function logoutUserController(req, res) {
// //     const token = req.cookies.token

// //     if (token) {
// //         await tokenBlacklistModel.create({ token })
// //     }

// //     res.clearCookie("token")

// //     res.status(200).json({
// //         message: "User logged out successfully"
// //     })
// // }

// // /**
// //  * @name getMeController
// //  * @description get the current logged in user details.
// //  * @access private
// //  */
// // async function getMeController(req, res) {

// //     const user = await userModel.findById(req.user.id)



// //     res.status(200).json({
// //         message: "User details fetched successfully",
// //         user: {
// //             id: user._id,
// //             username: user.username,
// //             email: user.email
// //         }
// //     })

// // }



// // module.exports = {
// //     registerUserController,
// //     loginUserController,
// //     logoutUserController,
// //     getMeController
// // }
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
const pdfParse = require("pdf-parse")
const { generateInterviewReport, generateResumePdf } = require("../services/ai.service")
const interviewReportModel = require("../models/interviewReport.model")

/**
 * @description Controller to generate interview report based on user self description, resume and job description.
 */
async function generateInterViewReportController(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Resume file is required." })
        }

        const resumeContent = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()
        const { selfDescription, jobDescription } = req.body

        if (!jobDescription) {
            return res.status(400).json({ message: "Job description is required." })
        }

        const interViewReportByAi = await generateInterviewReport({
            resume: resumeContent.text,
            selfDescription,
            jobDescription
        })

        const interviewReport = await interviewReportModel.create({
            user: req.user.id,
            resume: resumeContent.text,
            selfDescription,
            jobDescription,
            ...interViewReportByAi
        })

        res.status(201).json({
            message: "Interview report generated successfully.",
            interviewReport
        })
    } catch (err) {
        console.error("Generate Interview Report Error:", err)
        res.status(500).json({ message: "Failed to generate interview report." })
    }
}

/**
 * @description Controller to get interview report by interviewId.
 */
async function getInterviewReportByIdController(req, res) {
    try {
        const { interviewId } = req.params

        const interviewReport = await interviewReportModel.findOne({ _id: interviewId, user: req.user.id })

        if (!interviewReport) {
            return res.status(404).json({
                message: "Interview report not found."
            })
        }

        res.status(200).json({
            message: "Interview report fetched successfully.",
            interviewReport
        })
    } catch (err) {
        console.error("Get Interview Report By ID Error:", err)
        res.status(500).json({ message: "Server error fetching report." })
    }
}

/** 
 * @description Controller to get all interview reports of logged in user.
 */
async function getAllInterviewReportsController(req, res) {
    try {
        const interviewReports = await interviewReportModel
            .find({ user: req.user.id })
            .sort({ createdAt: -1 })
            .select("-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan")

        res.status(200).json({
            message: "Interview reports fetched successfully.",
            interviewReports
        })
    } catch (err) {
        console.error("Get All Interview Reports Error:", err)
        res.status(500).json({ message: "Server error fetching reports." })
    }
}

/**
 * @description Controller to generate resume PDF based on user self description, resume and job description.
 */
async function generateResumePdfController(req, res) {
    try {
        const { interviewReportId } = req.params

        const interviewReport = await interviewReportModel.findById(interviewReportId)

        if (!interviewReport) {
            return res.status(404).json({
                message: "Interview report not found."
            })
        }

        const { resume, jobDescription, selfDescription } = interviewReport

        const pdfBuffer = await generateResumePdf({ resume, jobDescription, selfDescription })

        res.set({
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename=resume_${interviewReportId}.pdf`
        })

        res.send(pdfBuffer)
    } catch (err) {
        console.error("Generate Resume PDF Error:", err)
        res.status(500).json({ message: "Failed to generate PDF." })
    }
}

module.exports = {
    generateInterViewReportController,
    getInterviewReportByIdController,
    getAllInterviewReportsController,
    generateResumePdfController
}