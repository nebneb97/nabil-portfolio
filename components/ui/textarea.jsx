import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-black/10 bg-white px-4 py-5 text-base text-primary placeholder:text-slate-500 focus-visible:outline-none focus:border-emerald-400 focus-visible:ring-1 focus-visible:ring-emerald-400 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
