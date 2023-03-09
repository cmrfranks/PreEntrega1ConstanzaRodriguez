
import { initializeApp } from "firebase/app";
import { getDoc, getFirestore, collection, getDocs } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB1tAOsEXXFXckzhzzthvcoQa2ad7mFqQU",
  authDomain: "arashimangastore-react.firebaseapp.com",
  projectId: "arashimangastore-react",
  storageBucket: "arashimangastore-react.appspot.com",
  messagingSenderId: "539060037054",
  appId: "1:539060037054:web:82dfa3bc0d3d070b4e05ef"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
  
  
export async function getSingleItem(id, doc){
  const docRef = doc(db, "productos", id)
  const snapshot = await getDoc(docRef);

  const docData = snapshot.data();
  docData.id = snapshot.id;
  return docData;
}

export async function getItems(){
  const productsCollection = collection (db, "productos")
  const querySnapshot = await getDocs(productsCollection);
  console.log(querySnapshot.docs);
}
