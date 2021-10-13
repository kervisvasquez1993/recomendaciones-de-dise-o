import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import SavedResultActions from "../../../store/actions/SavedResultActions";
import ResultFonts from "./Result/ResultFonts";
import ResultColors from "./Result/ResultColors";
import ResultName from "./Result/ResultName";

export const fontTime = 1500;

const SavedResultScreen = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const { id } = useParams();
    // @ts-ignore
    const savedResult = useSelector((state) => state.savedResult.item);

    useEffect(() => {
        dispatch(SavedResultActions.get(id));
    }, [id]);

    if (!savedResult) {
        return null;
    }

    const {
        nombre_empresa,
        resultado: { colores, fuentes, logo_empresa },
    } = savedResult;

    return (
        <div className="screen">
            <div className="overlay">
                <img
                    className="result-img"
                    src={logo_empresa}
                    alt="uploaded logo"
                />

                <ResultName name={nombre_empresa} fonts={fuentes} />
                <ResultFonts fonts={fuentes} />
                <ResultColors colors={colores} />

                <div className="buttons">
                    <Link to="/" className="btn btn-link">
                        Ir Atrás
                    </Link>

                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default SavedResultScreen;
