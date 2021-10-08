import React, { useState } from "react";
import { useSelector } from "react-redux";
import GenericForm from "./GenericForm";

const GenericFormCard = ({
    title = undefined,
    formData = {},
    onSubmit,
    onCancel = undefined,
    methods = undefined,
    children,
    submitButtonText = "Enviar",
}) => {
    const [data, setData] = useState({ ...formData });

    // @ts-ignore
    const isEditing = useSelector((state) => state.genericForm.isEditing);
    // @ts-ignore
    const errors = useSelector((state) => state.genericForm.errors);
    // @ts-ignore
    // const error = useSelector((state) => state.genericForm.error);

    const handleChange = (e) => {
        const { id, value } = e.target;

        setData((data) => {
            let newData = {
                ...data,
                [id]: value,
            };

            return newData;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData();
        Object.keys(data).forEach((key) => formData.append(key, data[key]));

        const result = onSubmit(data, formData);

        if (result) {
            setData(result);
        }
    };

    const handleDropFiles = (id, files) => {
        console.log(id, files);
    };

    if (methods) {
        methods.current = {
            setData,
        };
    }

    return (
        <React.Fragment>
            <div className="card">
                {title && (
                    <div className="card-header">
                        <h3>Default form</h3>
                    </div>
                )}

                <div className="card-body">
                    <GenericForm
                        handleSubmit={handleSubmit}
                        onChange={handleChange}
                        values={data}
                        errors={errors}
                        // error={error}
                        setData={setData}
                        hideButtons
                        onDropFiles={handleDropFiles}
                    >
                        {children}
                    </GenericForm>

                    <button
                        className="btn btn-success mr-2"
                        type="submit"
                        form="genericForm"
                        disabled={isEditing}
                    >
                        {isEditing ? (
                            <div className="spinner-border spinner-border-sm">
                                <span className="sr-only">Loading...</span>
                            </div>
                        ) : (
                            submitButtonText
                        )}
                    </button>

                    {onCancel && (
                        <button className="btn btn-light" onClick={onCancel}>
                            Cancelar
                        </button>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};

export default GenericFormCard;
