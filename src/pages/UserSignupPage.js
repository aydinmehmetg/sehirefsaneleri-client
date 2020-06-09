import React, { Component } from "react";
import axios from "axios";
import { signup } from "../api/apiCalls";
import Input from "../components/Input";
import { withTranslation } from "react-i18next";

class UserSignupPage extends Component {
  state = {
    username: null,
    displayName: null,
    password: null,
    passwordRepeat: null,
    pendigApiCall: false,
    errors: {},
  };
  onChange = (event) => {
    const { t } = this.props;
    const { name, value } = event.target;
    const errors = { ...this.state.errors };
    errors[name] = undefined;

    if (name === "password" || name === "passwordRepeat") {
      if (name === "password" && value !== this.state.passwordRepeat) {
        errors.passwordRepeat = t("Password mismatch");
      } else if (name === "passwordRepeat" && value !== this.state.password) {
        errors.passwordRepeat = t("Password mismatch");
      } else {
        errors.passwordRepeat = undefined;
      }
    }

    this.setState({
      [name]: value,
      errors,
    });
  };
  onClickSignup = async (event) => {
    event.preventDefault();
    const { username, displayName, password } = this.state;

    const body = {
      username: username,
      displayName: displayName,
      password: password,
    };
    this.setState({
      pendigApiCall: true,
    });

    try {
      const response = await signup(body);
    } catch (error) {
      if (error.response.data.validationErros) {
        this.setState({
          errors: error.response.data.validationErros,
        });
      }
    }

    this.setState({
      pendigApiCall: false,
    });
  };

  render() {
    const { pendigApiCall, errors } = this.state;
    const { username, displayName, password, passwordRepeat } = errors;
    const { t } = this.props;
    return (
      <div className="container">
        <form>
          <h1 className="display-3 text-center">{t("Sign Up")}</h1>
          <Input
            error={username}
            label={t("Username")}
            name="username"
            onChange={this.onChange}
          />
          <Input
            error={displayName}
            label={t("Display Name")}
            name="displayName"
            onChange={this.onChange}
          />
          <Input
            type="password"
            error={password}
            label={t("Password")}
            name="password"
            onChange={this.onChange}
          />

          <Input
            type="password"
            error={passwordRepeat}
            label={t("PasswordRepeat")}
            name="passwordRepeat"
            onChange={this.onChange}
          />
          <div className="text-center">
            <button
              className="btn btn-outline-success"
              onClick={this.onClickSignup}
              disabled={pendigApiCall || passwordRepeat !== undefined}
            >
              {pendigApiCall && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              {t("Sign Up")}
            </button>
          </div>
         
        </form>
      </div>
    );
  }
}

const UserSignupPageWithTranslation = withTranslation()(UserSignupPage);
export default UserSignupPageWithTranslation;
