import style from "./MainContent.module.scss";

export default function MainContent() {
  return (
    <section className={style.mainContainer}>
      <h1 className={style.mainTitle}>Matthias Urgu</h1>
      <p className={style.mainSubtitle}>Junior front-end developer.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, voluptatum!</p>
      <div className={style.imgLogo}>
        <a href="https://github.com/MatthiasUrgu/">
          <img
            className={style.logo}
            src="/assets/img/logo_github.svg"
            alt="Github"
          />
        </a>
        <a href="https://www.linkedin.com/in/matthiasurgu">
          <img
            className={style.logo}
            src="/assets/img/logo_linkedin.svg"
            alt="linkedIn"
          />
        </a>
      </div>
      <div className={style.buttonDownload}>
        <button>
          <a
            href="/public/assets/cv/CV Matthias Urgu.pdf"
            download="CV Matthias Urgu.pdf">
            Download CV
          </a>
        </button>
      </div>
      <div className={style.list}>
        <ul>
          <li>
            <a href="#about">
              <span>a</span> About me
            </a>
          </li>
          <li>
            <a href="#projects">
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>

      
    </section>
  );
}
