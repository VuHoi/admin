import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "./input";
export const InputFormControl = (_a) => {
    var { name } = _a, props = __rest(_a, ["name"]);
    const form = useFormContext();
    return (_jsx(Controller, { control: form.control, name: name, render: ({ field }) => {
            var _a;
            return (_jsx(Input, Object.assign({}, field, props, { error: !!form.formState.errors[name], helperText: (_a = form.formState.errors[name]) === null || _a === void 0 ? void 0 : _a.message })));
        } }));
};
//# sourceMappingURL=inputFormControl.js.map