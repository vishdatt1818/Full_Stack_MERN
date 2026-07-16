export default class BookingModel{
    customerId = ""
    serviceId = ""
   
    appointmentDate = ""
    totalAmount = ""
    notes = ""
    appointmentStatus = "Pending/Confirmed/In Progress/Completed/Cancelled"
    status = true
    createAt = Date.now()
}