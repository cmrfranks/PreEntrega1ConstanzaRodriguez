
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


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

function getItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dataBaseItems);
      }, 1000);
    });
  }
  export default getItems;
  
  
  export function getSingleItem(itemid) {
  
    let itemReq = dataBaseItems.find(item => {
      console.log(item, itemid)
      return item.id === parseInt(itemid)
    });
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (itemReq !== undefined)
         resolve(itemReq);
        else 
         reject ("Item no encontrado en la base de datos")
      }, 200);
    });
  }
  
   
  export function getItemsByCategory(categoryid){
    
    let itemsCat = dataBaseItems.filter( (item) =>
    item.genre === categoryid
    )
    return new Promise((resolve, reject) => {
      setTimeout(() => {
      resolve(itemsCat);
    }, 200);
    });
  }
  
