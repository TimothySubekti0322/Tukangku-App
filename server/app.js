const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Import routes
const testRoutes = require("./routes/test");
const authRoutes = require("./routes/auth");
const bookingRoutes = require("./routes/booking");
const roomChatRoutes = require("./routes/roomChat");
const chatRoutes = require("./routes/chat");
const serviceRoutes = require("./routes/service");

// Use routes
app.use("/test", testRoutes);
app.use("/auth", authRoutes);
app.use("/booking", bookingRoutes);
app.use("/roomChat", roomChatRoutes);
app.use("/chat", chatRoutes);
app.use("/service", serviceRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Event Management API" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
