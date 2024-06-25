import "./FooterStyles.css";
import React from "react";
import {FaHome,FaPhone,FaMailBulk,FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>123 Housing Society</p>
              <p>Bangladesh</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </h4>
            <div>
             <p>1-2323-343-23</p>
            </div>
          </div>
          <div className="email">
            <h4>
            <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </h4>
            <div>
              <p>info@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="right">
            <h4>About the Company</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi mollitia nisi delectus illum in, veritatis culpa consectetur quia quisquam commodi.</p>
            <div className="social">
            <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <FaTwitter
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
