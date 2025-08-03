import { Controller, UseFormReturn } from "react-hook-form";
import { Input, InputProps } from "./input";

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

export const InputFormControl = ({
  name,
  form,
  ...props
}: InputFormControlProps) => {
  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field }) => (
        <Input
          {...field}
          label={props.label}
          error={!!form.formState.errors[name]}
          helperText={form.formState.errors[name]?.message as string}
          variant={props.variant}
          size={props.size as any}
          fullWidth={props.fullWidth}
          padding={props.padding}
          leftIcon={props.leftIcon}
          rightIcon={props.rightIcon}
          placeholder={props.placeholder}
          className={props.className}
        />
      )}
    />
  );
};
