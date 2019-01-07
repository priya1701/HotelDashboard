import axios from 'axios';
import authHeader from '../../baseHelper/auth';
import base from '../../baseHelper/base';

const userService = {
    login,
    logout,
    getAll
};

function login(username, password) {
    console.log("Inside login service");
    const cred = {
        email: username,
        password: password,
    };
    const path = base + '/login';
    var role = axios.post(path, cred)
        .then(r => {
            console.log("Ress", r);
            if (r.data.TOKEN) {
                localStorage.setItem('token', JSON.stringify(r.data.TOKEN));
                console.log("Role After Login", r.data.role);
            }
            return r.data.role;
        })
        .catch(error =>{
            console.log(error);
            return Promise.reject(error);
        });
      return role;
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    console.log("Response after login", response);
        const Data = response.data;
        if (response.statusText !== "OK") {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return Data;
}


export default userService;