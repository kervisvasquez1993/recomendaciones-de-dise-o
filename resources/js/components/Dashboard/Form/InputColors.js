import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { ChromePicker } from "react-color";
import { BsPlusLg } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FormContext } from "./GenericForm";
import { extractError } from "./utils";

const InputColors = ({ id, label, colors: initialColors = ["#fff"] }) => {
    const [colors, setColors] = useState(initialColors);
    const { onChange, errors } = useContext(FormContext);
    const error = extractError(errors, id);

    const handleAddColor = () => {
        if (colors.length == 0) {
            setColors(["#fff"]);
        } else {
            setColors([...colors, colors[colors.length - 1]]);
        }
    };

    const handleRemoveColor = () => {
        const newColors = [...colors];
        newColors.pop();
        setColors(newColors);
    };

    const handleChangeColor = (index, color) => {
        const newColors = [...colors];
        newColors[index] = color;
        setColors(newColors);
    };

    useEffect(() => {
        onChange({
            // @ts-ignore
            target: { id, value: colors.map((item) => item.hex || item) },
        });
    }, [colors]);

    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>

            <div className="d-flex flex-wrap">
                {colors.map((item, index) => {
                    return (
                        <div key={index} className="p5">
                            <ChromePicker
                                color={item}
                                onChange={(targetColor) =>
                                    handleChangeColor(index, targetColor)
                                }
                            />
                        </div>
                    );
                })}
            </div>

            <div className="d-flex justify-content-center mt-4">
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleRemoveColor}
                >
                    <RiDeleteBin5Fill />
                </button>

                <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleAddColor}
                >
                    <BsPlusLg className="mr-2" />
                    Agregar color
                </button>
            </div>

            {error && (
                <div className="text-danger">
                    <strong>{error}</strong>
                </div>
            )}
        </div>
    );
};

export default InputColors;
