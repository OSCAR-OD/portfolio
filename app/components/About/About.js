/* eslint-disable */
import Link from "next/link"
import './About.css';
import Image from "next/image";
const About = () => {
    return (
      <section id="about" className="about container section">
        <div className="about__content">
          <h2 className="about__title">About</h2>
          <p className="about__description">
            Hello there! I'm Oscar, a
            <strong> Fullstack </strong> Website designer 
            and Web Applicatation developer 
           from Bangladesh. I am studying CSE in AIUB 
           and passionate to do exciting project for 
           this world. 
          </p>
          <p className="about__description">
            People who know me say I'm obsessed, that's fair, I am very driven
            and love learning new things.
          </p>
          {/* <p className="about__description">
            I recently created a YouTube channel called
            <a>Slaying The Dragon</a> where I upload videos on front-end web
            development topics.
          </p> */}
          <hr className="about__hr" />
          <h3 className="about__subtitle">Technologies</h3>
          <div className="about__ul-container">
            {/* <ul className="about__ul">
              <li className="about__list">JavaScript</li>
              <li className="about__list">Typescript</li>
              <li className="about__list">PHP</li>
            </ul> */}
            <ul className="about__ul">
              <li className="about__list">ReactJS</li>
              <li className="about__list">NextJS</li>
              <li className="about__list">Laravel</li>
            </ul>
            <ul className="about__ul">
              <li className="about__list">WordPress</li>
              <li className="about__list">Figma</li>
              <li className="about__list">TailwindCSS</li>
            </ul>
            {/* <ul className="about__ul">
              <li className="about__list">Laravel</li>
              <li className="about__list">NodeJS</li>
              <li className="about__list">ExpressJS</li>
            </ul> */}
          </div>
        </div>
        <div className="about__img-wrapper">
          {/* <Image
            className="about__img lazy loading"
            src="https://via.placeholder.com/720"
            data-src="/oscar.png"
            alt="Profile picture"
          ></Image> */}
      <Image
      className="about__img lazy loading"
      src="/oscardeb.jpg"
      width={400}
      height={460}
      alt="Profile picture"
    />
        </div>
      </section>
    );
}

export default About;