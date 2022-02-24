import "./portfolio.scss";
import projectPicture1 from '../../assets/images/3.png'
import projectPicture2 from '../../assets/images/1.png'
import projectPicture3 from '../../assets/images/2.png'
import projectPicture4 from '../../assets/images/11.png'
import projectPicture5 from '../../assets/images/5.png'
import projectPicture6 from '../../assets/images/6.png'

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <div className="heading-space">
          <h1 className="h1">
            <span className="col">My</span> Portfolio
          </h1>
          <hr className="hr" />
        </div>
        <div className="img-container">
          <div className="card middle">
            <div className="front">
              <img src = {projectPicture1} alt="Project1" />
            </div>
            <div className="back">
              <div className="back-content middle">
                <h2>Repair</h2>
                <span>
                  This is a personal Project of mine. repair is a website for
                  freelance contractors, Built with HTML, CSS, SASS and
                  Javascript.
                </span>
                <div className="btn-main">
                  <button className="btn-3">
                    <a
                      href="https://github.com/Godsheritage/Repair"
                      target="_blank" rel = 'noreferrer'
                    >
                      View Code
                    </a>
                  </button>
                  <button className="btn-3-1">
                    <a
                      href="https://github.com/Godsheritage/Repair"
                      target="_blank" rel = 'noreferrer'
                    >
                      View Application
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card middle">
            <div className="front">
            <img src = {projectPicture2} alt="Project2" />
            </div>
            <div className="back">
              <div className="back-content middle">
                <h2>Movie Fight</h2>
                <span>
                  Movie FIGHT is a visually pleasing web application that allows
                  users to search for their two favourite movies and
                  automatically compares them for you to show you the stronger
                  one 💪
                </span>
                <div className="btn-main">
                  <button className="btn-3">
                    <a
                      href="https://github.com/Godsheritage/Repair"
                      target="_blank" rel = 'noreferrer'
                    >
                      View Code
                    </a>
                  </button>
                  <button className="btn-3-1">
                    <a
                      href="https://github.com/Godsheritage/Repair"
                      target="_blank" rel = 'noreferrer'
                    >
                      View Application
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card middle">
            <div className="front">
            <img src = {projectPicture3} alt="Project3" />
            </div>
            <div className="back">
              <div className="back-content middle">
                <h2>Feedback UI</h2>
                <span>
                  Feedback UI is a visually aesthetic web application that
                  collects feedback data from users, that consists of a number
                  value on a scale of 1 to 10 and a feedback text.{" "}
                </span>
                <div className="btn-main">
                  <button className="btn-3">
                    <a
                      href="https://github.com/Godsheritage/Repair"
                      target="_blank" rel = 'noreferrer'
                    >
                      View Code
                    </a>
                  </button>
                  <button className="btn-3-1">
                    <a
                      href="https://github.com/Godsheritage/Repair"
                      target="_blank" rel = 'noreferrer'
                    >
                      View Application
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card middle">
            <div className="front">
            <img src = {projectPicture3} alt="Project3" />
            </div>
            <div className="back">
              <div className="back-content middle">
                <h2>Feedback UI</h2>
                <span>
                  Feedback UI is a visually aesthetic web application that
                  collects feedback data from users, that consists of a number
                  value on a scale of 1 to 10 and a feedback text.{" "}
                </span>
                <div className="btn-main">
                  <button className="btn-3">
                    <a
                      href="https://github.com/Godsheritage/Repair"
                      target="_blank" rel = 'noreferrer'
                    >
                      View Code
                    </a>
                  </button>
                  <button className="btn-3-1">
                    <a
                      href="https://github.com/Godsheritage/Repair"
                      target="_blank" rel = 'noreferrer'
                    >
                      View Application
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card middle">
            <div className="front">
            <img src = {projectPicture3} alt="Project3" />
            </div>
            <div className="back">
              <div className="back-content middle">
                <h2>Feedback UI</h2>
                <span>
                  Feedback UI is a visually aesthetic web application that
                  collects feedback data from users, that consists of a number
                  value on a scale of 1 to 10 and a feedback text.{" "}
                </span>
                <div className="btn-main">
                  <button className="btn-3">
                    <a
                      href="https://github.com/Godsheritage/Repair"
                      target="_blank" rel = 'noreferrer'
                    >
                      View Code
                    </a>
                  </button>
                  <button className="btn-3-1">
                    <a
                      href="https://github.com/Godsheritage/Repair"
                      target="_blank" rel = 'noreferrer'
                    >
                      View Application
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card middle">
            <div className="front">
            <img src = {projectPicture3} alt="Project3" />
            </div>
            <div className="back">
              <div className="back-content middle">
                <h2>Github Profile Finder</h2>
                <span>
                  Feedback UI is a visually aesthetic web application that
                  collects feedback data from users, that consists of a number
                  value on a scale of 1 to 10 and a feedback text.{" "}
                  Github Finder is a web application for retrieving github profile of users upon search
                  *Integrated Github Rest API 
                </span>
                <div className="btn-main">
                  <button className="btn-3">
                    <a
                      href="https://github.com/Godsheritage/Repair"
                      target="_blank" rel = 'noreferrer'
                    >
                      View Code
                    </a>
                  </button>
                  <button className="btn-3-1">
                    <a
                      href="https://github.com/Godsheritage/Repair"
                      target="_blank" rel = 'noreferrer'
                    >
                      View Application
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
