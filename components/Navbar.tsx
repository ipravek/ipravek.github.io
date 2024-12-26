import { FloatingDock } from "./ui/floating-dock";
import { IconArticle, IconHomeStats, IconTerminal2 } from "@tabler/icons-react";
import { IconHome } from "@tabler/icons-react";

export default function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Blog",
      icon: (
        <IconArticle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/blogs",
    },
  ];
  return (
    <>
      {/* <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
        <div className="flex max-w-screen-lg mx-auto h-14 items-center pr-5 gap-3 px-10">
          <div className="flex p-1">
            <Link href={"/"}>Home</Link>
          </div>
          <div className="flex p-1">
            <Link href={"/blogs"}>Blogs</Link>
          </div>
        </div>
      </div> */}

      <div className="flex items-center justify-center h-16 w-full fixed bottom-7">
        <FloatingDock items={links} />
      </div>
    </>
  );
}
