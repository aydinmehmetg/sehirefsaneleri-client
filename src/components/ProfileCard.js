import React from 'react';
import {withRouter} from "react-router-dom";

const ProfileCard = (props) => {
    const pathUsername= props.match.params.username;
    const isLoggdinUser=props.username;
    let message="we cannot edit";
    if(pathUsername===isLoggdinUser)
    {
        message="we can edit";
    }
    return (
        <div>
         {message}
        </div>
    );
};

export default withRouter(ProfileCard);