import Cog from "./Assets/Cog";
import Target from "./Assets/Target";
import UserFemale from "./Assets/UserFemale";
import styles from "./Home.module.css";
export default function FlexBoxes() {
  return (
    <main className={styles.FlexBoxes}>
      <section className={styles.FlexBoxesContent}>
        {box.map((content) => (
          <aside key={content.title}>
            <div>
              {content.icon}
              <h3> {content.title}</h3>
            </div>
            <p>{content.content}</p>
          </aside>
        ))}
      </section>
    </main>
  );
}
let box = [
  {
    title: "Tech. + Business",
    content:
      "We go beyond software development, we also offer business development services",
    icon: <Cog />,
  },
  {
    title: "Vetted + Experienced",
    content:
      "Team of well-vetted experienced developers for your tech and business needs",
    icon: <UserFemale />,
  },
  {
    title: "Effective + Efficient",
    content:
      "Adopts an effective and efficient development scheme, saving you time and money",
    icon: <Target />,
  },
];
