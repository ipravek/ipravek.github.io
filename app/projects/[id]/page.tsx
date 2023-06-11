"use client";
import { notFound } from "next/navigation";
import styles from "./projectDetail.module.css";
import { projects } from "../page";
import HTMLRenderer from "@/components/htmlrenderer/HtmlRenderer";

const ecom = projects.find((e) => {
  return e.id == 0;
});

export default function ProjectDetail({ params }: { params: any }) {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.title}>{ecom?.name}</div>
        <div className={styles.stack}>{ecom?.stack.join(" | ")}</div>

        <div className={styles.body}>
          <HTMLRenderer htmlString={ecom?.description || ""} />
        </div>
      </div>
    </>
  );
}
