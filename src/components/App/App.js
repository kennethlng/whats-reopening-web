import React from 'react'; 
import {
    BrowserRouter as Router
} from "react-router-dom";
import { Main } from '../Main'; 
import { FirebaseContext, Firebase } from '../Firebase'; 

const App = () => (
    <div>
        <FirebaseContext.Provider value={new Firebase()}>   
            <Router>
                <Main/>
            </Router>
        </FirebaseContext.Provider>
    </div>
)

export default App; 