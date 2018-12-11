import React, { PureComponent } from 'react';
import axios from 'axios';
import { Field, reduxForm } from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import renderCheckBoxField from '../../../shared/components/form/CheckBox';
import base from '../../../baseURL/base';

class LogInForm extends PureComponent {
  constructor() {
    super();
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.showPassword = this.showPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: '',
      password: '',
      showPassword: false,
    };
  }

  onChangeUsername(e){
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e){
    this.setState({
      password: e.target.value,
    });
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
    const path = base.URL + '/user/login';
    axios.post(path, cred)
    .then(r => {
      console.log("Ress",r);
      if(r.status === 200){
        base.Token = r.data.TOKEN;
        console.log("Token", base.Token);
        if ((base.Token)&&(r.data.role === "General manager")){
          window.location="/checkIn/guest/add";
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
              onChange={this.onChangeUsername}
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
              onChange={this.onChangePassword}
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
