import style from './SecondContent.module.scss'

export default function () {

  //Project informations
  const PROJECTS = {
    First: {
      Title: "Body mass calculator",
      Description :"",
      Techno : ["React","sass"]
    },
    
    Second:{
      Title: "Weather app",
      Description :"",
      Techno : ["React","sass"]
      },

    Third:{
      Title: "Beyangin",
      Description :"",
      Techno : ["React","sass"]
        },

    Fourth:{
      Title: "",
      Description :"",
      Techno : ["React","sass"]
        }
  }

  return (

    <section className={style.sectionContent}>
            <div id="div1">
              <h1 className={style.secondTitle}>
                About
                </h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, debitis adipisci? Dolore cumque error eligendi tempora quod, unde numquam reiciendis!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, debitis adipisci? Dolore cumque error eligendi tempora quod, unde numquam reiciendis!
            </div>
            <div id="div2">
              <h1 className={style.secondTitle}
              >Project
              </h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, debitis adipisci? Dolore cumque error eligendi tempora quod, unde numquam reiciendis!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, debitis adipisci? Dolore cumque error eligendi tempora quod, unde numquam reiciendis!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, debitis adipisci? Dolore cumque error eligendi tempora quod, unde numquam reiciendis!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, debitis adipisci? Dolore cumque error eligendi tempora quod, unde numquam reiciendis!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, debitis adipisci? Dolore cumque error eligendi tempora quod, unde numquam reiciendis!
            </div>
            <div>
              <h1 className={style.secondTitle}
              >Contact
              </h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, debitis adipisci? Dolore cumque error eligendi tempora quod, unde numquam reiciendis!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, debitis adipisci? Dolore cumque error eligendi tempora quod, unde numquam reiciendis!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, debitis adipisci? Dolore cumque error eligendi tempora quod, unde numquam reiciendis!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, debitis adipisci? Dolore cumque error eligendi tempora quod, unde numquam reiciendis!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, debitis adipisci? Dolore cumque error eligendi tempora quod, unde numquam reiciendis!
            </div>
          </section>
  )
}