import { SocialLinks } from "@/interfaces/interfaces";
import { upRightArrow } from "@/public/assets/img/";
import styles from "./socialLinks.module.css";
import Image from "next/image";

const socialLinks: Array<SocialLinks> = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ipravek",
  },
  {
    name: "GitHub",
    link: "https://github.com/ipravek",
  },
];

const SocialLinks = () => {
  return (
    <>
      {socialLinks &&
        socialLinks.map((e: SocialLinks, idx: number) => {
          return (
            <div className={styles.main} key={idx}>
              <a href={e.link} className={styles.links} target="_blank">
                <Image src={upRightArrow} alt="" />
                {e.name}
              </a>
            </div>
          );
        })}
    </>
  );
};

export default SocialLinks;
