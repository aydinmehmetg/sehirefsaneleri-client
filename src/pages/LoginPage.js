import React, { Component } from "react";
import Input from "../components/Input";
import {withTranslation} from 'react-i18next';
import {login} from '../api/apiCalls';  

 class LoginPage extends Component {
    state={
        username:null,
        password:null,
    }

    onChange=(event)=>{
        const {name,value}=event.target;
        this.setState({
            [name]:value,
        })
    }
    ocClickLogin =(event)=>{
        event.preventDefault();
        const crends={
            username:this.state.username,
            password:this.state.password,
        }
        login(crends);
    }
  render() {
      const {t} =this.props;
    return (
      <div className="container">
        <form>
          <h1 className="display-3 text-center">{t('Login')}</h1>
          <Input label={t("Username")} name="username" type="text" onChange={this.onChange} />
          <Input label={t("Password")} name="password" type="password" onChange={this.onChange} />
          <div className="text-center">
            <button
             className="btn btn-outline-success"
             onClick={this.ocClickLogin}
            >{t('Login')}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withTranslation()(LoginPage)