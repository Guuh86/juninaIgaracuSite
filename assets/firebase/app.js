import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDEgYGNvLGYO2spQUXHIlyZEjRPp-HZVcQ",
    authDomain: "portaljuninaigaracu.firebaseapp.com",
    databaseURL: "https://portaljuninaigaracu-default-rtdb.firebaseio.com",
    projectId: "portaljuninaigaracu",
    storageBucket: "portaljuninaigaracu.appspot.com",
    messagingSenderId: "91566516825",
    appId: "1:91566516825:web:101ff5cd3b06fd9611df48",
    measurementId: "G-4BFSFN3WWM"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const saveData = (nome, email, phone, address) => {
    try {
        const doc = addDoc(collection(db, "users"), {
          name: nome,
          email: email,
          phone: phone,
          address: address
        });
      } catch (e) {
        console.error("Erro ao enviar formulário: ", e);
      }
}

export const saveFocusNotice = (title, desc, image, link) => {
  try {
    const doc = addDoc(collection(db, "newsFocus"), {
      title: title,
      desc: desc,
      image: image,
      link: link
    })
  } catch(error){
    console.error("Erro ao adicionar notícia" ,error);
  }
}

export const saveNormalNotice = (title, desc, image, link) => {
  try {
    addDoc(collection(db, "news"), {
      title: title,
      desc: desc,
      image: image,
      link: link
    })
  } catch(error){
    console.error("Erro ao adicionar notícia" ,error);
  }
}

export const loadData = (callback) => {
    onSnapshot(collection(db, 'users'), callback);
}

export const loadFocusNotice = (callback) => {
  onSnapshot(collection(db, 'newsFocus'), callback);
}

export const loadNormalNotice = (callback) => {
  onSnapshot(collection(db, 'news'), callback);
}

