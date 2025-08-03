import { UseFormReturn } from "react-hook-form";
interface PasswordFormControlProps {
    name: string;
    form: UseFormReturn<any, any>;
    label?: string;
    error?: boolean;
    helperText?: string;
    variant?: "outlined" | "filled" | "standard";
    size?: "small" | "medium";
    fullWidth?: boolean;
    padding?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    placeholder?: string;
    className?: string;
    onChange?: (value: string) => void;
}
export declare const PasswordFormControl: ({ name, label, form, ...props }: PasswordFormControlProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=passwordFormControl.d.ts.map