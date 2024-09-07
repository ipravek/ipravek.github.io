import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
        <div className="flex max-w-screen-lg mx-auto h-14 items-center pr-5 gap-3 px-10">
          <div className="flex p-1">
            <Link href={"/"}>Home</Link>
          </div>
          <div className="flex p-1">
            <Link href={"/blogs"}>Blogs</Link>
          </div>
        </div>
      </div>
    </>
  );
}
