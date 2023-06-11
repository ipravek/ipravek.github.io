"use client";
import React from "react";
import Card from "@/components/card/card";
import styles from "./projects.module.css";
import { shoppingCart, musicStream } from "@/public/assets/img/";
import { motion } from "framer-motion";

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

const Projects = () => {
  return (
    <>
      <motion.div
        className={styles.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {projects &&
          projects.map((e, idx) => {
            return (
              <Card
                title={e.name}
                bgImage={e.backgroundImage}
                id={e.slug.toString()}
                key={idx}
              />
            );
          })}
      </motion.div>
    </>
  );
};

export default Projects;
