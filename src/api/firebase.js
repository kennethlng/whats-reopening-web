import firebase from 'firebase'; 
import { config } from '../config/firebase'; 

firebase.initializeApp(config); 
const db = firebase.firestore(); 

export { db };