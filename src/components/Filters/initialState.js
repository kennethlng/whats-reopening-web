import * as STATUS from '../../constants/status'; 

export const INITIAL_STATE = {
    status: {
        [STATUS.OPEN.ID]: false,
        [STATUS.LIMITED_OPEN.ID]: false,
        [STATUS.TEMPORARILY_CLOSED.ID]: false,
        [STATUS.PERMANENTLY_CLOSED.ID]: false
    }
}