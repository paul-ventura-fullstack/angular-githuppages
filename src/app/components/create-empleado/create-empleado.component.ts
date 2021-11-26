import { Component, OnInit } from '@angular/core';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, addDoc, Firestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5F7rF-2f_bmf-Xj8998_LTva-89sw_Qo",
  authDomain: "angular-githubpages.firebaseapp.com",
  projectId: "angular-githubpages",
  storageBucket: "angular-githubpages.appspot.com",
  messagingSenderId: "703739320868",
  appId: "1:703739320868:web:175aecdbcfa46ebc72d6b1",
  measurementId: "G-HYRC593F8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const colRef = collection(db, 'books');

@Component({
  selector: 'app-create-empleado',
  templateUrl: './create-empleado.component.html',
  styleUrls: ['./create-empleado.component.css']
})
export class CreateEmpleadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
        let addBookForm : any = {};
        addBookForm = document.querySelector('.add');
        if(addBookForm != null) {
                addBookForm.addEventListener('submit', (e: { preventDefault: () => void; }) => {
                        e.preventDefault()
                        
                        addDoc(colRef, {
                                title: addBookForm.title.value,
                                author: addBookForm.author.value,
                        })
                })

        }
  }

}
