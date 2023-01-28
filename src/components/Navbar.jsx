import "../styles/component/navbar.css";
import Logo from "../assests/Instapacket_logo.png";
import { FaBell, FaUserCircle } from "react-icons/fa";


export default function Navbar() {
    return (
        <div id="navbar">
            <img src={Logo} alt="man deliverying parcel" className="logo"></img>
            <div className="navbar-icons">
                <FaBell className='FaIcon' />
                <FaUserCircle className='FaIcon' />
            </div>
        </div>
    )
};