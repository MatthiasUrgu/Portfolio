import style from "./MainContent.module.scss";

export default function MainContent() {
  return (
    <section className={style.mainContainer}>
      <h1 className={style.mainTitle}>Matthias Urgu</h1>
      <p className={style.mainSubtitle}>Junior front-end developer.</p>
      <div className={style.imgLogo}>
        <a href="https://github.com/MatthiasUrgu/"><img className={style.logo} src="/assets/img/logo_github.svg" alt="Github" /></a>
        <a href="https://www.linkedin.com/in/matthiasurgu"><img className={style.logo} src="/assets/img/logo_linkedin.svg" alt="linkedIn" /></a>
      </div>
      <div className={style.list}>
        <ul>
          <li>
            <a href="#div1">
              <span>a</span> About me
            </a>
          </li>
          <li>
            <a href="#div6">
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#div2">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
