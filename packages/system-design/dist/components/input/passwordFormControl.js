import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Controller, useFormContext } from "react-hook-form";
import { Password } from "./password";
export const PasswordFormControl = (_a) => {
    var { name, label } = _a, props = __rest(_a, ["name", "label"]);
    const form = useFormContext();
    return (_jsx(Controller, { control: form.control, name: name, render: ({ field }) => {
            var _a;
            return (_jsx(Password, Object.assign({}, field, props, { label: label || "", error: !!form.formState.errors[name], helperText: (_a = form.formState.errors[name]) === null || _a === void 0 ? void 0 : _a.message })));
        } }));
};
//# sourceMappingURL=passwordFormControl.js.map