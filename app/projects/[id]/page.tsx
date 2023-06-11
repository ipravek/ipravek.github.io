"use client";
import { notFound } from "next/navigation";
import styles from "./projectDetail.module.css";
// import { projects } from "../page";
import HTMLRenderer from "@/components/htmlrenderer/HtmlRenderer";
import { shoppingCart, musicStream } from "@/public/assets/img/";


const projects = [
  {
    name: "Online Video Stream",
    id: 123,
    slug: "ecommerce",
    stack: ["RoR", "Js"],
    description: "<p>This is suppose to be a markdown text</p> ",
    backgroundImage: musicStream,
  },
  {
    name: "E-Commerce",
    id: 0,
    slug: "ink-ecommerce",
    backgroundImage: shoppingCart,
    description:
      '<h1 id="sample-markdown">Sample Markdown</h1><p>This is some basic, sample markdown.</p><h2 id="second-heading">Second Heading</h2><ul><li>Unordered lists, and:<ol><li>One</li><li>Two</li><li>Three</li></ol></li><li>More</li></ul><blockquote><p>Blockquote</p></blockquote><p>And <strong>bold</strong>, <em>italics</em>, and even <em>italics and later <strong>bold</strong></em>. Even <del>strikethrough</del>. <a href="https://markdowntohtml.com">A link</a> to somewhere.</p><p>And code highlighting:</p><pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = <span class="hljs-string">bar</span>;<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">baz</span><span class="hljs-params">(s)</span> </span>{   <span class="hljs-keyword">return</span> foo + <span class="hljs-string">:</span> + s;}</code></pre><p>Or inline code like <code>var foo = &#39;bar&#39;;</code>.</p><p>Or an image of bears</p><p><img src="http://placebear.com/200/200" alt="bears"></p><p>The end ...</p>',
    stack: ["RoR", "Js", "React.js"],
  },
];

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
