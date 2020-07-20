import firebase from 'firebase'; 
import { config } from '../../config/firebase'; 

class Firebase {
    constructor() {
        firebase.initializeApp(config)
        this.db = firebase.firestore(); 
        this.auth = firebase.auth(); 
    }

    /* Authentication API */
    

    /* Firestore API */
    places = () => this.db.collection("places"); 
    place = (id) => this.places().doc(id); 
}

export default Firebase; 