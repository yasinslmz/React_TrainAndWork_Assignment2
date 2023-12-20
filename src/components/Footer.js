import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }


  handleSubscribe = (e) => {
    e.preventDefault();
    this.setState({ email: "" });
    alert("Sizinle etkileşime geçeceğiz.");
    
  };
  handleInputChange = (e) => {
    this.setState({ email: e.target.value });
  };

  render() {
    return (
      <>
        {/*====================  footer area ====================*/}
        <div className="footer-area">
          <div className="footer-newsletter-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 offset-lg-1 text-center">
                  <div className="footer-newsletter-widget">
                    <h2 className="footer-newsletter-widget__title">
                      Sign Up &amp; Get 20% Discount Now
                    </h2>
                    <p className="footer-newsletter-widget__text">
                      Your Satisfaction defines our Success
                    </p>
                    <div className="footer-newsletter-widget__form-wrapper">
                      <form
                        id="mc-form"
                        className="mc-form"
                        onSubmit={this.handleSubscribe}
                      >
                        <input
                          type="email"
                          placeholder="Your Email"
                          required=""
                          value={this.state.email}
                          onChange={this.handleInputChange}
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        />
                        <button
                          type="submit"
                          className="theme-button theme-button--alt theme-button--subscribe"
                        >
                          SUBSCRIBE US
                        </button>
                      </form>
                    </div>
                    {/* mailchimp-alerts Start */}
                    <div className="mailchimp-alerts mailchimp-alerts--dark">
                      <div className="mailchimp-submitting" />
                      {/* mailchimp-submitting end */}
                      <div className="mailchimp-success" />
                      {/* mailchimp-success end */}
                      <div className="mailchimp-error" />
                      {/* mailchimp-error end */}
                    </div>
                    {/* mailchimp-alerts end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright-area footer-copyright-area--two">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="copyright-text copyright-text--two text-center text-md-start">
                    © Robin by <a href="#">HasTech</a>. All Right Reserved 2019
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="footer-widget text-center text-md-end mb-0">
                    <ul className="footer-widget__social-links footer-widget__social-links--dark">
                      <li>
                        <a href="#" title="Facebook">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Twitter">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="LinkedIn">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="LinkedIn">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Youtube">
                          <i className="fa fa-youtube-play" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of footer area  ====================*/}
      </>
    );
  }
}
