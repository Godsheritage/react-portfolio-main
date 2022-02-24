import "./offerings.scss";
import {FaCode, FaEdit, FaWordpress, FaIdCard, FaHtml5, FaDesktop } from 'react-icons/fa'

const Offerings = () => {
  return (
    <section className="offerings" id="offerings">
      <div className="heading-space">
        <h1 className="h1">
          <span className="col">My</span> offerings
        </h1>
        <hr className="hr"/>
      </div>
      <div className="offering-container">
        <div className="offering-box">
          <FaCode color = '#FF5823' size = '3rem'/>
          <h3>Web design</h3>
          <p> I develop creative and responsive website layouts📱.</p>
        </div>
        <div className="offering-box">
          <FaDesktop color = '#FF5823' size = '3rem'/>
          <h3>Web App development</h3>
          <p>
            I use various web technologies to develop attractive web apps which
            converts visitors to customers💻
          </p>
        </div>
        <div className="offering-box">
          <FaIdCard color = '#FF5823' size = '3rem'/>
          <h3>UI/UX Design</h3>
          <p>
            I work with the adobe design tools to create high-fidelity designs
            and prototypes📲.
          </p>
        </div>
        <div className="offering-box">
          <FaHtml5 color = '#FF5823' size = '3rem'/>
          <h3>PSD to HTML</h3>
          <p>wether its an idea or a design i can bring it to life 😎</p>
        </div>
        <div className="offering-box">
          {/* <i className="fab fa-wordpress fa-2x"></i> */}
          <FaWordpress color = '#FF5823' size = '3rem'/>
          <h3>Wordpress </h3>
          <p>
            Do you need a website hosted with one of the most popular CMS in the
            world? i've got you covered😉.
          </p>
        </div>
        <div className="offering-box">
          {/* <i className="fas fa-edit fa-2x"></i> */}
          <FaEdit color = '#FF5823' size = '3rem'/>
          <h3>Graphics design</h3>
          <p>
            I create accessible and usable designs which aid business growth🖥.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
