const express = require('express');
const mongoose = require('mongoose');
const patientRoutes = require('./routes/patientRoutes');

const app = express();

app.use(express.json());
app.use(express.static('docs'));

mongoose.connect('mongodb://127.0.0.1:27017/healthsys')
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.use('/api/patients', patientRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});