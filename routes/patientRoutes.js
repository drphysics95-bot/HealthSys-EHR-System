const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

router.get('/count', async (req, res) => {
    try {
        const count = await Patient.countDocuments();
        res.json({ totalPatients: count });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;