import React, { Component } from "react";
import axios from "axios";
import { act } from "react-dom/test-utils";


function getDisplayName(WrappedComponent){
  return WrappedComponent.displayName || WrappedComponent.name || "component";

}

export function withApiProgress(WrappedComponent,apiPath) {
  return class extends Component {
      //static displayName="Apiprogress("+getDisplayName(WrappedComponent)+")"
       static displayName= `ApiProgress(${getDisplayName(WrappedComponent)})`

    state = {
      pendingApiCall: false,
    };

    componentDidMount() {
     this.requestInterceptor= axios.interceptors.request.use((request) => {
      console.log("asdasdadasd"+apiPath)
        this.updateApiCallFor(request.url, true);
        return request;
      });
      this.responseInterceptor= axios.interceptors.response.use(
        (response) => {
          this.updateApiCallFor(response.config.url, false);
          return response;
        },

        (error) => {
          this.updateApiCallFor(error.config.url, false);
          throw error;
        }
      );
    }
    componentWillUnmount(){
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor)



    }

    updateApiCallFor = (url, inProgress) => {
      if (url === apiPath) {
        this.setState({
          pendingApiCall: inProgress,
        });
      }
    };
    render() {
      const { pendingApiCall } = this.state;
      return (
        <div>
          <WrappedComponent pendingApiCall={pendingApiCall} {...this.props}/>
        </div>
      );
    }
  };
}
