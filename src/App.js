import React from "react";
import "./sass/main.scss";

// Assets
import triangleLogo from "./img/triangle-logo.png";
import userImage from "./img/user-image.png";

import PlaneIcon from "./Icons/Airplane";
import Bookmark from "./Icons/Bookmark";
import Bubbles from "./Icons/Bubbles";
import Chevron from "./Icons/ChevronThinRight";
import Heart from "./Icons/Heart";
import Search from "./Icons/Search";
import Key from "./Icons/Key";

export default class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="container">
        <header className="header">
          <img src={triangleLogo} alt="logo" className="logo" />

          <form action="#" className="search">
            <input
              className="search__input"
              type="text"
              placeholder="Search hotels"
            />
            <button className="search__button">
              <Search width="40px" height="40px" className="search__icon" />
            </button>
          </form>

          <nav className="user-nav">
            <div className="user-nav__icon-box">
              <Heart className="user-nav__icon" />
              <span className="user-nav__notification">7</span>
            </div>

            <div className="user-nav__icon-box">
              <Key className="user-nav__icon" />
              <span className="user-nav__notification">1</span>
            </div>

            <div className="user-nav__user">
              <img src={userImage} alt="" className="user-nav__user-photo" />
              <span className="user-nav__user-name">Kahil</span>
            </div>
          </nav>
        </header>

        <div className="content">
          <nav className="sidebar">navigation</nav>

          <main className="hotel-view">Hotel view</main>
        </div>
      </div>
    );
  }
}
