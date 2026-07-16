import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from "../firebase/firebaseConfig";


import BookingModel from '../model/BookingModel';

class BookingService{
     async add(data){
        let category = new BookingModel
        category.customerId = data.customerId
        category.serviceId = data.serviceId
        category.appointmentDate = data.appointmentDate
        category.totalAmount = data.totalAmount
        category.notes = data.notes
       

        
        const docref = await addDoc(collection(db, "category"), {...category} )

         return docref
    }


    
     async all() {
        const querySnapshot = await getDocs(collection(db, "category"));
        let category = []
        querySnapshot.forEach((doc) => {
            category.push({ id: doc.id, ...doc.data() })
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
        });
        console.log(category);
        
        return category
    }

      async deleteCat(id){
        const docref = doc(db,"category", id)
        await deleteDoc(docref)
    }

     async single(id) {
        const docRef = doc(db, "category", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data());
            return { id: docSnap.id, ...docSnap.data() }
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
            return false;
        }
    }

    async update(payload, id) {
        const categoryRef = doc(db, "category", id);
        return await updateDoc(categoryRef, payload);
    }
}

export default new BookingService;