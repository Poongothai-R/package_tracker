import "../styles/component/footer.css";
import { FaTwitter, FaInstagram } from "react-icons/fa";

// good
export default function Footer() {
  return (
    <div className="footer-page">
      <div className="footer-top">
        <a href="https://www.twitter.com" rel="noreferrer" target="_blank">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" rel="noreferrer" target="_blank">
          <FaInstagram />
        </a>
      </div>
      <span>© InstaPacket 2023</span>
    </div>
  );
}
