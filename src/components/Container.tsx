import { HTMLAttributes } from "react";
import { cn } from "@/utils/className";

export default function Container({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "w-full h-full max-w-[90%] md:max-w-[80%] flex flex-col items-center justify-center mx-auto py-10 md:py-16",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
