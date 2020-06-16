import React, { Component }from "react";
import { withRouter } from "react-router-dom";
import {Authentication}from "../shared/AuthenticationContext";

const ProfileCard = (props) => {
    const  isLoggdinUser  = props.username;
    const pathUsername = props.match.params.username;

    let message = "we cannot edit";
    if (pathUsername === isLoggdinUser) {
      message = "we can edit";
    }
    return <div>{message}</div>;
};


 class ProfileCardWarapper extends Component {
    static contextType=Authentication;
    render() {
        return (
            <ProfileCard username={this.context.state.username} {...this.props} />
        )
    }
}


export default withRouter(ProfileCardWarapper);
