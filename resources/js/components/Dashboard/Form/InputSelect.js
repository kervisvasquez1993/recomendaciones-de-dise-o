import React, { useContext } from "react";
import { FormContext } from "./GenericForm";
import { extractError } from "./utils";

const InputSelect = ({
    id,
    label,
    value = "",
    className = "",
    children,
    includeDefaultOption = true,
    after = null,
    multiple = false,
}) => {
    const { onChange, values, errors } = useContext(FormContext);

    const error = extractError(errors, id);

    const handleChange = (e) => {
        if (multiple) {
            const value = [...e.target.options]
                .filter((item) => item.selected)
                .map((item) => item.value);

            onChange({
                // @ts-ignore
                target: { id, value },
            });
        } else {
            onChange(e);
        }
    };

    return (
        <div className={`form-group ${className}`}>
            <label htmlFor={id}>{label}</label>

            <select
                multiple={multiple}
                className={"custom-select " + (error ? "is-invalid" : "")}
                id={id}
                name={id}
                onChange={handleChange}
                value={(values && values[id]) || value || ""}
            >
                {includeDefaultOption && (
                    <option value="">Selecciona...</option>
                )}

                {children}
            </select>

            {error && (
                <div className="text-danger">
                    <strong>{error}</strong>
                </div>
            )}

            {after}
        </div>
    );
};

export default InputSelect;
