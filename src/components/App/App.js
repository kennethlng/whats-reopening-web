import React from 'react'; 
import {
    BrowserRouter as Router
} from "react-router-dom";
import { Main } from '../Main'; 
import Firebase, { FirebaseContext } from '../Firebase'; 

const App = () => (
    <FirebaseContext.Provider value={new Firebase()}>
        <Router>
            <Main/>
        </Router>
    </FirebaseContext.Provider>
)

export default App; 