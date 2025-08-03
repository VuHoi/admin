import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from "react-hook-form";
import { Input } from "./input";
export const InputFormControl = (_a) => {
    var { name, form } = _a, props = __rest(_a, ["name", "form"]);
    return (_jsx(Controller, { control: form.control, name: name, render: ({ field }) => {
            var _a;
            return (_jsx(Input, Object.assign({}, field, { label: props.label, error: !!form.formState.errors[name], helperText: (_a = form.formState.errors[name]) === null || _a === void 0 ? void 0 : _a.message, variant: props.variant, size: props.size, fullWidth: props.fullWidth, padding: props.padding, leftIcon: props.leftIcon, rightIcon: props.rightIcon, placeholder: props.placeholder, className: props.className })));
        } }));
};
//# sourceMappingURL=inputFormControl.js.map