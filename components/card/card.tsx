import Link from "next/link";
import style from "./card.module.css";
import { CardParams } from "@/interfaces/interfaces";

const card = ({ title = "Project Name", bgImage, id }: CardParams) => {
  return (
    <>
      <div
        className={style.main}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className={style.title}>{title}</div>
        <div className={style.learnMore}>
          <Link href={`projects/${id}`}>{`${"Learn More >"}`}</Link>
        </div>
      </div>
    </>
  );
};

export default card;
