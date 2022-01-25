import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer-container">
      <h3>&copy;{new Date().getFullYear()} Motivity</h3>
      <a href="https://www.youtube.com/" className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/" className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}
