import { db, auth } from "../firebase/firebaseConfig";
import UserModel from "../model/UserModel";
import { doc, getDoc, setDoc } from "firebase/firestore"
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth"
import { toast } from "react-toastify";

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
     return userCredential
    }

      async single(id) {
        const docRef = doc(db, dbPath, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() }
        } else {
            console.log("No such document!");
            return false
        }
    }
}

export default new UserService