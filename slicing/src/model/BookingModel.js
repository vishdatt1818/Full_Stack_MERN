export default class BookingModel{
    customerId = ""
    serviceId = ""
    time = ""
    appointmentDate = ""
    totalAmount = ""
    notes = ""
    appointmentStatus = "Pending" // Pending/Confirmed/In Progress/Completed/Cancelled"
    status = true
    createAt = Date.now()
}