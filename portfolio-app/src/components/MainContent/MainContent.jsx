import style from "./MainContent.module.scss";

export default function MainContent() {
  return (
    <section className={style.mainContainer}>
      <h1>Matthias Urgu</h1>
      <p>Junior front-end developer.</p>
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
