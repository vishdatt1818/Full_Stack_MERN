import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from "../firebase/firebaseConfig";


import BarberService from '../model/ServiceModel';

class ServiceOfBarber{
     async add(data){
        let service = new BarberService
        service.serviceName = data.serviceName
        service.price = data.price
        service.duration = data.duration
        service.image = data.image

        
        const docref = await addDoc(collection(db, "service"), {...service} )

         return docref
    }


    
     async all() {
        const querySnapshot = await getDocs(collection(db, "service"));
        let service = []
        querySnapshot.forEach((doc) => {
            service.push({ id: doc.id, ...doc.data() })
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
        });
        console.log(service);
        
        return service
    }

      async deleteSer(id){
        const docref = doc(db,"service", id)
        await deleteDoc(docref)
    }

     async single(id) {
        const docRef = doc(db, "service", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            return { id: docSnap.id, ...docSnap.data() }
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
            return false;
        }
    }

    async update(payload, id) {
        const categoryRef = doc(db, "service", id);
        return await updateDoc(categoryRef, payload);
    }
}

export default new ServiceOfBarber;