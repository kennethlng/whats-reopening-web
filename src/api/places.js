import { db } from './firebase';
import * as CONSTANTS from '../constants/database'; 

export const places = () => db.collection(CONSTANTS.PLACES); 