import React, { useState } from "react";
import Header from "../Header";
import Hero from "../Hero";

import "./styles.css";
import ActionBox from "../ActionBox";
import Advanced from "../Advanced";
import HeroFooter from "../HeroFooter";

const App: React.FC = () => {
  return (
    <>
      <Header></Header>
      <main className="main">
        <Hero></Hero>
        <ActionBox />
        <Advanced></Advanced>
        <HeroFooter />
      </main>
    </>
  );
};

export default App;
