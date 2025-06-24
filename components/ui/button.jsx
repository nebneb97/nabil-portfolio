import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default:
          // Teal base, white text, lighter teal on hover, darker teal on active
          "bg-teal-500 text-primary hover:bg-teal-600 active:bg-teal-800",
        primary:
          "bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-800",
        outline:
          "border border-teal-500 bg-transparent text-teal-500 hover:bg-teal-500 hover:text-white active:bg-teal-600 active:text-white",
      },
      size: {
        default: "h-[44px] px-6",
        md: "h-[48px] px-6",
        lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}


export { Button, buttonVariants };
