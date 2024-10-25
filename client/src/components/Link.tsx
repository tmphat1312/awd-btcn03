import { cn } from "../utils/cn";
import { Link as RRLink, LinkProps as RRLinkProps } from "react-router-dom";

export function Link({ className, ...props }: RRLinkProps) {
  return (
    <RRLink
      className={cn("hover:underline underline-offset-2", className)}
      {...props}
    />
  );
}
