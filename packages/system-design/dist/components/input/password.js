"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { themeConfig } from "../../utils/theme/theme.config";
import { Input } from "./input";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
export const Password = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    return (_jsx("div", { className: "w-full", children: _jsx(Input, Object.assign({ rightIcon: !showPassword ? (_jsx(RemoveRedEyeIcon, { className: "cursor-pointer", onClick: () => setShowPassword(true) })) : (_jsx(VisibilityOffIcon, { className: "cursor-pointer", sx: { color: themeConfig.colors.primary.main }, onClick: () => setShowPassword(false) })), type: showPassword ? "text" : "password" }, props)) }));
};
//# sourceMappingURL=password.js.map