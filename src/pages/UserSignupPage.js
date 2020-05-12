import React, { Component } from "react";
import axios from "axios";
import { signup } from "../api/apiCalls";

//her classın Renderi override etmesi gerekir ve jsx formatı return edip dönmesi gerekiyor
/*İki tür componentler var bir functions ve class componentler, function componentler == stataless komponentler oluyor
  içerisinde state(durum) taşımayan komponentlerdir. Stateful component == Class componentler ise sayfaya ait bilgileri durumları taşıyan com-
  ponentlerdir*/
//onChange in event targeti geliyor bu evetin targitı ve onunda altında value vardır

class UserSignupPage extends Component {
  //componentin statesini eziyoruz aslında
  state = {
    username: null,
    displayName: null,
    password: null,
    passwordRepeat: null,
    pendigApiCall: false,
  };
  onChange = (event) => {
    const { name, value } = event.target; //Object Destructuring deniyor obje parçalama name  olarak çekiyoruz değerleri
    //Statelerimize değer atarken setState içinde yapmak zorundayız ve yazdığımız değerler state tutuluyor.
    this.setState({
      //[] kullanmamızın sebebi değer ataması yaptığımız için
      [name]: value,
    });
  };
  // prevent deault yapmamızın sebebi bu butonun on submit özelliği ile geliyor ama bunubiyere göndermek istiyor
  //ama biz bunu preventDefault() methodu ile durduruyoruz
  onClickSignup = async (event) => {
    event.preventDefault();
    //json objesi oluşturuyor body
    /*  const body = {
        username: this.state.username,
        displayName: this.state.displayName,
        password: this.state.password,
      };*/
    const { username, displayName, password } = this.state;

    const body = {
      /*username,
        displayName,
        password, (bu tarz kullanımda var atadığımız değer ve gelen değerin isimleri aynı ise)*/
      username: username,
      displayName: displayName,
      password: password,
    };
    this.setState({
      pendigApiCall: true,
    });

    //axios.post("http://localhost:8080/api/1.0/users", body); amaç localhost yazısı olmadan atmak
    try {
      const response = await signup(body);
    } catch (error) {}

    this.setState({
      pendigApiCall: false,
    });
  };

  render() {
    const { pendigApiCall } = this.state;
    return (
      <div className="container">
        <form>
          <h1 className="display-3 text-center">Sign Up</h1>
          <div className="form-group">
            <label>Username</label>
            <input
              className="form-control"
              name="username"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Displaya Name</label>
            <input
              className="form-control"
              name="displayName"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              name="password"
              type="Password"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Password Repeat</label>
            <input
              className="form-control"
              name="passwordRepeat"
              type="Password"
              onChange={this.onChange}
            />
          </div>
          <div className="text-center">
            <button
              className="btn btn-outline-success"
              onClick={this.onClickSignup}
              disabled={pendigApiCall}
            >
              {pendigApiCall && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}
//Her component en az bir fonksiyon veya class export etmeli
export default UserSignupPage;
