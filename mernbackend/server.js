const express = require("express");
const bodyParser = require("body-parser");
const corsMiddleware = require("./middlewares/cors");
const errorHandlerMiddleware = require("./middlewares/errorHandler");
const connectToDatabase = require("./db/mongoose");
const authController = require("./controllers/authController");
const userController = require("./controllers/userController");
const doctorController = require("./controllers/doctorController");
const nurseController = require("./controllers/nurseController");
const appointmentController = require("./controllers/appointmentController");
const adminController = require("./controllers/adminController");
const chatbotController = require("./controllers/chatbotController"); // Import chatbot controller
const limiter = require("./middlewares/rateLimiter");
const router = express.Router();
const app = express();

// Middleware to parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(corsMiddleware);

// Routes for different controllers
app.use("/auth", limiter, authController);
app.use("/user", limiter, userController);
app.use("/doctor", limiter, doctorController);
app.use("/nurse", limiter, nurseController);
app.use("/appointment", limiter, appointmentController);
app.use("/admin", limiter, adminController);
app.use("")
// Add chatbot route here
app.use("/chatbot", limiter, chatbotController); // Add the chatbot controller route

// Error handler middleware
app.use(errorHandlerMiddleware);

(async () => {
  try {
    // Connect to the database
    await connectToDatabase();

    // Define server port and start the server
    const port = process.env.PORT || 4451;
    const server = app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error.message);
  }
})();
