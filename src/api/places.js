import { db } from './firebase';
import * as CONSTANTS from '../constants/database'; 

export const place = (id) => db.collection(CONSTANTS.PLACES).doc(id);
export const places = () => db.collection(CONSTANTS.PLACES); 