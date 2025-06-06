import React from "react";
import { twMerge } from "tailwind-merge";

export const Text = ({
  children,
  className,
  variant,
}: {
  children: React.ReactNode;
  className?: string;
  variant?:
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "heading5"
    | "heading6"
    | "body1"
    | "body2"
    | "body3"
    | "body4"
    | "body5"
    | "body6"
    | "caption";

  ellipsis?: boolean;
  noOfLines?: number;
  onClick?: () => void;
}) => {
  const textVariants = {
    heading1: "text-3xl font-bold leading-normal",
    heading2: "text-4xl font-bold leading-[42px] tracking-[-0.64px]",
    heading3: "text-lg font-semibold ",
    heading4: "text-base font-bold font-dm-sans",
    heading5: "text-sm font-bold",
    heading6: "text-xs font-bold",
    body1: "text-base font-normal",
    body2: "text-sm font-normal",
    body3: "text-xs font-normal",
    body4: "text-xs font-normal",
    body5: "text-xs font-normal",
    body6: "text-xs font-normal",
  };

  const textClasses = twMerge(
    textVariants[variant as keyof typeof textVariants],
    className
  );

  return <div className={textClasses}>{children}</div>;
};
