import axios from 'axios';
import authHeader from '../../baseHelper/auth';
import base from '../../baseHelper/base';

export default userService = {
    login,
    logout,
    getAll
};

function login(username, password) {
    const cred = {
        email: username,
        password: password,
    };
    const path = base + '/login';
    axios.post(path, cred)
        .then(handleResponse)
        .then(r => {
            console.log("Ress", r);
            if (r.data.TOKEN) {
                localStorage.setItem('token', JSON.stringify(r.data.TOKEN));
                console.log("Role After Login", r.data.role);
            }
            return r.data.role;
        }); 
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
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}