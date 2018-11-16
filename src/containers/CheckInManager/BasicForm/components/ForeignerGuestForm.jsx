import React, { PureComponent } from 'react';
import { Card, CardBody, Col, Button, ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import CalendarBlankIcon from 'mdi-react/CalendarBlankIcon';
import TimetableIcon from 'mdi-react/TimetableIcon';
// import EyeIcon from 'mdi-react/EyeIcon';
// import EmailIcon from 'mdi-react/EmailIcon';
// import AccountSearchIcon from 'mdi-react/AccountSearchIcon';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import renderFileInputField from '../../../../shared/components/form/FileInput';
import renderSelectField from '../../../../shared/components/form/Select';
// import renderMultiSelectField from '../../../../shared/components/form/MultiSelect';
import renderRadioButtonField from '../../../../shared/components/form/RadioButton';
import renderDatePickerField from '../../../../shared/components/form/DatePicker';
import renderDateTimePickerField from '../../../../shared/components/form/DateTimePicker';

class ForeignerGuestForm extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      showPassword: false,
    };
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
                    placeholder=""
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
                    radioValue="male"
                  />
                  <Field
                    name="Sex"
                    component={renderRadioButtonField}
                    label="Female"
                    radioValue="female"
                  />
                  <Field
                    name="Sex"
                    component={renderRadioButtonField}
                    label="Other"
                    radioValue="other"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Date of Birth</span>
                <div className="form__form-group-field">
                  <Field
                    name="DateOfBirth"
                    component={renderDatePickerField}
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
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Hotel Id</span>
                <div className="form__form-group-field">
                  <Field
                    name="hotelId"
                    component="input"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Hotel Name</span>
                <div className="form__form-group-field">
                  <Field
                    name="hotel"
                    component="input"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Check In Time</span>
                <div className="form__form-group-field">
                  <Field
                    name="DateOfArrivalInHotel"
                    component={renderDateTimePickerField}
                  />
                  <div className="form__form-group-icon">
                    <TimetableIcon />
                  </div>
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Blacklisted</span>
                <div className="form__form-group-field">
                  <Field
                    name="BlackListStatus"
                    component="input"
                    type="text"
                    placeholder="No"
                    disabled
                  />
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
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Upload file</span>
                <div className="form__form-group-field">
                  <Field
                    name="file"
                    component={renderFileInputField}
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Form C</span>
                <div className="form__form-group-field">
                  <Field
                    name="FormC"
                    component="input"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Verification</span>
                <div className="form__form-group-field">
                  <Field
                    name="VerificationStatus"
                    component="input"
                    type="text"
                    placeholder="Pending"
                    disabled
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
                  />
                </div>
              </div>
              <ButtonToolbar className="form__button-toolbar">
                <Button color="primary" type="submit">Submit</Button>
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
  form: 'foreigner_form', // a unique identifier for this form
})(translate('common')(ForeignerGuestForm));
