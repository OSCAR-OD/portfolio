import Link from "next/link"
import './Work.css';
import Image from "next/image";

const Work = () => {
    return (
      <section className="work container section">
      <h2 className="work__title">Projects</h2>
      <p className="work__description">
      Projects that demonstrate my coding skills.
      </p>
      <div className="work__container">
        {/* <!-- Project 1 --> */}
        <h3 className="work__project-title">CityHub</h3>
        <div className="work__img-wrapper work__image1">
          
        <Image
      className="lazy loading mbImg"
      src="/Mern.png"
      width={500}
      height={350}
      alt="Next.Js and Express.js Project "
    />
          
        </div>
        <div className="work__project work__content1">
          <h3 className="work__project-subtitle">CityHub</h3>
          <p className="work__project-description1">
          Tech Stack: (Main Website) Next.js | (Dashboard) React | 
          Redux Toolkit | RTK Query | (Backend) Express.js |
           MongoDB | CSS | JWT | Cloudinary
             </p>
          <p className="work__project-description2">
          CityHub contains Features like Employee management, 
          User Role based accebility, Notification system, 
           multi page form submission, General User 
          management, Profile image 
          upload and many features added.
         </p>
          <a className="btn work__project-btn" href="https://github.com/OSCAR-OD/CityHub-Next.js-Frontend" target="_blank" >Check</a>
        </div>
        {/* <!-- Project 2 --> */}
        <h3 className="work__project-title">Draze Force</h3>
        <div className="work__img-wrapper work__image2">
          {/* <img
            className="lazy loading"
            src="https://via.placeholder.com/900"
            data-src="/drazeforce.png"
            alt="Draze Force website"
          /> */}
             
             <Image
              className="lazy loading"
              src="/sdpm.png"
              width={500}
              height={350}
              alt="Next.js Project"
              />
        </div>
        <div className="work__project work__content2">
          <h3 className="work__project-subtitle">SDPM + SQAT</h3>
          <p className="work__project-description1">
            Sunt sint labore officia irure. Dolore pariatur nisi deserunt sunt
            exercitation excepteur do reprehenderit fugiat Lorem sint ut.
          </p>
          <p className="work__project-description2">
            Mollit ipsum mollit magna occaecat eiusmod sint fugiat est non
            adipisicing esse fugiat deserunt minim. Enim occaecat velit eu non
            amet nostrud officia duis.
          </p>
          <a className="btn work__project-btn" href="https://github.com/OSCAR-OD/Software-Development-Project-Management" target="_blank" >Check</a>
        </div>
        {/* <!-- Project 3 --> */}
        <h3 className="work__project-title">SmartCity</h3>
        <div className="work__img-wrapper work__image3">
          {/* <img
            className="lazy loading"
            src="https://via.placeholder.com/900"
            data-src="/artren.png"
            alt="Artren website"
          /> */}
          <Image
           className="lazy loading"
           src="/Laravel.png"
           width={500}
           height={350}
           alt="Next.js Project"
           />
        </div>
        <div className="work__project work__content3">
          <h3 className="work__project-subtitle">SmartCity</h3>
          <p className="work__project-description1">
          Tech Stacks: (Frontend) React | (Backend) Laravel | CSS 
            </p>
          <p className="work__project-description2">
          SmartCity is a web application that uses Laravel and
           React to provide a modern and user-friendly interface
            for providing necessary services to city dwellers.
          </p>
          <a className="btn work__project-btn" href="https://github.com/OSCAR-OD/SmartCity-a-Laravel-React-Project" target="_blank" >Check</a>
        </div>
        {/* <!-- Project 4 --> */}
        <h3 className="work__project-title">Platform Pro</h3>
        <div className="work__img-wrapper work__image4">
          {/* <img
            className="lazy loading"
            src="https://via.placeholder.com/900"
            data-src="/platformpro.png"
            alt="Platform Pro website"
          /> */}
         <Image
               className="lazy loading"
               src="/WordPress.png"
               width={500}
               height={350}
               alt="Next.js Project"
             />
        </div>
        <div className="work__project work__content4">
          <h3 className="work__project-subtitle">WordPress Projects</h3>
          <p className="work__project-description1">
            Labore magna ut non labore Lorem nisi culpa sint et quis sint.
            Enim pariatur deserunt do ad exercitation.
          </p>
          <p className="work__project-description2">
            Ea ut non cupidatat consequat sint elit ipsum culpa dolor cillum
            commodo. Do esse excepteur cillum deserunt duis incididunt. Eu
            tempor ullamco aliqua consectetur incididunt anim dolor sunt
            laboris adipisicing cupidatat sint.
          </p>
          <a className="btn work__project-btn" href="https://github.com/OSCAR-OD/Wordpress-Knowledeges" target="_blank" >Check</a>
        </div>
        {/* <!-- Project 5 --> */}
        {/* <h3 className="work__project-title">Wallys Vegan</h3>
        <div className="work__img-wrapper work__image5">
          <img
            className="lazy loading"
            src="https://via.placeholder.com/900"
            data-src="/wallysvegan.png"
            alt="Wallys Vegan website"
          />
        </div>
        <div className="work__project work__content5">
          <h3 className="work__project-subtitle">Wallys Vegan</h3>
          <p className="work__project-description1">
            Sunt sint labore officia irure. Dolore pariatur nisi deserunt sunt
            exercitation excepteur do reprehenderit fugiat Lorem sint ut.
          </p>
          <p className="work__project-description2">
            Mollit ipsum mollit magna occaecat eiusmod sint fugiat est non
            adipisicing esse fugiat deserunt minim. Enim occaecat velit eu non
            amet nostrud officia duis.
          </p>
          <a className="btn work__project-btn" href="#">Website</a>
        </div> */}
        {/* <!-- Project 6 --> */}
        {/* <h3 className="work__project-title">Old Portfolio</h3>
        <div className="work__img-wrapper work__image6">
          <img
            className="lazy loading"
            src="https://via.placeholder.com/900"
            data-src="/portfolio.png"
            alt="Portfolio website"
          />
        </div> */}
        {/* <div className="work__project work__content6">
          <h3 className="work__project-subtitle">Old Portfolio</h3>
          <p className="work__project-description1">
            Aliquip eu ad est reprehenderit veniam irure exercitation in velit
            enim ipsum.
          </p>
          <p className="work__project-description2">
            Elit est amet quis incididunt officia velit eiusmod do amet. Sint
            non qui nulla sit ex cillum non pariatur velit proident ut aliqua
            fugiat incididunt id minim.
          </p>
          <a className="btn work__project-btn" href="#">Website</a>
        </div> */}
      </div>
    </section>
    );
}

export default Work;