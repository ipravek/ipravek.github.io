"use client";
import { SideBarLinks } from "@/interfaces/interfaces";
import Link from "next/link";
import style from "./sidebar.module.css";
import Image from "next/image";
import { hamburger, cross } from "../../public/assets/img";
import { useState } from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const links: Array<SideBarLinks> = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Projects",
      path: "/projects",
    },
  ];

  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div className={style.hamburger}>
        {toggle ? (
          <Image
            src={hamburger}
            alt={""}
            width={50}
            onClick={() => setToggle(!toggle)}
            className={style.hamburgerImage}
          />
        ) : (
          <Image
            src={cross}
            alt={""}
            width={50}
            onClick={() => setToggle(!toggle)}
            className={style.hamburgerImage}
          />
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className={`${style.main} ${toggle ? style.inactive : style.active}`}
      >
        <div className={style.logo}>
          {/* <Image src={meme} alt={"logo"} /> */}
        </div>

        {links &&
          links.map((e, idx) => {
            return (
              <Link
                href={e.path}
                className={style.link}
                key={idx}
                onClick={() => setToggle(!toggle)}
              >
                {e.name}
              </Link>
            );
          })}
      </motion.div>
    </>
  );
};

export default Sidebar;
