import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faFacebookF,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>
      <footer class="site-footer">
        <div class="">
          <div class="row">
            <div class=" footerPara col-sm ">
              <h6>About</h6>
              <p class="text-justify">
                FitEase.com <i> an FYP Project </i> is an initiative to
                introduce people around the globe with healthy lifestyfa. This
                web based application recommends customized diet and exercise
                plan to its user on the basis of their input parameters.
              </p>
            </div>
            <div class="footerLinks  col-sm ">
              <h6 className="d-flex justify-content-center">Quick Links</h6>
              <ul class="footer-links ">
                <li className="d-flex justify-content-center">
                  <a href="http://scanfcode.com/about/">Home</a>
                </li>
                <li className="d-flex justify-content-center">
                  <a href="http://scanfcode.com/contact/">Contact Us</a>
                </li>
                <li className="d-flex justify-content-center">
                  <a href="http://scanfcode.com/contribute-at-scanfcode/">
                    About{" "}
                  </a>
                </li>
                <li className="d-flex justify-content-center">
                  <a href="http://scanfcode.com/privacy-policy/">
                    Privacy Policy
                  </a>
                </li>
                <li className="d-flex justify-content-center">
                  <a href="http://scanfcode.com/sitemap/">Contact</a>
                </li>
              </ul>
            </div>
            <div className="FooterForm">
              <form className=" form-group mx-2  ">
                <input
                  className="form-control my-2 px-5"
                  type="email"
                  placeholder="name@email.com"
                  aria-label="Search"
                />
                <textarea
                  className="form-control px-5 "
                  type="text"
                  placeholder="Message"
                  aria-label="Search"
                />
                <button className="btn btn-success my-3 " type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <hr />
        </div>
        <div>
          <div class="row lowerFooter">
            <div class="CopyrightText">
              <p class="copyright-text">
                Copyright &copy; 2022 All Rights Reserved by <spn> </spn>
                <a href="/"> FitEase</a>.
              </p>
            </div>

            <div class=" Socials">
              <ul class="social-icons">
                <li>
                  <a class="facebook" href="#">
                    <FontAwesomeIcon icon={faFacebookF} className="fa" />
                  </a>
                </li>
                <li>
                  <a class="twitter" href="#">
                    <FontAwesomeIcon icon={faTwitter} className="fa" />
                  </a>
                </li>
                <li>
                  <a class="dribbble" href="#">
                    <FontAwesomeIcon icon={faDribbble} className="fa" />
                  </a>
                </li>
                <li>
                  <a class="linkedin" href="#">
                    <FontAwesomeIcon icon={faLinkedin} className="fa" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
