import checkInConstants from '../constants/checkInConstants';
import guestService from '../services/guestService';
import alertActions from './alertActions';
//import history  from '../../baseHelper/history';

const checkInActions = {
    checkinInd,
    checkinFor,
};

function checkinInd(values) {
    console.log("Inside CheckinAction!!");      

    guestService.checkinInd(values)
            .then(                  
                console.log("Added")
            );
    
}

function checkinFor() {
}

export default checkInActions;
