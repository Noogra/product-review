const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB connected successfully")
  } catch (error) {
    console.error("MongoDB connection failed: ", error.message)
    procces.exit(1)
  }
}

module.exports = connectDB
