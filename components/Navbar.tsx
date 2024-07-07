"use client";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { HomeIcon, MoonIcon, ReaderIcon, SunIcon } from "@radix-ui/react-icons";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { TooltipComponent } from "./Tooltip";

export default function Navbar() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
        <div className="flex max-w-screen-lg justify-end mx-auto h-14 items-center pr-5">
          <div className="flex p-1">
            <div className="flex">
              {theme === "dark" ? (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme("light")}
                >
                  <MoonIcon />
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme("dark")}
                >
                  <SunIcon />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
