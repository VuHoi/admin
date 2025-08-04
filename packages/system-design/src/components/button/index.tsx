import { Button as ButtonMui } from "@mui/material";
import React from "react";
const shapes = {
  circle: "!rounded-[50%]",
  square: "!rounded-[0px]",
  round: "!rounded-md",
} as const;

const sizes = {
  lg: "h-[60px] px-1.5 !text-base",
  sm: "h-[38px] !text-base",
  md: "h-[50px] px-1.5 !text-base",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: "contained" | "outlined" | "text";
    size: keyof typeof sizes;
    color: "primary" | "secondary" | "warning" | "info" | "error" | "success";
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "contained",
  size = "md",
  color = "primary",
  ...restProps
}) => {
  return (
    <ButtonMui
      {...restProps}
      variant={variant}
      color={color as any}
      classes={{
        root: `${className} flex gap-2 flex-row items-center !shadow-button  justify-center text-center cursor-pointer whitespace-nowrap ${
          shape && shapes[shape]
        } ${size && sizes[size]} `,
      }}
    >
      {leftIcon && <span className="text-xl mt-1">{leftIcon}</span>}
      {children}aaa
      {rightIcon && <span className="text-xl mt-1">{rightIcon}</span>}
    </ButtonMui>
  );
};
export { Button };
