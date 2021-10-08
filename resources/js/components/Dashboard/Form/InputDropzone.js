import React, { useCallback, useContext, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { FormContext } from "./GenericForm";
import { extractError } from "./utils";

const InputDropzone = ({
    id,
    label,
    options,
    className = "",
    dropzoneMessage = "Arrastre un archivo o haga clic aquí",
}) => {
    const { onChange, onDropFiles, errors } = useContext(FormContext);

    const onDrop = useCallback((acceptedFiles) => {
        if (onDropFiles) {
            // onDropFiles(id, acceptedFiles);
            onChange({ target: { id, value: acceptedFiles[0] } });
        }
    }, []);

    const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
        useDropzone({ ...options, onDrop });

    const error = extractError(errors, id);

    return (
        <div className={`form-group ${className}`}>
            <label htmlFor={id}>{label}</label>

            <div className="d-flex justify-content-center">
                <div
                    {...getRootProps({
                        className: `dropzone rounded mx-5 mb-2 ${
                            isDragActive ? "drag-active" : ""
                        }`,
                    })}
                >
                    <input name="import" {...getInputProps()} />
                    {acceptedFiles.length > 0 ? (
                        <div>
                            {acceptedFiles[0].name} - {acceptedFiles[0].size}{" "}
                            bytes
                        </div>
                    ) : (
                        <span>{dropzoneMessage}</span>
                    )}
                </div>
            </div>

            {error && (
                <div className="text-danger">
                    <strong>{error}</strong>
                </div>
            )}
        </div>
    );
};

export default InputDropzone;
