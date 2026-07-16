import { db, auth } from "../firebase/firebaseConfig";
import UserModel from "../model/UserModel";
import { doc, getDoc, setDoc } from "firebase/firestore"
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth"
import { toast } from "react-toastify";
import AuthService from "./AuthService";

const dbPath = "users"

class UserService {
    async register(data){

        const userRegister = await createUserWithEmailAndPassword(auth, data.email, data.password )

        let newUser = new UserModel

        newUser.name = data.name
        newUser.email = data.email
        
        newUser.phone = data.phone
        newUser.userType = 4
        newUser.id = userRegister.user.uid

        console.log(newUser);
        

        await setDoc(doc(db,dbPath,userRegister.user.uid), {...newUser})
        console.log( userRegister.user)
    }

    async login(data){
        const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);

        const docRef = doc(db, dbPath, userCredential.user.uid )
        const docSnap = await getDoc(docRef)
        const userData = docSnap.data()

        console.log(userCredential);
        

     if (docSnap.exists()) {
           let authData = {
                 id: userCredential.user.uid,
                name: userData.name,
                email: userData.email,
                token: userCredential.user.accessToken,
                userType: userData.userType
           }
           console.log(authData);
           
            await AuthService.setData(authData)
            return authData;
        } else {
            console.log("No such document!");
            return false
        }
    }

  
    
}

export default new UserService