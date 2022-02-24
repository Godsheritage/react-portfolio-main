import "./footer.scss";
import {FaArrowUp} from 'react-icons/fa'

const Footer = () => {
  return (
      <div className="footer">
        <p>
          Designed and Developed by <span class="col">'</span>Godsherit
          <span className ="col">age.</span>
        </p>
        <a href="#" className = "goToTop">
          <FaArrowUp/>
        </a>
      </div>
  );
};

export default Footer;
