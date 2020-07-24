import * as CONSTANTS from '../constants/places'; 

class Place {
    constructor(id, data) {
        let openingDate = data[CONSTANTS.OPENING_DATE].toDate(); 
        var newDate = new Date(openingDate); 

        this.id = id;
        this[CONSTANTS.GOOGLE_PLACE_ID] = data[CONSTANTS.GOOGLE_PLACE_ID];
        this[CONSTANTS.NAME] = data[CONSTANTS.NAME];
        this[CONSTANTS.MAIN_TEXT] = data[CONSTANTS.MAIN_TEXT]; 
        this[CONSTANTS.SECONDARY_TEXT] = data[CONSTANTS.SECONDARY_TEXT];
        this[CONSTANTS.IS_AFFILIATED] = data[CONSTANTS.IS_AFFILIATED]; 
        this[CONSTANTS.OPENING_DATE] = newDate;
        this[CONSTANTS.STATUS] = data[CONSTANTS.STATUS];
        this[CONSTANTS.PHOTOS] = data[CONSTANTS.PHOTOS];
    }
}

export default Place;