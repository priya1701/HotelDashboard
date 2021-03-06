import userConstants from '../constants/userConstants';
import userService from '../services/userService';
import alertActions from './alertActions';
import history  from '../../baseHelper/history';

const userActions = {
    login,
    logout,
};

function login(username, password) {
    console.log("Inside UserAction!!");
     return async(dispatch) => {
        console.log("dispatched");
        dispatch(request({ username }));

       

        userService.login(username, password)
            .then(
                user => { 
                    console.log("USer", user);
                    dispatch(success(user));
                    switch (user) {
                      case "General manager":
                        console.log("Inside GM");
                        return history.push('/manager');
                      case "Check-in manager":
                      console.log("Inside CheckM");
                        return history.push("/checkIn/guest/list");
                      case "Hotel owner":
                        return history.push('/owner');
                      case "State police":
                        return history.push('/state');
                      case "National police":
                        return history.push('/country');
                      case "City police":
                        return history.push('/city');
                      case "Zonal police":
                        return history.push('/area');
                    }
                },
                error => {
                    dispatch(failure(error));
                    alertActions.error(error);
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

export default userActions;
