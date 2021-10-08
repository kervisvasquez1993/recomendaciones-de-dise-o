import React, { useContext } from "react";
import { FormContext } from "./GenericForm";
import { extractError } from "./utils";

const InputNumber = ({
    id,
    label,
    value = "",
    step = 0.01,
    className = "",
    disabled = false,
    readOnly = false
}) => {
    const { onChange, values, errors } = useContext(FormContext);

    const error = extractError(errors, id);

    return (
        <div className={`form-group col ${className}`}>
            <label htmlFor={id}>{label}</label>

            <input
                type="number"
                className={"form-control " + (error ? "is-invalid" : "")}
                id={id}
                name={id}
                onChange={onChange}
                value={values?.[id] ?? value ?? ""}
                step={step}
                disabled={disabled}
                readOnly={readOnly}
            />
            {error && (
                <div className="text-danger">
                    <strong>{error}</strong>
                </div>
            )}
        </div>
    );
};

export default InputNumber;
