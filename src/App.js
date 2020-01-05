import React from "react";
import "./sass/main.scss";

// Assets
import triangleLogo from "./images/triangle-logo.png";
import userImage from "./images/user-image.png";
import view1 from "./images/view1.jpeg";
import view2 from "./images/view2.jpeg";
import view3 from "./images/view3.jpeg";

import user1 from "./images/user1.jpeg";
import user2 from "./images/user2.jpeg";
import user3 from "./images/user3.jpeg";
import user4 from "./images/user4.jpeg";
import user5 from "./images/user5.jpeg";

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

            <div className="detail">
              <div className="description">
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis facere veritatis totam harum cupiditate officiis
                  voluptate laborum amet quo quam!
                </p>

                <p className="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Culpa nesciunt sint eos doloribus rem quod fugiat blanditiis
                  expedita necessitatibus veritatis?
                </p>

                <ul className="list">
                  <li className="list__item">Close to beach</li>
                  <li className="list__item">Lots of good birds</li>
                  <li className="list__item">Free Tele!</li>
                  <li className="list__item">AC and Heating</li>
                  <li className="list__item">English Speaking</li>
                  <li className="list__item">Free Meals</li>
                  <li className="list__item">Forest for days</li>
                </ul>

                <div className="recommend">
                  <p className="recommend__count">
                    Billy and 4 of his best mates think you should go travel.
                  </p>
                  <div className="recommend__friends">
                    <img
                      src={user1}
                      alt="Recommend friend user1"
                      className="recommend__photo"
                    />
                    <img
                      src={user3}
                      alt="Recommend friend user3"
                      className="recommend__photo"
                    />
                    <img
                      src={user4}
                      alt="Recommend friend user4"
                      className="recommend__photo"
                    />
                    <img
                      src={user2}
                      alt="Recommend friend user2"
                      className="recommend__photo"
                    />
                  </div>
                </div>
              </div>

              <div className="user-reviews">
                <figure className="review">
                  <blockquote className="review__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum, enim!
                  </blockquote>
                  <figcaption className="review__user">
                    <img
                      src={user1}
                      alt="pic of user1"
                      className="review__photo"
                    />
                    <div className="review__user-box">
                      <p className="review__user-name">Nick Pat</p>
                      <p className="review__user-date">Feb 10, 2019</p>
                    </div>
                    <div className="review__rating">6.4</div>
                  </figcaption>
                </figure>

                <figure className="review">
                  <blockquote className="review__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum, enim!
                  </blockquote>
                  <figcaption className="review__user">
                    <img
                      src={user2}
                      alt="pic of user1"
                      className="review__photo"
                    />
                    <div className="review__user-box">
                      <p className="review__user-name">Jane Dick</p>
                      <p className="review__user-date">Nov 11, 2018</p>
                    </div>
                    <div className="review__rating">7.8</div>
                  </figcaption>
                </figure>

                <button className="btn-inline">
                  Show all <span>&rarr;</span>{" "}
                </button>
              </div>

            </div>
              <div className="cta">
                <h2 className="cta__book-now">
                  Good news we have a room free!
                </h2>
              <button className="btn">
                <span className="btn__visible">Book now!</span>
                <span className="btn__invisible">Only 4 rooms left!</span>
                </button>
              </div>
          </main>
        </div>
      </div>
    );
  }
}
