import React, { Component } from "react";


  //her classın Renderi override etmesi gerekir ve jsx formatı return edip dönmesi gerekiyor
  /*İki tür componentler var bir functions ve class componentler, function componentler == stataless komponentler oluyor
  içerisinde state(durum) taşımayan komponentlerdir. Stateful component == Class componentler ise sayfaya ait bilgileri durumları taşıyan com-
  ponentlerdir*/
  //onChange in event targeti geliyor bu evetin targitı ve onunda altında value vardır

class UserSignupPage extends Component {
  //componentin statesini eziyoruz aslında 
  state={
    username:null,
    displayName:null,
    password:null,
    passwordRepeat:null,
  }
   onChange= (event) =>{
    const {name,value}= event.target; //Object Destructuring deniyor obje parçalama name  olarak çekiyoruz değerleri
    //Statelerimize değer atarken setState içinde yapmak zorundayız ve yazdığımız değerler state tutuluyor.
    this.setState({
      //[] kullanmamızın sebebi değer ataması yaptığımız için
      [name]:value

    })
      
   }
  render() {
    return (
      <form>
        <h1>Sign Up</h1>
        <div>
          <label>Username</label>
          <input name="username" onChange={this.onChange}/>
        </div>
        <div>
          <label>Display Name</label>
          <input name="displayName"onChange={this.onChange} />
        </div>
        <div>
          <label>Password</label>
          <input  name="password" type="Password" onChange={this.onChange}/>
        </div>
        <div>
          <label>Password Repeat</label>
          <input name="passwordRepeat" type="Password" onChange={this.onChange}/>
        </div>
        <button>Sign Up</button>

      </form>
    );
  }
}
//Her component en az bir fonksiyon veya class export etmeli 
export default UserSignupPage;
