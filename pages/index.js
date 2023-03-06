import { useEffect, useState } from "react";
import Dev from "../components/HomePage/Dev";
import FlexBoxes from "../components/HomePage/FlexBoxes";
import Hero from "../components/HomePage/Hero";
import Hire from "../components/HomePage/Hire";
import JoinTeam from "../components/HomePage/JoinTeam";
import Newsletter from "../components/HomePage/Newsletter";
import Services from "../components/HomePage/Services";
import Startups from "../components/HomePage/Startups";
import Loader from "../components/Loader";
import useFirstLoad from "../hooks/useFirstLoad";

export default function Home() {
  const firstLoad = useFirstLoad();

  return (
    <main>
      {firstLoad && <Loader />}
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
