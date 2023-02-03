import "../styles/component/header.css";
import Logo from "../assests/Instapacket_logo.png";
import { FaBell, FaUserCircle } from "react-icons/fa";
import {Link} from "react-router-dom";
import { useTranslation } from "react-i18next";
import SwedishFlag from "../assests/swedishFlag.png";

export default function Header() {

    const { i18n } = useTranslation();
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    return (
        <div id="header">
            <Link to="/" ><img src={Logo} alt="man delivering parcel" className="logo"></img></Link>
            <div className="header-icons" >
                <img src = {SwedishFlag}  className="FaIcon" onClick={() => changeLanguage('sw')} alt="translation image for swedish"/>
                <FaBell className="FaIcon" />
                <FaUserCircle className="FaIcon"/>
            </div>
        </div>
    )
};