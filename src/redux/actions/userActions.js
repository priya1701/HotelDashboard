import userConstants from '../constants/userConstants';
import userService from '../services/userService';
import alertActions from './';
import history  from '../../baseHelper/history';

export default userActions = {
    login,
    logout,
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    switch (user) {
                      case "General manager":
                        console.log("Inside GM");
                        history.push('/manager');
                      case "Check-in manager":
                        history.push('/checkIn');
                      case "Hotel owner":
                        history.push('/owner');
                      case "State police":
                        history.push('/state');
                      case "National police":
                        history.push('/country');
                      case "City police":
                        history.push('/city');
                      case "Zonal police":
                        history.push('/area');
                    }
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
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
