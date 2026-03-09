const express = require('express');
const router = express.Router();

const PendingAppointment = require('../models/PendingAppointment');

router.get('/count', async (req, res) => {
    try {

        const count = await PendingAppointment.countDocuments();

        console.log("Pending appointments count:", count);

        res.json({
            totalPendingAppointments: count
        });

    } catch (error) {

        console.error("Error counting pending appointments:", error);

        res.status(500).json({
            error: error.message
        });
    }
});

module.exports = router;