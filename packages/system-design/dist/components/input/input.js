import { __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { InputAdornment, TextField } from "@mui/material";
const Input = (_a) => {
    var { className = "", label, error, helperText, onChange, variant = "outlined", size = "small", fullWidth = true, padding = "14px 14px", placeholder, leftIcon, rightIcon } = _a, restProps = __rest(_a, ["className", "label", "error", "helperText", "onChange", "variant", "size", "fullWidth", "padding", "placeholder", "leftIcon", "rightIcon"]);
    return (_jsxs("div", { className: `flex flex-col gap-1 w-full ${className}`, children: [label && (_jsx("label", { className: `text-base font-medium ${error ? "text-error" : "text-neutral-600"}`, children: label })), _jsx(TextField, Object.assign({}, restProps, { error: error, helperText: helperText, onChange: (e) => onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value), variant: variant, size: size, fullWidth: fullWidth, classes: {
                    root: " ",
                }, slotProps: {
                    input: {
                        startAdornment: leftIcon && (_jsx(InputAdornment, { position: "start", children: leftIcon })),
                        endAdornment: rightIcon && (_jsx(InputAdornment, { position: "end", children: rightIcon })),
                    },
                }, placeholder: placeholder, sx: {
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
                }, color: "secondary" }))] }));
};
export { Input };
//# sourceMappingURL=input.js.map