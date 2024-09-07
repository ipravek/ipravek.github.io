import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "blogs");

function allBlog() {
  const fileNames = fs.readdirSync(blogDir);
  const allBlogData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(blogDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
      content: matterResult.content,
    };
  });

  return allBlogData;
}

export function getBlogs() {
  return allBlog().sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getBlog({ slug }: { slug: string | number }) {
  let blogs = allBlog();

  let blog = blogs.find((e) => {
    return e.id == slug;
  });

  return blog;
}
