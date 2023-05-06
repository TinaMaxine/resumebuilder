import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Login from './Login';
import ContactUs from './ContactUs';
// import './LandingPage.css';

class LandingPage extends React.Component {
  state = {
    isLoginOpen: false,
    isContactUsOpen: false
  }

  openLogin = () => {
    this.setState({
      isLoginOpen: true,
      isContactUsOpen: false
    })
  }

  closeLogin = () => {
    this.setState({
      isLoginOpen: false
    })
  }

  openContactUs = () => {
    this.setState({
      isContactUsOpen: true,
      isLoginOpen: false
    })
  }

  closeContactUs = () => {
    this.setState({
      isContactUsOpen: false
    })
  }

  render() {
    return (
      <div className="landing-page-container">
        {this.state.isLoginOpen && <Login onClose={this.closeLogin} />}
        {this.state.isContactUsOpen && <ContactUs onClose={this.closeContactUs} />}
        <Header onLoginClick={this.openLogin} onContactClick={this.openContactUs} />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
