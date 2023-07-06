import * as React from "react";
import { ThemeToggle } from "@/components/theme-toggle";

import { cn } from "@/lib/utils";

export function MainNav({ items }: any) {
  return (
    <div className="flex gap-6 md:gap-10">
      <div className="flex items-center space-x-2">
        <span className="inline-block font-bold">Jonathan Ruiz</span>
        <ThemeToggle />
      </div>
    </div>
  );
}
