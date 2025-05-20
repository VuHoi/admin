import { Controller, useFormContext } from "react-hook-form";
import { Input, InputProps } from "./input";

export const InputFormControl = ({
  name,
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
        <Input
          {...field}
          {...props}
          error={!!form.formState.errors[name]}
          helperText={form.formState.errors[name]?.message as string}
        />
      )}
    />
  );
};
