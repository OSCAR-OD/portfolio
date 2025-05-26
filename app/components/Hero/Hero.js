/* eslint-disable */
import Link from "next/link"
import './Hero.css';
import Image from "next/image";

const Hero = () => {
    return (
      <section className="hero container">
      <Image
      className="hero__img lazy loading"
      src="/ProfileImage.jpg"
      width={720}
      height={480}
      alt="Profile picture"
    />
      {/* <img className="hero__img" 
      src="/hero.jpg" 
      alt="Profile picture" /> */}
      
      <h2 className="hero__subtitle">Hi, I'm Oscar 👋</h2>
      <h1 className="hero__title">
      WEB DESIGNER <br />
        AND WEB APP DEVELOPER.
        {/* WEBSITE <br />
        AND WEBAPPLICATION DEVELOPER. */}
        {/* FRONT-END <br />
        WEB DEVELOPER. */}
      </h1>
      <p className="hero__description">
        A passionate <strong>Fullstack </strong> Web Designer and 
        Web Application developer and specialized in building 
        stunning pixel-perfect interactive websites/applications.
      </p>
    
     <a
        className="hero__btn btn"
        href="https://www.linkedin.com/in/oscar-deb-2b028b21b/"
        target="_blank"
        >React Out</a>
    </section>
    );
}

export default Hero;