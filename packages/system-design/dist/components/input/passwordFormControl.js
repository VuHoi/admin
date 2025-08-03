import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from "react-hook-form";
import { Password } from "./password";
export const PasswordFormControl = (_a) => {
    var { name, label, form } = _a, props = __rest(_a, ["name", "label", "form"]);
    return (_jsx(Controller, { control: form.control, name: name, render: ({ field }) => {
            var _a;
            return (_jsx(Password, Object.assign({}, field, { label: label || "", error: !!form.formState.errors[name], helperText: (_a = form.formState.errors[name]) === null || _a === void 0 ? void 0 : _a.message })));
        } }));
};
//# sourceMappingURL=passwordFormControl.js.map