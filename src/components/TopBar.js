import React, { Component } from "react";
import Logo from "../assest/logo.png";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { Authentication } from "../shared/AuthenticationContext";

class TopBar extends Component {
  static contextType = Authentication;
  render() {
    const { t } = this.props;

    const { state, onLogoutSuccess } = this.context;
    const { username, isLoggedIn } = state;
    let links = (
      <ul className="navbar-nav ml-auto">
        <li>
          <Link className="nav-link" to="/signup">
            {t("Sign Up")}
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/login">
            {t("Login")}
          </Link>
        </li>
      </ul>
    );
    if (isLoggedIn) {
      links = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-link">
            <Link to={`/user/${username}`}>{username}</Link>
          </li>
          <li
            className="nav-link"
            onClick={onLogoutSuccess}
            style={{ cursor: "pointer" }}
          >
            <Link>{t("Logout")}</Link>
          </li>
        </ul>
      );
    }
    return (
      <div className="shadow-sm bg-light mb-2">
        <nav className="navbar navbar-light container navbar-expand">
          <Link className="navbar-brand" to="/">
            <img src={Logo} width="80" alt="sehirEfsaneleri logo" />
            ŞehirEfsaneleri
          </Link>
          {links}
        </nav>
      </div>
    );
  }
}

export default withTranslation()(TopBar);
