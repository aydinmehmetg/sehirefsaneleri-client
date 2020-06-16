import React, { Component } from "react";
import Input from "../components/Input";
import { withTranslation } from "react-i18next";
import { login } from "../api/apiCalls";
import axios from "axios";
import ButtonWithProgress from "../components/ButtonWithProgress";
import { withApiProgress } from "../shared/ApiProgress";

class LoginPage extends Component {
  state = {
    username: null,
    password: null,
    error: null,
  };

 
  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      error: null,
    });
  };
  ocClickLogin = async (event) => {
    event.preventDefault();
    const {onLogginSuccess}=this.props;
    const crends = {
      username: this.state.username,
      password: this.state.password,
    };

    const {push} = this.props.history;
    this.setState({
      error: null,
    });
    try {
      await login(crends);
      push('/');
      onLogginSuccess(this.state.username)
    } catch (apiError) {
      console.log("hata:"+apiError)
      this.setState({
        error: apiError.response.data.message,
      });
    }
  };
  render() {
    const { t ,pendingApiCall } = this.props;
    const { username, password, error } = this.state;
    const buttonEnabled = username && password;
    return (
      <div className="container">
        <form>
          <h1 className="display-3 text-center">{t("Login")}</h1>
          <Input
            label={t("Username")}
            name="username"
            type="text"
            onChange={this.onChange}
          />
          <Input
            label={t("Password")}
            name="password"
            type="password"
            onChange={this.onChange}
          />

          {error && <div className="alert alert-success">{error}</div>}
          <div className="text-center">
            <ButtonWithProgress
              onClick={this.ocClickLogin}
              disabled={!buttonEnabled || pendingApiCall}
              pendingApiCall={pendingApiCall}
              text={t("Login")}
            />
          </div>
        </form>
      </div>
    );
  }
}
 
const LoginPageWithApiProgress= withApiProgress(LoginPage,"/api/1.0/auth")
export default withTranslation()(LoginPageWithApiProgress);


