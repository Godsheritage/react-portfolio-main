import "./projects.scss";
import projectPicture1 from "../../assets/images/3.png";
import projectPicture2 from "../../assets/images/1.png";
import projectPicture3 from "../../assets/images/2.png";
import projectPicture4 from "../../assets/images/11.png";
import projectPicture5 from "../../assets/images/5.png";
import projectPicture6 from "../../assets/images/6.png";

const Projects = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <div className="heading-space">
          <h1 className="h1">
            <span className="col">My</span> Projects
          </h1>
          <hr className="hr" />
        </div>
        <div className="img-container">
          <div className="card middle">
            <div className="front">
              <img src={projectPicture1} alt="Project1" />
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
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Code
                    </a>
                  </button>
                  <button className="btn-3-1">
                    <a
                      href="https://godsheritage.github.io/Repair/"
                      target="_blank"
                      rel="noreferrer"
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
              <img src={projectPicture2} alt="Project2" />
            </div>
            <div className="back">
              <div className="back-content middle">
                <h2>Shoe Store</h2>
                <span>
                  Shoe store is a visually appealing E-commerce web application,
                  where users order can order shoes of their choice. *Developed
                  Front End experience using React JS, Context, And SASS *Built
                  Application with React while managing state with the
                  useContext API *Implemented the React Router DOM to allow
                  nested routing within application components 💪
                </span>
                <div className="btn-main">
                  <button className="btn-3">
                    <a
                      href="https://github.com/Godsheritage/e-commerce-store-app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Code
                    </a>
                  </button>
                  <button className="btn-3-1">
                    <a
                      href="https://shoe-store-one.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
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
              <img src={projectPicture3} alt="Project3" />
            </div>
            <div className="back">
              <div className="back-content middle">
                <h2>Portfolio Website</h2>
                <span>
                  * Developed Front End experience using React JS, Redux, And
                  SASS *Built Application with React while managing sate through
                  Asynchronous Redux actions using Redux Thunk.{" "}
                </span>
                <div className="btn-main">
                  <button className="btn-3">
                    <a
                      href="https://github.com/Godsheritage/react-portfolio-main"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Code
                    </a>
                  </button>
                  <button className="btn-3-1">
                    <a
                      href="https://react-portfolio-ruddy.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
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
              <img src={projectPicture5} alt="Project5" />
            </div>
            <div className="back">
              <div className="back-content middle">
                <h2>Feedback UI</h2>
                <span>
                  Feedback UI is a visually aesthetic web application that
                  allows users to add, update and delete feedback. It uses a
                  mock REST api with json-server.{" "}
                </span>
                <div className="btn-main">
                  <button className="btn-3">
                    <a
                      href="https://github.com/Godsheritage/feedback-interface-application"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Code
                    </a>
                  </button>
                  <button className="btn-3-1">
                    <a
                      href="https://feedback-interface-application.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
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
              <img src={projectPicture4} alt="Project4" />
            </div>
            <div className="back">
              <div className="back-content middle">
                <h2>House Marketplace</h2>
                <span>
                  * Developed Front End experience using React JS *Integrated
                  firebase v9 in order to add authenticatin and file storage
                  functionalities * Implemented Google Geo coding to get
                  longitude and latitude of house listings .{" "}
                </span>
                <div className="btn-main">
                  <button className="btn-3">
                    <a
                      href="https://github.com/Godsheritage/house-marketing-app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Code
                    </a>
                  </button>
                  <button className="btn-3-1">
                    <a
                      href="https://house-marketing-app-kappa.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
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
              <img src={projectPicture6} alt="Project6" />
            </div>
            <div className="back">
              <div className="back-content middle">
                <h2>Github Profile Finder</h2>
                <span>
                  Developed Front End experience using React JS, and used
                  reducers for state management *integrated Github REST API to
                  search for user profiles based on their Github Username *
                  interated tailwind CSS and daisy UI s
                </span>
                <div className="btn-main">
                  <button className="btn-3">
                    <a
                      href="https://github.com/Godsheritage/github-profile-finder"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Code
                    </a>
                  </button>
                  <button className="btn-3-1">
                    <a
                      href="https://github-profile-finder-kappa.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
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

export default Projects;
