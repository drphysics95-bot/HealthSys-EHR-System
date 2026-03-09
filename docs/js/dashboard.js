console.log('Dashboard JS loaded');

async function loadPatientCount() {

    try {
        const response = await fetch('/api/patients/count');
        const data = await response.json();

        document.getElementById('patientCount').textContent =
            data.totalPatients;

    } catch (error) {
        console.error("Error loading patient count:", error);
    }

}

loadPatientCount();

async function loadPendingAppointmentsCount() {
    try {
        const response = await fetch('/api/pendingappointments/count');
        const data = await response.json();
        console.log('Pending appointments data:', data);
        console.log('Element found:', !!document.getElementById('pendingAppointmentsCount'));
        console.log('Element HTML:', document.getElementById('pendingAppointmentsCount').outerHTML);
        document.getElementById('pendingAppointmentsCount').textContent =
            data.totalPendingAppointments;
        console.log('Set to:', document.getElementById('pendingAppointmentsCount').textContent);
    } catch (error) {
        console.error("Error loading pending appointments count:", error);
    }
}

loadPendingAppointmentsCount();