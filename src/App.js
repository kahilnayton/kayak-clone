import React from "react";
import triangleLogo from './img/triangle-logo.png'
import "./sass/main.scss";

export default class App extends React.Component {
  state = {}

  render() {
    return (
      <div className="container">
        <header className="header">
          <img src={triangleLogo} alt="logo" className="logo" />
          <form
            action=""
            typle="text"
            className="search__input"
            placeholder="Search hotels"
          >
            <button className="search__button">
              {/* <svg className="search-icon">
                <use xlink:href={sprite}></use>
              </svg> */}

            </button>


          </form>
        <div className="content">
            <nav className="sidebar">navigation</nav>

            <main className="hotel-view">Hotel view</main>
          </div>
        </header>
      </div>
    );
  }
}


