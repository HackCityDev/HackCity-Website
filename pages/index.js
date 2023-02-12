import Dev from "../components/HomePage/Dev";
import FlexBoxes from "../components/HomePage/FlexBoxes";
import Hero from "../components/HomePage/Hero";
import Hire from "../components/HomePage/Hire";
import JoinTeam from "../components/HomePage/JoinTeam";
import Newsletter from "../components/HomePage/Newsletter";
import Services from "../components/HomePage/Services";
import Startups from "../components/HomePage/Startups";

export default function Home() {
  return (
    <main>
      <Hero />
      <Dev />
      <FlexBoxes />
      <Startups />
      <Services />
      <Hire />
      <Newsletter />
      <JoinTeam />
    </main>
  );
}
