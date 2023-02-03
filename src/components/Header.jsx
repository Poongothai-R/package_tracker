import "../styles/component/header.css";
import Logo from "../assests/Instapacket_logo.png";
import {FaBell, FaUserCircle} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";


export default function Header() {

    const {i18n} = useTranslation();

    return (
        <div id="header">
            <Link to="/"><img src={Logo} alt="man delivering parcel" className="logo"></img></Link>
            <div className="header-icons">
                <select className="translate" onChange={(e)=>i18n.changeLanguage(e.target.value)}>
                    <option value='en'> English</option>
                    <option value='sw'>Swedish</option>
                </select>
                <FaBell className="FaIcon"/>
                <FaUserCircle className="FaIcon"/>
            </div>
        </div>
    )
};