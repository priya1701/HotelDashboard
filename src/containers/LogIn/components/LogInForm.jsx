import React, { PureComponent } from 'react';
import axios from 'axios';
import { Field, reduxForm } from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import renderCheckBoxField from '../../../shared/components/form/CheckBox';
import base from '../../../baseHelper/base';

class LogInForm extends PureComponent {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.showPassword = this.showPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: '',
      password: '',
      showPassword: false,
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  showPassword(e){
    e.preventDefault();
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const cred = {
      email: this.state.username,
      password: this.state.password,
    };
    const path = base + '/login';
    axios.post(path, cred)
    .then(r => {
      console.log("Ress",r);
      if(r.status === 200){
        localStorage.setItem('token', JSON.stringify(r.data.TOKEN));
        switch (r.data.role) {
          case "General manager":
            window.location = "/manager";
          case "Check-In manager":
            window.location = "/checkIn";
          case "Hotel owner":
            window.location = "/owner";
          case "State police":
            window.location = "/state";
          case "Zonal police":
            window.location = "/area";
          case "National police":
            window.location = "/country";
          case "City police":
            window.location = "/city";
        }
      }else{
      }
    });
  }

  render() {
    return (
      <form className="form">
        <div className="form__form-group">
          <span className="form__form-group-label">Username</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <AccountOutlineIcon />
            </div>
            <Field
              name="username"
              component="input"
              type="text"
              placeholder="User Id"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Password</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <KeyVariantIcon />
            </div>
            <Field
              name="password"
              component="input"
              type={this.state.showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button
              className={`form__form-group-button${this.state.showPassword ? ' active' : ''}`}
              onClick={this.showPassword}
            ><EyeIcon />
            </button>
          </div>
          <div className="account__forgot-password">
            <a href="/">Forgot a password?</a>
          </div>
        </div>
        <div className="form__form-group">
          <div className="form__form-group-field">
            <Field
              name="remember_me"
              component={renderCheckBoxField}
              label="Remember me"
            />
          </div>
        </div>
        <button
              className="btn btn-primary account__btn account__btn--small"
              onClick={this.handleSubmit}
        >Sign In
        </button>
        <Link className="btn btn-outline-primary account__btn account__btn--small" to="/sign_up">Create Account</Link>
      </form>
    );
  }
}

export default reduxForm({
  form: 'log_in_form',
})(LogInForm);
