const express = require("express");
const router = express.Router();

const firebaseAdmin = require("../fire");
const verifyToken = require("../middleware/authMiddleware");
const db = firebaseAdmin.firestore();

router.post("/add", verifyToken, async (req, res) => {
  try {
    const {
      applianceServices,
      service,
      category,
      worker,
      date,
      workingHours,
      startTime,
      promoCode,
      promo,
      fullAddress,
      province,
      city,
      subDistrict,
      postCode,
      note,
      paymentMethod,
      price,
      status,
    } = req.body;

    if (
      !applianceServices ||
      !service ||
      !category ||
      !worker ||
      !date ||
      !workingHours ||
      !startTime ||
      !fullAddress ||
      !province ||
      !city ||
      !subDistrict ||
      !postCode ||
      !paymentMethod ||
      !price ||
      !status
    ) {
      return res
        .status(200)
        .json({ message: "All fields are required", status: 400 });
    }

    const userMail = req.email;

    await db.collection("users").doc(userMail).collection("bookings").add({
      applianceServices,
      service,
      category,
      worker,
      date,
      workingHours,
      startTime,
      promoCode,
      promo,
      fullAddress,
      province,
      city,
      subDistrict,
      postCode,
      note,
      paymentMethod,
      price,
      status,
    });

    return res.status(201).json({ message: "success", status: 201 });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
});

router.get("/history", verifyToken, async (req, res) => {
  try {
    const userMail = req.email;

    const snapshot = await db
      .collection("users")
      .doc(userMail)
      .collection("bookings")
      .get();

    const upcomingBookings = [];
    const completedBookings = [];
    const cancelledBookings = [];
    snapshot.forEach((doc) => {
      const history = {
        id: doc.id,
        service: doc.data().service,
        worker: doc.data().worker,
        status: doc.data().status,
        date: doc.data().date,
        startTime: doc.data().startTime,
        workingHours: doc.data().workingHours,
        fullAddress: doc.data().fullAddress,
      };
      if (doc.data().status === "Upcoming") {
        upcomingBookings.push(history);
      } else if (doc.data().status === "Completed") {
        completedBookings.push(history);
      } else if (doc.data().status === "Cancelled") {
        cancelledBookings.push(history);
      }
    });

    res.status(200).json({
      message: "success",
      data: {
        upcoming: upcomingBookings,
        completed: completedBookings,
        cancelled: cancelledBookings,
      },
      status: 200,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
});

router.post("/cancel/:bookingId", verifyToken, async (req, res) => {
  try {
    const userMail = req.email;
    const { bookingId } = req.params;

    const bookingRef = db
      .collection("users")
      .doc(userMail)
      .collection("bookings")
      .doc(bookingId);

    const bookingSnapshot = await bookingRef.get();

    if (!bookingSnapshot.exists) {
      return res
        .status(200)
        .json({ message: "Booking not found", status: 404 });
    }

    await bookingRef.update({ status: "Cancelled" });

    const bookingData = bookingSnapshot.data();

    const newData = {
      id: bookingSnapshot.id,
      service: bookingData.service,
      worker: bookingData.worker,
      status: bookingData.status,
      date: bookingData.date,
      startTime: bookingData.startTime,
      workingHours: bookingData.workingHours,
      fullAddress: bookingData.fullAddress,
    };

    return res
      .status(200)
      .json({ message: "success", status: 200, data: newData });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
});

router.post("/complete/:bookingId", verifyToken, async (req, res) => {
  try {
    const userMail = req.email;
    const { bookingId } = req.params;

    const bookingRef = db
      .collection("users")
      .doc(userMail)
      .collection("bookings")
      .doc(bookingId);

    const bookingSnapshot = await bookingRef.get();

    if (!bookingSnapshot.exists) {
      return res
        .status(200)
        .json({ message: "Booking not found", status: 404 });
    }

    await bookingRef.update({ status: "Completed" });

    const bookingData = bookingSnapshot.data();

    const newData = {
      id: bookingSnapshot.id,
      service: bookingData.service,
      worker: bookingData.worker,
      status: bookingData.status,
      date: bookingData.date,
      startTime: bookingData.startTime,
      workingHours: bookingData.workingHours,
      fullAddress: bookingData.fullAddress,
    };

    return res
      .status(200)
      .json({ message: "success", status: 200, data: newData });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
});

module.exports = router;
