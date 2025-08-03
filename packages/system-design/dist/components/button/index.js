import { __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button as ButtonMui } from "@mui/material";
const shapes = {
    circle: "!rounded-[50%]",
    square: "!rounded-[0px]",
    round: "!rounded-md",
};
const sizes = {
    lg: "h-[60px] px-1.5 !text-base",
    sm: "h-[38px] !text-base",
    md: "h-[50px] px-1.5 !text-base",
};
const Button = (_a) => {
    var { children, className = "", leftIcon, rightIcon, shape, variant = "contained", size = "md", color = "primary" } = _a, restProps = __rest(_a, ["children", "className", "leftIcon", "rightIcon", "shape", "variant", "size", "color"]);
    return (_jsxs(ButtonMui, Object.assign({}, restProps, { variant: variant, color: color, classes: {
            root: `${className} flex gap-2 flex-row items-center !shadow-button  justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} `,
        }, children: [leftIcon && _jsx("span", { className: "text-xl mt-1", children: leftIcon }), children, rightIcon && _jsx("span", { className: "text-xl mt-1", children: rightIcon })] })));
};
export { Button };
//# sourceMappingURL=index.js.map