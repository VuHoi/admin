import { Controller, UseFormReturn } from "react-hook-form";
import { InputProps } from "./input";
import { Password } from "./password";

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

export const PasswordFormControl = ({
  name,
  label,
  form,
  ...props
}: PasswordFormControlProps) => {
  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field }) => (
        <Password
          {...field}
          label={label || ""}
          error={!!form.formState.errors[name]}
          helperText={form.formState.errors[name]?.message as string}
        />
      )}
    />
  );
};
