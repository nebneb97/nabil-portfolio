import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className ="", type, ...props }, ref) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[48px] rounded-md border border-neutral-300 focus:border-emerald-400 focus:border-2 font-light bg-white px-4 py-5 text-base text-black placeholder:text-neutral-700 outline-none transition-colors duration-200",
        className
      )}
      ref={ref}
      {...props}
    />
  );
}

export { Input };
