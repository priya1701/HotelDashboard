import userActions from '../../../redux/actions/userActions';

export default (async function showResults(values) {
    console.log(values);
    if(values){
        userActions.login(values.email, values.password);
    }
});
