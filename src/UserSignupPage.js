import React, { Component } from "react";


class UserSignupPage extends Component {
  //her classın Renderi override etmesi gerekir ve jsx formatı return edip dönmesi gerekiyor
  /*İki tür componentler var bir functions ve class componentler, function componentler == stataless komponentler oluyor
  içerisinde state(durum) taşımayan komponentlerdir. Stateful component == Class componentler ise sayfaya ait bilgileri durumları taşıyan com-
  ponentlerdir*/
  render() {
    return (
      <form>
        <h1>Sign Up</h1>
        <div>
          <label>Username</label>
          <input />
        </div>
        <div>
          <label>Display Name</label>
          <input />
        </div>
        <div>
          <label>Password</label>
          <input />
        </div>
      </form>
    );
  }
}

export default UserSignupPage;
