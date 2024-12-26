"use client";

import * as React from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export function ToggleTheme() {
  const { setTheme } = useTheme();

  return (
    <div className="flex">
      <button
        onClick={() => setTheme("light")}
        className="p-2 rounded-lg"
        aria-label="Toggle Light Mode"
      >
        <IconSun />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className="p-2 rounded-lg"
        aria-label="Toggle Dark Mode"
      >
        <IconMoon />
      </button>
    </div>
  );
}
