"use client";
import { SideBarLinks } from "@/interfaces/interfaces";
import Link from "next/link";
import style from "./sidebar.module.css";
import Image from "next/image";
import hamburger from "../../public/assets/hamburger.svg";
import cross from "../../public/assets/cross.svg";
import { useState } from "react";

const Sidebar = () => {
  const links: Array<SideBarLinks> = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
  ];

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className={style.hamburger}>
        {toggle ? (
          <Image
            src={hamburger}
            alt={""}
            width={50}
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <Image
            src={cross}
            alt={""}
            width={50}
            onClick={() => setToggle(!toggle)}
          />
        )}
      </div>

      <div
        className={`${style.main} ${toggle ? style.inactive : style.active}`}
      >
        <div className={style.logo}>
          {/* <Image src={meme} alt={"logo"} /> */}
          👻👻👻👻
        </div>

        {links &&
          links.map((e, idx) => {
            return (
              <>
                {toggle ? (
                  <Link
                    href={e.path}
                    className={style.link}
                    key={idx}
                    onClick={() => setToggle(!toggle)}
                  >
                    {e.name}
                  </Link>
                ) : (
                  <Link
                    href={e.path}
                    className={style.link}
                    key={idx}
                    onClick={() => setToggle(!toggle)}
                  >
                    {e.name}
                  </Link>
                )}
              </>
            );
          })}
      </div>
    </>
  );
};

export default Sidebar;
