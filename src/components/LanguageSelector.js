import React from 'react';
import {withTranslation} from 'react-i18next';
import {ChangeLanguage }from '../api/apiCalls';

const LanguageSelector = (props) => {
    
    const onChangeLanguage = (language) => {
    const { i18n } = props;
    i18n.changeLanguage(language);
    ChangeLanguage(language);

  };
    return (
        <div className="container">
        <img
          src="https://www.countryflags.io/tr/shiny/24.png"
          alt="Turkis Shiny"
          onClick={() => {
            onChangeLanguage("tr");
          }}
          style={{cursor:'pointer'}}

        ></img>
        <img
          src="https://www.countryflags.io/us/shiny/24.png"
          alt="USA Shiny"
          onClick={() => {
            onChangeLanguage("en");
          }}
          style={{cursor:'pointer'}}
        ></img>
      </div>
    );
};

export default withTranslation()(LanguageSelector) ;