import { useState } from "react";
import "./App.css";
import clsx from "clsx";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Blog from "./components/Blog";

function App() {
  const [dark, setDark] = useState(true);

  const toggleDark = () => setDark(!dark);

  return (
    <>
      <div className={clsx(dark && "dark")}>
        <div className={"dark:bg-black bg-[#FAFAFA] overflow-x-hidden"}>
          <div className="max-w-screen-xl mx-auto border-x dark:border-x-gray-800 px-40 dark:bg-[#131316] dark:text-white bg-white">
            <Navbar toggleDark={toggleDark} dark={dark} />
            <Intro />
            <Hero />
            <Blog />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
