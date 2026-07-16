require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")

console.log("JWT_SECRET loaded:", !!process.env.JWT_SECRET)

connectToDB()


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})