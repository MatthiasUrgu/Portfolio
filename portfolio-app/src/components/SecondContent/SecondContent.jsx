import style from "./SecondContent.module.scss";

export default function () {
  //Project informations
  const projects = [
    {
      Id: "1",
      Title: "Body mass calculator",
      Description:
        "The Body Mass Calculator is a React.js project designed to help users assess their body weight status using the BMI calculation. It was created as a personal project with the primary goal of improving",
      Why: "React.js skills,Enhancing my coding logic, Practicing SCSS, including concepts such as Mixins, Includes, Variables, and Responsiveness.",
      Techno: ["React", "sass","id1"],
    },

    {
      Id: "2",
      Title: "Weather app",
      Description:
        "The Weather App is a simple application that provides users with real-time weather information, date, and time. It's designed for anyone who wants to quickly check the weather conditions in different locations",
      Why: "I created this project to learn about how to use and apply APIs. The Weather App utilizes two APIs: OpenWeather for weather information and Abstract API to obtain the current UTC time.Additionally, I've incorporated Framer Motion to animate the hamburger menu for a more interactive user experience.",
      Techno: [
        "React",
        "sass",
        "Javascript",
        "OpenWeather Api",
        "Abstract Api",
        "FramerMotion",
        "id2"
      ],
    },

    {
      Id: "3",
      Title: "Beyangin",
      Description: "",
      Techno: ["React", "sass","id3"],
    },
  ];
  
  return (
    <section className={style.sectionContent}>
      <div className={style.cardContent} id="div1">
        <h1 className={style.cardSecondTitle}>About</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, debitis
        adipisci? Dolore cumque error eligendi tempora quod, unde numquam
        reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Est, debitis adipisci? Dolore cumque error eligendi tempora quod, unde
        numquam reiciendis!
      </div>
      <div className={style.cardContent} id="div2">
        <h1 className={style.cardSecondTitle}>Project</h1>
        {projects.map((project) => (
          <div id={project.Id} className={style.projectsCards} key={project.Id}>
            <h2 className={style.cardSubtitle}>{project.Title}</h2>
            <p className={style.cardDescription}>{project.Description}</p>
            <p className={style.cardWhy}>{project.Why}</p>
            <p className={style.cardTechno}>
              <ul>
                
                    {project.Techno.map(tech => <li className={style.cardTechnoList}> {tech}</li>)}
                  
                
              
              </ul>
            </p>
          </div>
        ))}
      </div>
      <div className={style.cardContent} id="div3">
        <h1 className={style.cardSecondTitle}>Contact</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, debitis
        adipisci? Dolore cumque error eligendi tempora quod, unde numquam
        reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Est, debitis adipisci? Dolore cumque error eligendi tempora quod, unde
        numquam reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Est, debitis adipisci? Dolore cumque error eligendi tempora quod,
        unde numquam reiciendis! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Est, debitis adipisci? Dolore cumque error eligendi
        tempora quod, unde numquam reiciendis! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Est, debitis adipisci? Dolore cumque error
        eligendi tempora quod, unde numquam reiciendis!
      </div>
      <div></div>
    </section>
  );
}
