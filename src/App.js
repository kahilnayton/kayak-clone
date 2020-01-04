import React from "react";
import "./sass/main.scss";

// Assets
import triangleLogo from "./images/triangle-logo.png";
import userImage from "./images/user-image.png";
import view1 from "./images/view1.jpeg";
import view2 from "./images/view2.jpeg";
import view3 from "./images/view3.jpeg";

import PlaneIcon from "./Icons/Airplane";
import Bookmark from "./Icons/Bookmark";
import Map2 from "./Icons/Map2";
import StarFull from "./Icons/StarFull";
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
          <images src={triangleLogo} alt="logo" className="logo" />

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
          <nav className="sidebar">
            <ul className="side-nav">
              <li className="side-nav__item side-nav__item--active">
                <a href="#" className="side-nav__link">
                  <Chevron className="side-nav__icon" />
                  <span>Hotel</span>
                </a>
              </li>
              <li className="side-nav__item">
                <a href="#" className="side-nav__link">
                  <Bubbles className="side-nav__icon" />
                  <span>Bubbles</span>
                </a>
              </li>
              <li className="side-nav__item">
                <a href="#" className="side-nav__link">
                  <StarFull className="side-nav__icon" />
                  <span>Star</span>
                </a>
              </li>
              <li className="side-nav__item">
                <a href="#" className="side-nav__link">
                  <Map2 className="side-nav__icon" />
                  <span>Maps</span>
                </a>
              </li>
            </ul>

            <div className="legal">&copy; 2020 Kahil Nayton</div>
          </nav>

          <main className="hotel-view">
            <div className="gallery">
              <figure className="gallery__item">
                <img
                  src={view1}
                  alt="photo of view 1"
                  className="gallery__photo"
                />
              </figure>
              <figure className="gallery__item">
                <img
                  src={view2}
                  alt="photo of view 2"
                  className="gallery__photo"
                />
              </figure>
              <figure className="gallery__item">
                <img
                  src={view3}
                  alt="photo of view 3"
                  className="gallery__photo"
                />
              </figure>
            </div>
            <div className="overview">
              <h1 className="overview__heading">Hotel Mar del Plata</h1>
              <div className="overview__stars">
                <StarFull className="overview__icon-star" />
                <StarFull className="overview__icon-star" />
                <StarFull className="overview__icon-star" />
                <StarFull className="overview__icon-star" />
                <StarFull className="overview__icon-star" />
              </div>

              <div className="overview__location">
                <PlaneIcon className="overview__icon-location" />
                <button className="btn-inline">Argentina</button>
              </div>

              <div className="overview__rating">
                <div className="overview__rating-average">8.6</div>
                <div className="overview__raiting-count">20 votes</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
