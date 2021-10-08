import React, { useContext } from "react";
import { FormContext } from "./GenericForm";
import { extractError } from "./utils";

const InputText = ({
    id,
    label,
    value = "",
    type = "text",
    className = "",
}) => {
    const { onChange, values, errors } = useContext(FormContext);

    const error = extractError(errors, id);

    return (
        <div className={`form-group ${className}`}>
            <label htmlFor={id}>{label}</label>

            <input
                type={type}
                className={"form-control " + (error ? "is-invalid" : "")}
                id={id}
                name={id}
                onChange={onChange}
                value={(values && values[id]) || value || ""}
            />
            {error && (
                <div className="text-danger">
                    <strong>{error}</strong>
                </div>
            )}
        </div>
    );
};

export default InputText;
