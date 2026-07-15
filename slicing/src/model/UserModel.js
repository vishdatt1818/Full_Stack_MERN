export default class UserModel {
    id = ""
    name = ""
    email = ""
    phone = ""
    address = ""
    userType = 4 // 1 - ADMIN, 2 - HOD, 3 - TEACHER, 4 - STUDENT
    imageUrl = ""
    createdAt = Date.now()
    status = true;
}