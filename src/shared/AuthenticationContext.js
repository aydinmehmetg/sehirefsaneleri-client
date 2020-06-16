import React, { Component } from 'react'


export const Authentication=React.createContext();


 class AuthenticationContext extends Component {
    state={

        isLoggedIn:false,
        username:undefined,
    
      }
      onLogginSuccess =(username)=>{
        console.log("username:"+username)
        this.setState({
          username,
          isLoggedIn:true,
        })
      }
    
      onLogoutSuccess=()=>{
        this.setState({
          isLoggedIn:false,
          username:undefined,
    
        })
    
      }
    

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default AuthenticationContext;