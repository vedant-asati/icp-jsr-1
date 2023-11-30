import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import "../main.css";
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faNoteSticky
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import "./note.png";

function Header() {
  return (
    <header>
      <h1>
        {/* <img src= "../../assets/note.png" alt="🙂" /> */}
        <FontAwesomeIcon className="header-icon" icon={faNoteSticky} />
        D Noter
      </h1>
    </header>
  );
}

export default Header;
