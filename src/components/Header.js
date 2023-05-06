import React, { useState } from "react";
import Login from "./Login";
import ContactUs from "./ContactUs";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
    setShowContactUs(false);
  };

  const handleContactUsClick = () => {
    setShowContactUs(!showContactUs);
    setShowLogin(false);
  };

  const handleCloseClick = () => {
    setShowLogin(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Resume Builder</h1>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <button className="header__button" onClick={handleLoginClick}>
                Sign In
              </button>
              {showLogin && <Login showLogin={showLogin} onCloseClick={handleCloseClick} />}
            </li>
            <li className="header__item">
              <button className="header__button" onClick={handleContactUsClick}>
                Contact Us
              </button>
              {showContactUs && <ContactUs showContactUs={showContactUs} onCloseClick={handleCloseClick}/>}
            </li>
            {/* <li className="header__item">
              <button className="header__button" onClick={handleLoginClick}>
                Sign In
              </button>
              {showLogin && <Login showLogin={showLogin} onCloseClick={handleCloseClick} />}
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
