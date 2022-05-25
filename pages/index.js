import Header from "./Header";
import Main from "./Main";
import Brands from "./Companies";
import TeamCase from "./TeamCase";
import TeamCase2 from "./TeamCase2";
import { useState, useEffect } from "react";
import Dropdown from "./Dropdown";

export default function Home() {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  console.log(scroll);
  return (
    <div className="main">
      {scroll == false ? <Dropdown /> : null}
      <Header />
      <Main />
      <Brands />
      <TeamCase />
      <TeamCase2 />
    </div>
  );
}
