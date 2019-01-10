import axios from 'axios';
import authHeader from '../../baseHelper/auth';
import base from '../../baseHelper/base';

const userService = {
    checkinInd,
    checkinFor
};

function checkinInd(values) {
    console.log("Inside login service");
    const cred = values;
    let config = {
        headers: authHeader()
    };
    const path = base + '/guest';
    var ress = axios.post(path, cred, config)
        .then(r => {
            console.log("Ress", r);
        })
        .catch(error =>{
            console.log(error);
            return Promise.reject(error);
        });
    return ress;
}

function checkinFor() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

export default userService;