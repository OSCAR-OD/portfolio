"use client";
import Link from "next/link";
import "./header.css";
import { useState } from "react";
//import MobileNav from "../MobileNav/MobileNav";
const Header = () => {
  <link rel="icon" href="/logo.png" type="image" />;
  // const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // const handleMobileNavClick = () => {
  //   setIsMobileNavOpen(!isMobileNavOpen);
  // };

  // const DriveLink = () => (
  //     <Link href="https://facebook.com">
  //     </Link>
  //  );

  return (
    <header className="header container">
      {/* <link rel="icon" 
href="./logo.icon" 
type="image"

/> */}
      <nav>
        <ul className="header__menu">
          <li>
            <a className="header__link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="header__link" href="#featured">
              Work
            </a>
          </li>
          <li>
            <a className="header__link" href="#contact">
              Contact
            </a>
          </li>
          <li className="header__line"></li>
          {/* <li>
            <button
              aria-label="theme-toggle btn"
              id="theme-toggle"
              className="header__sun"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
                />
              </svg>
            </button>
          </li> */}
          <li>
            <a
              className="header__resume btn"
              href="https://drive.google.com/file/d/1pbmoIH6oQUoUVF8Mtp4LO0-dxi1RLoOP/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>

            {/* <Link className="header__resume btn" href="https://facebook.com" target="_blank">Resume</Link>
             */}
          </li>
        </ul>
        <button
          aria-label="mobile nav button"
          className="header__bars"
          // onClick={handleMobileNavClick}
          href="https://drive.google.com/file/d/1ZWSvKmxWQsS7T55qfkH-0Z_fc7Zio1mj/view?usp=sharing"
          target="_blank"
          //onClick={DriveLink}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              // fill-rule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </nav>

      {/* {isMobileNavOpen && <MobileNav />} */}
    </header>
  );
};

export default Header;
