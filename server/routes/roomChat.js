const express = require("express");
const router = express.Router();

const firebaseAdmin = require("../fire");
const verifyToken = require("../middleware/authMiddleware");
const db = firebaseAdmin.firestore();

router.get("/getId/:worker", verifyToken, async (req, res) => {
  try {
    const { worker } = req.params;

    const userMail = req.email;

    const roomRef = db.collection("roomChats");
    const roomSnapshot = await roomRef
      .where("worker", "==", worker)
      .where("user", "==", userMail)
      .get();

    // If Room not found then create the new room
    if (roomSnapshot.empty) {
      const newRoom = {
        user: userMail,
        worker: worker,
      };
      const newRoomRef = await roomRef.add(newRoom);

      // Get the newly created room id
      const newRoomId = newRoomRef.id;
      return res
        .status(200)
        .json({ message: "success", status: 200, data: newRoomId });
    }

    return res.status(200).json({
      message: "success",
      status: 200,
      data: roomSnapshot.docs[0].id,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", status: 500 });
  }
});

router.get("/:roomId", verifyToken, async (req, res) => {
  try {
    const { roomId } = req.params;

    const userMail = req.email;

    const roomRef = db.collection("roomChats");
    const roomSnapshot = await roomRef.doc(roomId).get();

    if (roomSnapshot.empty) {
      return res
        .status(200)
        .json({ message: "Room not found", status: 404, data: [] });
    }

    const chat = [];

    const chatCollectionRef = await roomRef
      .doc(roomId)
      .collection("chats")
      .get();

    if (chatCollectionRef.empty) {
      return res.status(200).json({
        message: "success",
        status: 200,
        data: { worker: roomSnapshot.data().worker, chats: [] },
      });
    }
    const chatSnapshot = await roomRef
      .doc(roomId)
      .collection("chats")
      .orderBy("timestamp", "asc")
      .get();

    chatSnapshot.forEach((doc) => {
      chat.push(doc.data());
    });

    return res.status(200).json({
      message: "success",
      status: 200,
      data: {
        worker: roomSnapshot.data().worker,
        chats: chat,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", status: 500 });
  }
});

router.get("/", verifyToken, async (req, res) => {
  try {
    const userMail = req.email;
    const roomRef = db.collection("roomChats");
    const roomSnapshot = await roomRef.where("user", "==", userMail).get();
    if (roomSnapshot.empty) {
      return res
        .status(200)
        .json({ message: "Room not found", status: 404, data: [] });
    }
    const rooms = [];
    for (const doc of roomSnapshot.docs) {
      const lastMessage = await roomRef
        .doc(doc.id)
        .collection("chats")
        .orderBy("timestamp", "desc")
        .limit(1)
        .get();
      const roomData = {
        id: doc.id,
        worker: doc.data().worker,
        lastMessage: lastMessage.docs[0].data().message,
      };
      rooms.push(roomData);
    }

    return res.status(200).json({
      message: "success",
      status: 200,
      data: rooms,
    });
  } catch (error) {}
});

module.exports = router;
