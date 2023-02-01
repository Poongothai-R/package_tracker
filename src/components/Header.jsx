import "../styles/component/header.css";
import Logo from "../assests/Instapacket_logo.png";
import { FaBell, FaUserCircle } from "react-icons/fa";
import {Link} from "react-router-dom";


export default function Header() {
    return (
        <div id="header">
            <Link to="/" ><img src={Logo} alt="man delivering parcel" className="logo"></img></Link>
            <div className="navbar-icons">
                <FaBell className='FaIcon' />
                <FaUserCircle className='FaIcon' />
            </div>
        </div>
    )
};