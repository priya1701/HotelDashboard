import React, { PureComponent } from 'react';
import { Card, CardBody, Col, Button, ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';
import CalendarBlankIcon from 'mdi-react/CalendarBlankIcon';
import TimetableIcon from 'mdi-react/TimetableIcon';
// import EyeIcon from 'mdi-react/EyeIcon';
// import EmailIcon from 'mdi-react/EmailIcon';
// import AccountSearchIcon from 'mdi-react/AccountSearchIcon';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
// import renderFileInputField from '../../../../shared/components/form/FileInput';
import renderSelectField from '../../../../shared/components/form/Select';
// import renderMultiSelectField from '../../../../shared/components/form/MultiSelect';
import renderRadioButtonField from '../../../../shared/components/form/RadioButton';
import renderDatePickerField from '../../../../shared/components/form/DatePicker';
import renderDateTimePickerField from '../../../../shared/components/form/DateTimePicker';

class HorizontalForm extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.onChangeGuestId = this.onChangeGuestId.bind(this);
    this.onChangeSurname = this.onChangeSurname.bind(this);
    this.onChangeGivenName = this.onChangeGivenName.bind(this);
    this.onChangeSex = this.onChangeSex.bind(this);
    this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
    this.onChangeNationality = this.onChangeNationality.bind(this);
    this.onChangeArrivedFrom = this.onChangeArrivedFrom.bind(this);
    this.onChangeHotelName = this.onChangeHotelName.bind(this);
    this.onChangeHotelChainName = this.onChangeHotelChainName.bind(this);
    this.onChangeHotelAddress = this.onChangeHotelAddress.bind(this);
    this.onChangeZone = this.onChangeZone.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeHotelPhoneNo = this.onChangeHotelPhoneNo.bind(this);
    this.onChangeAddressCurrent = this.onChangeAddressCurrent.bind(this);
    this.onChangePermanentMobileNumber = this.onChangePermanentMobileNumber.bind(this);
    this.onChangeIdentificationType = this.onChangeIdentificationType.bind(this);
    this.onChangeDateOfArrivalInHotel = this.onChangeDateOfArrivalInHotel.bind(this);
    this.onChangeRemarks = this.onChangeRemarks.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      showPassword: false,
      GuestId: '',
      Surname: '',
      GivenName: '',
      Sex: '',
      DateOfBirth: '',
      Nationality: '',
      ArrivedFrom: '',
      HotelName: '',
      HotelChainName: '',
      HotelAddress: '',
      Zone: '',
      City: '',
      State: '',
      HotelPhoneNo: '',
      AddressCurrent: '',
      PermanentMobileNumber: '',
      IdentificationType: '',
      DateOfArrivalInHotel: '',
      Remarks: '',
    };
  }

  onChangeGuestId(e) {
    this.setState({
      GuestId: e.target.value,
    });
  }

  onChangeSurname(e) {
    this.setState({
      Surname: e.target.value,
    });
  }

  onChangeGivenName(e) {
    this.setState({
      GivenName: e.target.value,
    });
  }

  onChangeSex(e) {
    console.log("radiooo",e.target.radioValue);
    this.setState({
      Sex: e.target.radioValue,
    });
  }

  onChangeDateOfBirth(e) {
    this.setState({
      DateOfBirth: e.target.value.toString(),
    });
  }

  onChangeNationality(e) {
    this.setState({
      Nationality: e.target.value,
    });
  }

  onChangeArrivedFrom(e) {
    this.setState({
      ArrivedFrom: e.target.value,
    });
  }

  onChangeHotelName(e) {
    this.setState({
      HotelName: e.target.value,
    });
  }

  onChangeHotelChainName(e) {
    this.setState({
      HotelChainName: e.target.value,
    });
  }

  onChangeHotelAddress(e) {
    this.setState({
      HotelAddress: e.target.value,
    });
  }

  onChangeZone(e) {
    this.setState({
      Zone: e.target.value,
    });
  }

  onChangeCity(e) {
    this.setState({
      City: e.target.value,
    });
  }

  onChangeState(e) {
    this.setState({
      State: e.target.value,
    });
  }

  onChangeHotelPhoneNo(e) {
    this.setState({
      HotelPhoneNo: e.target.value,
    });
  }

  onChangeAddressCurrent(e) {
    this.setState({
      AddressCurrent: e.target.value,
    });
  }

  onChangePermanentMobileNumber(e) {
    this.setState({
      PermanentMobileNumber: e.target.value,
    });
  }

  onChangeIdentificationType(e) {
    this.setState({
      IdentificationType: e.target.value,
    });
  }

  onChangeDateOfArrivalInHotel(e) {
    this.setState({
      DateOfArrivalInHotel: e.target.value,
    });
  }

  onChangeRemarks(e) {
    this.setState({
      Remarks: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const newData = {
      GuestId: this.state.GuestId,
      Surname: this.state.Surname,
      GivenName: this.state.GivenName,
      Sex: this.state.Sex,
      DateOfBirth: this.state.DateOfBirth,
      Nationality: this.state.Nationality,
      ArrivedFrom: this.state.ArrivedFrom,
      BlackListStatus: 'NotBlacklisted',
      HotelName: this.state.HotelName,
      HotelChainName: this.state.HotelChainName,
      HotelAddress: this.state.HotelAddress,
      Zone: this.state.Zone,
      City: this.state.City,
      State: this.state.State,
      HotelPhoneNo: this.state.HotelPhoneNo,
      AddressCurrent: this.state.AddressCurrent,
      PermanentMobileNumber: this.state.PermanentMobileNumber,
      IdentificationType: this.state.IdentificationType,
      DateOfArrivalInHotel: this.state.DateOfArrivalInHotel,
      VerificationStatus: 'Pending',
      Remarks: this.state.Remarks,
    };
    axios.post('http://35.247.129.253:3510/api/hotel.cto.Guest', newData)
      .then(res => console.log(res.data));
    console.log('PostData: ', this.state);
    this.setState({
      GuestId: '',
      Surname: '',
      GivenName: '',
      Sex: '',
      DateOfBirth: '',
      Nationality: '',
      ArrivedFrom: '',
      HotelName: '',
      HotelChainName: '',
      HotelAddress: '',
      Zone: '',
      City: '',
      State: '',
      HotelPhoneNo: '',
      AddressCurrent: '',
      PermanentMobileNumber: '',
      IdentificationType: '',
      DateOfArrivalInHotel: '',
      Remarks: '',
    });
  }

showPassword = (e) => {
  e.preventDefault();
  this.setState({
    showPassword: !this.state.showPassword,
  });
};

render() {
  const { handleSubmit, reset, t } = this.props;

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('Add Guest Data')}</h5>
          </div>
          <form className="form form--horizontal" onSubmit={handleSubmit}>
            <div className="form__form-group">
              <span className="form__form-group-label">Guest Id</span>
              <div className="form__form-group-field">
                <Field
                  name="GuestId"
                  component="input"
                  type="text"
                  placeholder="Id"
                  value={this.state.GuestId}
                  onChange={this.onChangeGuestId}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Surname</span>
              <div className="form__form-group-field">
                <Field
                  name="Surname"
                  component="input"
                  type="text"
                  placeholder=""
                  value={this.state.Surname}
                  onChange={this.onChangeSurname}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Given Name</span>
              <div className="form__form-group-field">
                <Field
                  name="GivenName"
                  component="input"
                  type="text"
                  placeholder=""
                  value={this.state.GivenName}
                  onChange={this.onChangeGivenName}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Sex</span>
              <div className="form__form-group-field">
                <Field
                  name="Sex"
                  component={renderRadioButtonField}
                  label="Male"
                  radioValue="Male"
                  value={this.state.Sex}
                />
                <Field
                  name="Sex"
                  component={renderRadioButtonField}
                  label="Female"
                  value="Female"
                  checked={this.state.Sex === 'Female'}
                  onChange={this.onChangeSex}
                />
                <Field
                  name="Sex"
                  component={renderRadioButtonField}
                  label="Other"
                  value="Other"
                  checked={this.state.Sex === 'Other'}
                  onChange={this.onChangeSex}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Date of Birth</span>
              <div className="form__form-group-field">
                <Field
                  name="DateOfBirth"
                  component={renderDatePickerField}
                  value={this.state.DateOfBirth}
                  onChange={this.onChangeDateOfBirth}
                />
                <div className="form__form-group-icon">
                  <CalendarBlankIcon />
                </div>
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Nationality</span>
              <div className="form__form-group-field">
                <Field
                  name="Nationality"
                  component={renderSelectField}
                  options={[
                    { value: 'India', label: 'India' },
                    { value: 'US', label: 'America' },
                    { value: 'Spain', label: 'Spain' },
                    { value: 'China', label: 'China' },
                    { value: 'Japan', label: 'Japan' },
                    { value: 'UK', label: 'England' },
                  ]}
                  value={this.state.Nationality}
                  onSelect={this.onChangeNationality}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Arrived From</span>
              <div className="form__form-group-field">
                <Field
                  name="ArrivedFrom"
                  component="input"
                  type="text"
                  placeholder=""
                  value={this.state.ArrivedFrom}
                  onChange={this.onChangeArrivedFrom}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Address of Guest</span>
              <div className="form__form-group-field">
                <Field
                  name="AddressCurrent"
                  component="input"
                  type="text"
                  placeholder=""
                  value={this.state.AddressCurrent}
                  onChange={this.onChangeAddressCurrent}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Mobile Number</span>
              <div className="form__form-group-field">
                <Field
                  name="PermanentMobileNumber"
                  component="input"
                  type="text"
                  placeholder=""
                  value={this.state.PermanentMobileNumber}
                  onChange={this.onChangePermanentMobileNumber}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Hotel Name</span>
              <div className="form__form-group-field">
                <Field
                  name="HotelName"
                  component="input"
                  type="text"
                  placeholder=""
                  value={this.state.HotelName}
                  onChange={this.onChangeHotelName}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Hotel Chain Name</span>
              <div className="form__form-group-field">
                <Field
                  name="HotelChainName"
                  component="input"
                  type="text"
                  placeholder=""
                  value={this.state.HotelChainName}
                  onChange={this.onChangeHotelChainName}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Hotel Address</span>
              <div className="form__form-group-field">
                <Field
                  name="HotelAddress"
                  component="input"
                  type="text"
                  placeholder=""
                  value={this.state.HotelAddress}
                  onChange={this.onChangeHotelAddress}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Zone</span>
              <div className="form__form-group-field">
                <Field
                  name="Zone"
                  component="input"
                  type="text"
                  placeholder=""
                  value={this.state.Zone}
                  onChange={this.onChangeZone}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">City</span>
              <div className="form__form-group-field">
                <Field
                  name="City"
                  component="input"
                  type="text"
                  placeholder=""
                  value={this.state.City}
                  onChange={this.onChangeCity}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">State</span>
              <div className="form__form-group-field">
                <Field
                  name="State"
                  component="input"
                  type="text"
                  placeholder=""
                  value={this.state.State}
                  onChange={this.onChangeState}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Hotel Phone No</span>
              <div className="form__form-group-field">
                <Field
                  name="HotelPhoneNo"
                  component="input"
                  type="text"
                  placeholder=""
                  value={this.state.HotelPhoneNo}
                  onChange={this.onChangeHotelPhoneNo}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Check In Time</span>
              <div className="form__form-group-field">
                <Field
                  name="DateOfArrivalInHotel"
                  component={renderDateTimePickerField}
                  value={this.state.DateOfArrivalInHotel}
                  onChange={this.onChangeDateOfArrivalInHotel}
                />
                <div className="form__form-group-icon">
                  <TimetableIcon />
                </div>
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Id Proof</span>
              <div className="form__form-group-field">
                <Field
                  name="IdentificationType"
                  component={renderSelectField}
                  options={[
                    { value: 'VoterId', label: 'Voter Id' },
                    { value: 'Aadhar', label: 'Aadhar' },
                    { value: 'DrivingLicence', label: 'Driving Licence' },
                    { value: 'Passport', label: 'Passport' },
                  ]}
                  value={this.state.IdentificationType}
                  onSelect={this.onChangeIdentificationType}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Remarks</span>
              <div className="form__form-group-field">
                <Field
                  name="Remarks"
                  component="textarea"
                  type="text"
                  value={this.state.Remarks}
                  onChange={this.onChangeRemarks}
                />
              </div>
            </div>
            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit" onClick={this.onSubmit}>Submit</Button>
              <Button type="button" onClick={reset}>
                Cancel
              </Button>
            </ButtonToolbar>
          </form>
        </CardBody>
      </Card>
    </Col>
  );
}
}

export default reduxForm({
  form: 'horizontal_form', // a unique identifier for this form
})(translate('common')(HorizontalForm));
