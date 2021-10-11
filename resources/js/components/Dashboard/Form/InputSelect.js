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
}) => {
    const { onChange, values, errors } = useContext(FormContext);

    const error = extractError(errors, id);

    return (
        <div className={`form-group ${className}`}>
            <label htmlFor={id}>{label}</label>

            <select
                className={"custom-select " + (error ? "is-invalid" : "")}
                id={id}
                name={id}
                onChange={onChange}
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
