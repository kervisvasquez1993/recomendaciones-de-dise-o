import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setImage } from "../../../store/actions/companyActions";
import Buttons from "./Panels/Buttons";

const ImageScreen = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const name = useSelector((state) => state.company.name);

    const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
        useDropzone({
            maxFiles: 1,
            accept: "image/*",
        });

    // @ts-ignore
    const image = useSelector((state) => state.company.image);
    console.log(image);

    useEffect(() => {
        if (acceptedFiles.length > 0) {
            dispatch(setImage(URL.createObjectURL(acceptedFiles[0])));
        }

        return () => {};
    }, [acceptedFiles, dispatch]);

    if (!name) {
        return <Redirect to="/proceso/nombre" />;
    }

    return (
        <div className="screen">
            <div className="overlay">
                <div
                    {...getRootProps({
                        className: `dropzone rounded mx-5 mb-2 ${
                            isDragActive ? "drag-active" : ""
                        }`,
                    })}
                >
                    <input name="import" {...getInputProps()} />
                    {image ? (
                        <React.Fragment>
                            {image && (
                                <img
                                    className="company-img"
                                    src={image}
                                    alt="uploaded logo"
                                />
                            )}
                        </React.Fragment>
                    ) : (
                        <span>
                            ¡Suba el logo de su empresa haciendo clic aqui!
                        </span>
                    )}
                </div>

                <div className="buttons">
                    <Link to="/proceso/nombre" className="btn btn-link">
                        Ir Atrás
                    </Link>

                    <Link to="/proceso/sector" className="btn">
                        Siguiente
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ImageScreen;
