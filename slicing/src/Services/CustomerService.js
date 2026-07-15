import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from "../firebase/firebaseConfig";
import CustomerModel from '../model/CustomerModel';


class CustomerService{
    async add(data){
            let user = new UserModel
            user.userName = data.userName
            user.email = data.email
            user.phoneNo = data.phoneNo
    
            
            const docref = await addDoc(collection(db, "user"), {...user} )
    
             return docref
}

 async all() {
        const querySnapshot = await getDocs(collection(db, "user"));
        let users = []
        querySnapshot.forEach((doc) => {
            users.push({ id: doc.id, ...doc.data() })
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
        });
        console.log(users);
        
        return users
    }

    async deleteu(id){
        const docref = doc(db,"user",id)
        await deleteDoc(docref)

    }

    async Single(id){
        const docRef = doc(db, "user" , id)
        const docSnap = await getDoc( docRef)

        if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data());
            return { id: docSnap.id, ...docSnap.data() }
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
            return false;
        }
        
    }

    async update(payload, id){
        const categoryRef = doc(db, "user", id)
        return await updateDoc(categoryRef, payload)
    }
}

export default new CustomerService;