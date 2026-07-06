import Barber from "../model/BarberModel";

// import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
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
            // console.log(doc.id, " => ", doc.data());
        });
        // console.log(barbers);
        
        return barbers
    }
    async deleteBar(id){
        const docref = doc(db,"barber", id)
        await deleteDoc(docref)
    }
}

export default new BarberServices;