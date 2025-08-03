import React from "react";
declare const shapes: {
    readonly circle: "!rounded-[50%]";
    readonly square: "!rounded-[0px]";
    readonly round: "!rounded-md";
};
declare const sizes: {
    readonly lg: "h-[60px] px-1.5 !text-base";
    readonly sm: "h-[38px] !text-base";
    readonly md: "h-[50px] px-1.5 !text-base";
};
type ButtonProps = Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "onClick"> & Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: "contained" | "outlined" | "text";
    size: keyof typeof sizes;
    color: "primary" | "secondary" | "warning" | "info" | "error" | "success";
}>;
declare const Button: React.FC<React.PropsWithChildren<ButtonProps>>;
export { Button };
//# sourceMappingURL=index.d.ts.map