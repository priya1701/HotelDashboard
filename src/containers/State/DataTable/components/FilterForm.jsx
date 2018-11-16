import React, { PureComponent } from 'react';
import { Card, CardBody, Col, Button, ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
// import CalendarBlankIcon from 'mdi-react/CalendarBlankIcon';
// import TimetableIcon from 'mdi-react/TimetableIcon';
// import EyeIcon from 'mdi-react/EyeIcon';
// import EmailIcon from 'mdi-react/EmailIcon';
// import AccountSearchIcon from 'mdi-react/AccountSearchIcon';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import renderSelectField from '../../../../shared/components/form/Select';
// import renderMultiSelectField from '../../../../shared/components/form/MultiSelect';
// import renderRadioButtonField from '../../../../shared/components/form/RadioButton';
// import renderDatePickerField from '../../../../shared/components/form/DatePicker';
// import renderDateTimePickerField from '../../../../shared/components/form/DateTimePicker';

class HorizontalForm extends PureComponent {
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
            <form className="form form--horizontal" onSubmit={handleSubmit}>
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
  form: 'horizontal_form', // a unique identifier for this form
})(translate('common')(HorizontalForm));
