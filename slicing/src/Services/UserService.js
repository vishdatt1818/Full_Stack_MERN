import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from "../firebase/firebaseConfig";
import UserModel from '../model/UserModel';


class UserService{
    async add(data){
            let user = new UserModel
            user.userName = data.userName
            user.email = data.email
            user.phoneNo = data.phoneNo
    
            
            const docref = await addDoc(collection(db, "user"), {...user} )
    
             return docref
}
}

export default new UserService;