import { Sun, Moon } from "lucide-react";

export default function Navbar({
  toggleDark,
  dark,
}: {
  toggleDark: () => void;
  dark: boolean;
}) {
  return (
    <div className="flex">
      <div className="w-full">
        <div className="flex dark:text-white gap-12 justify-end p-4 sticky top-0">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Blog</a>
          <a href="/">Projects</a>

          <button onClick={() => toggleDark()}>
            {!dark ? <Moon /> : <Sun />}
          </button>
        </div>
      </div>
    </div>
  );
}
