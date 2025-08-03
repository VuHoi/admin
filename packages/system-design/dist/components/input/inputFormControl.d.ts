import { UseFormReturn } from "react-hook-form";
interface InputFormControlProps {
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
export declare const InputFormControl: ({ name, form, ...props }: InputFormControlProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=inputFormControl.d.ts.map