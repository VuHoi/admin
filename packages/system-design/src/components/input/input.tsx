import React from "react";
import { InputAdornment, TextField } from "@mui/material";

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "onChange"
> &
  Partial<{
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

const Input: React.FC<InputProps> = ({
  className = "",
  label,
  error,
  helperText,
  onChange,
  variant = "outlined",
  size = "small",
  fullWidth = true,
  padding = "14px 14px",
  placeholder,
  leftIcon,
  rightIcon,
  ...restProps
}) => {
  return (
    <div className={`flex flex-col gap-1 w-full ${className}`}>
      {label && (
        <label
          className={`text-base font-medium ${
            error ? "text-error" : "text-neutral-600"
          }`}
        >
          {label}
        </label>
      )}
      <TextField
        {...restProps}
        error={error}
        helperText={helperText}
        onChange={(e) => onChange?.(e.target.value)}
        variant={variant}
        size={size as any}
        fullWidth={fullWidth}
        classes={{
          root: " ",
        }}
        slotProps={{
          input: {
            startAdornment: leftIcon && (
              <InputAdornment position="start">{leftIcon}</InputAdornment>
            ),
            endAdornment: rightIcon && (
              <InputAdornment position="end">{rightIcon}</InputAdornment>
            ),
          },
        }}
        placeholder={placeholder}
        sx={{
          "& .MuiInputBase-inputSizeSmall": {
            padding: `${padding}`,
            paddingLeft: leftIcon ? "5px" : "14px",
            paddingRight: rightIcon ? "5px" : "14px",
          },
          "& .MuiOutlinedInput-root": {
            "& input::placeholder": {
              color: error ? "#FF3B30" : "#A1A1A1",
            },
            "&.Mui-focused fieldset": {
              border: `1px solid ${error ? "#FF3B30" : "#CBD5E1"}`,
            },
            "&:hover fieldset": {
              border: `1px solid ${error ? "#FF3B30" : "#CBD5E1"}`,
            },
          },
        }}
        color={"secondary"}
      />
    </div>
  );
};

export { Input };
