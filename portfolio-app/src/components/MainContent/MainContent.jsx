import style from "./MainContent.module.scss";

export default function MainContent() {
  return (
    <section className={style.mainContainer}>
      <h1 className={style.mainTitle}>Matthias Urgu</h1>
      <p className={style.mainSubtitle}>Junior front-end developer.</p>
      <div className={style.imgLogo}>
        <img className={style.logo} src="/assets/img/logo_github.svg" alt="Github" />
        <img className={style.logo} src="/assets/img/logo_linkedin.svg" alt="linkedIn" />
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
