import Barber from "../model/CategoryModel";

import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

class BarberServices{
    async add(data){

        let barber = new Barber
        barber.name = data.name
        barber.specialty = data.specialty

        const docref = await addDoc(collection(db, "barber"), {...barber} )

        return docref

    }

     async all() {
        const querySnapshot = await getDocs(collection(db, "barber"));
        let barbers = []
        querySnapshot.forEach((doc) => {
            barbers.push({ id: doc.id, ...doc.data() })
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
        console.log(barbers);
        
        return barbers
    }
}


 


export default new BarberServices;