const express = require("express");
const router = express.Router();

const firebaseAdmin = require("../fire");
const firebase = require("firebase-admin");
const verifyToken = require("../middleware/authMiddleware");
const db = firebaseAdmin.firestore();

router.post("/:roomId", verifyToken, async (req, res) => {
  try {
    const { roomId } = req.params;
    const { message, sender } = req.body;

    const roomRef = db.collection("roomChats").doc(roomId);

    const roomSnapshot = await roomRef.get();

    if (!roomSnapshot.exists) {
      return res
        .status(200)
        .json({ message: "Room not found", data: [], status: 404 });
    }

    await roomRef.collection("chats").add({
      message: message,
      sender: sender,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    return res.status(201).json({ message: "success", status: 201 });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", status: "500" });
  }
});

module.exports = router;
