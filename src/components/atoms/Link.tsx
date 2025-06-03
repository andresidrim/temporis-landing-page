import { cn } from "@/utils/className";
import { Slot } from "@radix-ui/react-slot";
import { AnchorHTMLAttributes } from "react";
import NextLink from "next/link";

export default function Link({
  asChild,
  className,
  children,
  href = "",
  ...props
}: { asChild?: boolean } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const Component = asChild ? Slot : NextLink;

  return (
    <Component
      href={href}
      className={cn(
        "font-lora text-temporis-black cursor-pointer text-lg hover:underline",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
