import "./header.scss";
import Typical from "react-typical";
// import {React } "../../assets/Godsheritage Adeoye's CV.pdf";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const mainMenu = document.querySelector('.mainMenu');

  const open = () => {
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
  };
  const close = () => {
    mainMenu.style.top = "-100%";
  };

  return (
    <section className="main-section" id = 'header'>
      <nav>
        <div className="logo">
          <h1>
            <span className="col">'</span>Godsherit
            <span className="col">age.</span>
          </h1>
        </div>
        <div className="openMenu">
          <FaBars onClick={open} />
        </div>
        <ul className="mainMenu">
          <li className="active">
            <a href="#header">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#offerings">SERVICES</a>
          </li>
          <li>
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
          <div className="closeMenu">
            <FaTimes onClick={close} />
          </div>
        </ul>
      </nav>
      <div className="main">
        <div className="main-container">
          <div className="main-sub-container">
            <h3>
              Hello I'M <span className="col">'</span>Godsherit
              <span className="col">age👨‍💻</span>
            </h3>
            <h1 className="typed-words">
              {" "}
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "Ethusiastic Dev😎",
                  2000,
                  "Angular Developer💻",
                  2000,
                  "React Developer💻",
                  2000,
                  "UI/UX Designer📱",
                  2000,
                ]}
              />
            </h1>
            <p>Knack for design and front end operations.</p>
            <div className="btn-main">
              <button className="btn-1">
                <a href="#contact">Hire Me</a>
              </button>
              {/* <Button text = 'hello' className = 'btn-1'/> */}
              <a
                href="Godsheritage Adeoye CV.pdf"
                download="Godsheritage's resume"
              >
                <button className="btn-1-1">Get My Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture-bg">
            <div className="profile-picture"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
