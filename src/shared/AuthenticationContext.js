import React, { Component } from "react";

export const Authentication = React.createContext();

class AuthenticationContext extends Component {
  state = {
    isLoggedIn: false,
    username: undefined,
    displayName:undefined,
    image:undefined,
    password:undefined,
  };
  onLogginSuccess = (authState) => {
    this.setState({
       // ...authState, böyle yaparsakta state gelen değerlere direk atar yani aynı key kullanılması durumunda
      username:authState.username,
      displayName:authState.displayName,
      image:authState.image,
      password:authState.password,
      isLoggedIn: true,
    });
  };

  onLogoutSuccess = () => {
    this.setState({
      isLoggedIn: false,
      username: undefined,
    });
  };

  render() {
    return <Authentication.Provider value={
        {
            state:{...this.state},
            onLogginSuccess:this.onLogginSuccess,
            onLogoutSuccess:this.onLogoutSuccess,
        }
    }>
        {this.props.children}

    </Authentication.Provider>
  }
}

export default AuthenticationContext;
