import React from "react";
export type InputProps = Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "onChange"> & Partial<{
    className: string;
    label: string;
    error: boolean;
    helperText: string;
    onChange: (value: string) => void;
    variant: "outlined" | "filled" | "standard";
    size: "small" | "medium";
    fullWidth: boolean;
    padding: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
}>;
declare const Input: React.FC<InputProps>;
export { Input };
//# sourceMappingURL=input.d.ts.map