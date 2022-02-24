import "./footer.scss";
import {FaArrowUp} from 'react-icons/fa'

const Footer = () => {
  return (
      <div className="footer">
        <p>
          Designed and Developed by <span class="col">'</span>Godsherit
          <span className ="col">age.</span>
        </p>
        <button>
          <a href="#header" className = "goToTop">
            <FaArrowUp/>
          </a>
        </button>
      </div>
  );
};

export default Footer;
