import firebase from 'firebase'; 
import * as DB from '../../constants/database'; 

const firebaseConfig = {
    apiKey: "AIzaSyCGNMrxkBiJo-cja1XOWJJV_JmpWMFd4Pc",
    authDomain: "trip-479ef.firebaseapp.com",
    databaseURL: "https://trip-479ef.firebaseio.com",
    projectId: "trip-479ef",
    storageBucket: "trip-479ef.appspot.com",
    messagingSenderId: "819578427882",
    appId: "1:819578427882:web:1da6bc2c75bb3d43467a93",
    measurementId: "G-5K927XZWEF"
};

class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig)
        this.db = firebase.firestore()
    }

    place = (id) => this.db.collection(DB.PLACES).doc(id)
    places = () => this.db.collection(DB.PLACES)
}

export default Firebase; 