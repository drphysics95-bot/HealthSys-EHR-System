const mongoose = require('mongoose');

const pendingAppointmentSchema = new mongoose.Schema(
{
    AppointmentID: String,
    patientName: String,
    appointmentDate: Date,
    reason: String
},
{
    collection: "pendingAppointments"
});

module.exports = mongoose.model(
    'PendingAppointment',
    pendingAppointmentSchema
);