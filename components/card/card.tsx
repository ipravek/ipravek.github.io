import Link from "next/link";
import style from "./card.module.css";

const card = ({ title = "Project Name" }) => {
  return (
    <>
      <div className={style.main}>
        <div className={style.title}>{title}</div>
        <div className={style.learnMore}>
          <Link href={""}>{`${"Learn More >"}`}</Link>
        </div>
      </div>
    </>
  );
};

export default card;
