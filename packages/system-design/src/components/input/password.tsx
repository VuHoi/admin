"use client";

import { themeConfig } from "../../utils/theme/theme.config";
import { Input } from "./input";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

type PasswordProps = {
  name: string;
  label: string;
  error: boolean;
  helperText: string;
  onChange: (value: string) => void;
};

export const Password = (props: PasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full">
      <Input
        rightIcon={
          !showPassword ? (
            <RemoveRedEyeIcon
              className="cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          ) : (
            <VisibilityOffIcon
              className="cursor-pointer"
              sx={{ color: themeConfig.colors.primary.main }}
              onClick={() => setShowPassword(false)}
            />
          )
        }
        type={showPassword ? "text" : "password"}
        {...props}
      />
    </div>
  );
};
