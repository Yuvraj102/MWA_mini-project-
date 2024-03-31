
import {setDoc,query, collection,where, updateDoc, getDocs, addDoc, deleteDoc, doc} from 'firebase/firestore'
import { db } from '../firebase.js'

export async function registerUser(user){
    try {
        
        
        return await setDoc(doc(db, "users", user.email), user, { merge: true });
      } catch (err) {
        return new Error("not able to add user to firestore: ", err);
      }
}

export async function addEntity(collectionName, data){
    return addDoc(collection(db,collectionName),data)

}

export async function getAllEntities(collectionName){
    
    const snapshots = await getDocs(query(collection(db,collectionName)));
    
    const documents = []
    snapshots.forEach(snapshot => {
        const data = { id: snapshot.id , ...snapshot.data()}
        documents.push(data)
    });
    return documents
}
// updateCriteria = {key == value}, data is {} data to be updated
export async function updateEntity(collectionName, data, updateCriteria){
    const key = Object.keys(updateCriteria)[0]
    const value = updateCriteria[key]
    const q = query(collection(db, collectionName), where(key, "==", value));
    const querySnapshot = await getDocs(q);
     querySnapshot.docs.map(async (doc) => {
      
        await updateDoc(doc.ref,data)    
    });
}

export async function deleteEntity(collectionName, deleteCriteria){
    const key = Object.keys(deleteCriteria)[0]
    const value = deleteCriteria[key]
    const q = query(collection(db, collectionName), where(key, "==", value));
    const querySnapshot = await getDocs(q);
     querySnapshot.docs.map(async (doc) => {
      
        await deleteDoc(doc.ref)
    });
}

