import userActions from '../../../redux/actions/userActions';

function submit (values) {
    console.log(values);
    if(values){
        userActions.login(values.email, values.password);
    }
};

export default submit;
