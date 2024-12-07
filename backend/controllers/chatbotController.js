const express = require("express");
const router = express.Router();

// Simulating some simple hospital-related queries
const hospitalInfo = {
  visitingHours: "9 AM to 5 PM, Monday to Friday",
  departments: {
    cardiology: "Second floor",
    pediatrics: "Third floor",
    neurology: "First floor"
  },
  doctors: {
    "Dr. Smith": { specialty: "Cardiologist", availableTimes: "10 AM - 4 PM" },
    "Dr. Johnson": { specialty: "Pediatrician", availableTimes: "9 AM - 1 PM" }
  },
};

// Command Handlers
const handleBookAppointment = (doctorName) => {
  if (hospitalInfo.doctors[doctorName]) {
    return `Booking an appointment with ${doctorName}... Please provide a date and time.`;
  } else {
    return "Sorry, I couldn't find that doctor.";
  }
};

const handleViewAppointments = () => {
  return "Here are your upcoming appointments: [Appointment 1, Appointment 2, etc.]";
};

const handleDoctorInfo = (doctorName) => {
  const doctor = hospitalInfo.doctors[doctorName];
  if (doctor) {
    return `${doctorName} is a ${doctor.specialty}. Available from ${doctor.availableTimes}.`;
  }
  return "Sorry, I couldn't find information on that doctor.";
};

const handleGeneralQuery = (query) => {
  if (query.includes("visiting hours")) {
    return hospitalInfo.visitingHours;
  }
  if (query.includes("department")) {
    const department = query.split(" ")[1];
    return hospitalInfo.departments[department]
      ? `The ${department} department is located on the ${hospitalInfo.departments[department]}.`
      : "Sorry, I couldn't find that department.";
  }
  return "I couldn't understand your request. Please try again.";
};

// Define the chatbot route
router.post("/", (req, res) => {
  const { message } = req.body;

  // Handle the message based on command
  let response = "";

  if (message.toLowerCase().includes("book appointment")) {
    const doctorName = message.split("with")[1]?.trim();  
    response = handleBookAppointment(doctorName);
  } else if (message.toLowerCase().includes("view my appointments")) {
    response = handleViewAppointments();
  } else if (message.toLowerCase().includes("doctor")) {
    const doctorName = message.split("about")[1]?.trim(); 
    response = handleDoctorInfo(doctorName);
  } else {
    response = handleGeneralQuery(message);
  }

  res.json({ response });
});

module.exports = router;
