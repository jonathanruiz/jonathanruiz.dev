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
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <a
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </a>
              )
          )}
        </nav>
      ) : null}
    </div>
  );
}
