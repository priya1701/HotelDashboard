import checkInActions from '../../../../redux/actions/checkInActions';

function submit (values) {
    console.log(values);
    if(values){
      checkInActions.checkinInd(values);
    }
};

export default submit;
