import './about.scss'


const About = () => {
    return  <section className  = "about" id = "about">
    <div className ="abt-heading">
        <h1 className  = "h1">About <span className ="col">Me</span></h1>
        <hr className ="hr"/>
    </div>
    <div className ="about-container">
        <div className ="img"></div>
        <div className  = "about-content">
            <p>Highly motivated Front-End Developer with experience providing high-impact web solutions for diverse industry organizations. Skilled in designing, developing and testing multiple web-based applications incorporating a range of technologies. Aspiring to combine broad background with strong technical skills to excel as a Front-End Engineer.</p>
            <div className  = 'highlight-sect'>
                <h3>Here are a Few Highlights:</h3>
                <div className  = "highlight">
                    <div className ="highlight-icon">
                        <p>👉      Web development</p>
                    </div>
                    <div className ="highlight-icon">
                        <p>👉      web design</p>
                    </div>
                    <div className ="highlight-icon">
                        <p>👉      UI/UX design</p>
                    </div>
                    <div className ="highlight-icon">
                        <p>👉      Wordpress</p>
                    </div>
                    
                </div>
            </div>
            <div className ="btn-main">
                <button className ="btn-2"><a href = "#contact">Hire Me</a></button>
                <a href ="Godsheritage Adeoye CV.pdf" download = "Godsheritage's resume">
                    <button className ="btn-2-1" >Get My Resume</button>
                </a>
            </div>
        </div>
    </div>
</section>;
};
  
  export default About;
  