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
                Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative
                to help the upcoming programmers with the code. Scanfcode
                focuses on providing the most efficient code or snippets as the
                code wants to be simple. We will help programmers build up
                concepts in different programming languages that include C, C++,
                Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and
                Algorithm.
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
                Copyright &copy; 2017 All Rights Reserved by
                <a href="#">Scanfcode</a>.
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
