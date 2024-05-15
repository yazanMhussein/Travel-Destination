import './Footer.css';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="social-media">
          <a href="https://www.linkedin.com/in/mohammad-farwan/?originalSubdomain=jo" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/mohammad-farwan/?originalSubdomain=jo" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/in/mohammad-farwan/?originalSubdomain=jo" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        </div>
        <div className="author">Author: Mohammad Alfarwan</div>
      </footer>
    </>
  );
}

export default Footer;