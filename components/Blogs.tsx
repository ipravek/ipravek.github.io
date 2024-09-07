import Link from "next/link";
import { FaMedium } from "react-icons/fa";

export default function Blogs() {
  const blogs = [
    {
      name: "Unwrapping the Magic of Promises.",
      link: "https://medium.com/@ipravek/unwrapping-the-magic-of-promises-ba37cedb9d9b",
      description: "What Are Promises?",
    },
    {
      name: "Proc or Lambda: Which One Will Take Your Ruby Code to the Next Level?",
      link: "https://medium.com/@ipravek/proc-or-lambda-which-one-will-take-your-ruby-code-to-the-next-level-ec3a35a96bb1",
      description:
        "Ruby is a popular and powerful programming language that offers many features to make coding easier and more efficient. two of these…",
    },
    {
      name: "Distinguishing Implicit and Explicit Returns in Ruby",
      link: "https://medium.com/@ipravek/distinguishing-implicit-and-explicit-returns-in-ruby-ad75de62bbb3",
      description:
        "In Ruby, a function can return a value in two ways implicitly or explicitly. The difference between these two return types lies in the…",
    },
  ];

  return (
    <>
      <div className="flex max-w-screen-lg mx-auto mt-5">
        <div className="flex flex-col w-full px-10">
          <div className="flex text-xl font-semibold divider divider-start my-5">
            Blogs
          </div>

          <div className="flex flex-col gap-7">
            {blogs &&
              blogs.map((e) => {
                return (
                  <div className="flex" key={e.name}>
                    <div className="flex items-center gap-2">
                      <Link href={e.link} target="_blank">
                        <FaMedium size={42} />
                      </Link>
                      <div className="flex flex-col justify-between">
                        <Link
                          href={e.link}
                          className="hover:underline"
                          target="_blank"
                        >
                          {e.name}
                        </Link>
                        <div className="text-xs text-gray-500">
                          {e.description}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
