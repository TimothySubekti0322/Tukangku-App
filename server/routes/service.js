const express = require("express");
const router = express.Router();

const firebaseAdmin = require("../fire");
const verifyToken = require("../middleware/authMiddleware");
const db = firebaseAdmin.firestore();

router.get("/", verifyToken, async (req, res) => {
  try {
    const serviceSnapshot = await db.collection("services").get();

    if (serviceSnapshot.empty) {
      return res
        .status(200)
        .json({ message: "Service not found", status: 404, data: [] });
    }

    const services = [];

    serviceSnapshot.forEach((doc) => {
      services.push({ id: doc.id, ...doc.data() });
    });

    return res
      .status(200)
      .json({ message: "success", status: 200, data: services });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", status: 500 });
  }
});

router.get("/search", verifyToken, async (req, res) => {
  try {
    const { service } = req.query;

    if (!service) {
      return res
        .status(400)
        .json({ message: "Query parameter is required", status: 400 });
    }

    const serviceSnapshot = await db.collection("services").get();

    if (serviceSnapshot.empty) {
      return res
        .status(200)
        .json({ message: "Service not found", status: 404, data: [] });
    }

    const services = [];

    serviceSnapshot.forEach((doc) => {
      const serviceData = doc.data();
      const id = doc.id;
      if (serviceData.service.toLowerCase().includes(service.toLowerCase())) {
        services.push({ id, ...serviceData });
      }
    });

    return res
      .status(200)
      .json({ message: "success", status: 200, data: services });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", status: 500 });
  }
});

router.post("/", async (req, res) => {
  try {
    const { service, worker, price, rating, review } = req.body;

    await db.collection("services").add({
      service,
      worker,
      price,
      rating,
      review,
    });

    return res.status(201).json({ message: "success", status: 201 });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", status: 500 });
  }
});

module.exports = router;
