"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { Roboto_Mono } from "next/font/google";
import {
  js,
  ror,
  node,
  react,
  sql,
  nosql,
  ruby,
  ex,
} from "../public/assets/img/";
import SocialLinks from "@/components/socialLinks/socialLinks";
import { motion } from "framer-motion";
const RobotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function Home() {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.main
      className={styles.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.title}>Praveenkumar</div>
      <div className={`${styles.content} ${styles.textMute}`}>
        SDE | Gamer (who doesn&apos;t have time to play) | Freelancer
      </div>
      <div className={styles.textBody}>
        Experienced Software Engineer with 2+ years of expertise in Node.js and
        RoR.
      </div>
      <div className={styles.textBody}>
        Skilled in JavaScript, TypeScript, Ruby, SQL, NoSQL, Node.js, React.js
        and Ruby on Rails. Passionate about delivering high-quality solutions
        and staying updated with industry advancements.
      </div>
      <div className={`${styles.textBody} ${RobotoMono.className}`}>
        <button
          onClick={() => setToggle(!toggle)}
          className={styles.toggleButton}
        >
          {toggle ? "rb" : "js"}
        </button>

        {toggle ? (
          <p>
            <span className={styles.jsStyleConst}>const</span>{" "}
            <span className={styles.jsStyleFunctionName}>techStacks</span> = ( ){" "}
            {"=> "}
            <span className={styles.jsStyleBracket}>{"{"}</span>
          </p>
        ) : (
          <>
            <p>
              <span className={styles.rubyStyleDef}>def</span>{" "}
              <span className={styles.rubyStyleDefName}>tech_stacks</span>
            </p>
          </>
        )}

        <div className={styles.techStackContainer}>
          <div className={styles.techStackIcons}>
            <Image src={ruby} alt={""} />
            <Image src={ror} alt={""} title="Ruby on Rails" />
            <Image src={js} alt={""} />
            <Image src={node} alt={""} />
            <Image src={ex} alt={""} />
            <Image src={react} alt={""} />
            <Image src={sql} alt={""} />
            <Image src={nosql} alt={""} />
          </div>
        </div>

        {toggle ? (
          <p>
            <span className={styles.jsStyleBracket}>{`${"}"}`}</span>
          </p>
        ) : (
          <p>
            <span className={styles.rubyStyleEnd}>end</span>
          </p>
        )}
      </div>

      <div className={styles.contactMe}>
        {toggle ? (
          <p>
            <span className={styles.jsStyleConst}>const</span>{" "}
            <span className={styles.jsStyleFunctionName}>contact</span> = ( ){" "}
            {"=> "}
            <span className={styles.jsStyleBracket}>{"{"}</span>
          </p>
        ) : (
          <>
            <p>
              <span className={styles.rubyStyleDef}>def</span>{" "}
              <span className={styles.rubyStyleDefName}>contact</span>
            </p>
          </>
        )}

        <div className={styles.socialLinks}>
          <SocialLinks />
        </div>

        {toggle ? (
          <p>
            <span className={styles.jsStyleBracket}>{`${"}"}`}</span>
          </p>
        ) : (
          <p>
            <span className={styles.rubyStyleEnd}>end</span>
          </p>
        )}
      </div>

      <div className={styles.codeblock}>
        {/* <Codeblock component={<SocialLinks />} lang={Language.JAVASCRIPT}/> */}
      </div>
    </motion.main>
  );
}
