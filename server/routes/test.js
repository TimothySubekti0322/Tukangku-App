const express = require("express");
const router = express.Router();

const firebaseAdmin = require("../fire");
const db = firebaseAdmin.firestore();

router.get("/", async (req, res) => {
  try {
    await db
      .collection("users")
      .doc("timothy@gmail.com")
      .collection("animal")
      .add({
        name: "Test Booking",
      });

    return res.json({ message: "success" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
