import { Control, Controller, useFormContext } from "react-hook-form";
import { InputProps } from "./input";
import { Password } from "./password";

export const PasswordFormControl = ({
  name,
  label,
  ...props
}: InputProps & {
  name: string;
}) => {
  const form = useFormContext();

  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field }) => (
        <Password
          {...field}
          {...props}
          label={label || ""}
          error={!!form.formState.errors[name]}
          helperText={form.formState.errors[name]?.message as string}
        />
      )}
    />
  );
};
