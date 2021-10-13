import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import SavedResultActions from "../../../store/actions/SavedResultActions";
import ResultInfo from "./Result/ResultInfo";

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
        resultado
    } = savedResult;

    return (
        <div className="screen">
            <div className="overlay">
                <ResultInfo name={nombre_empresa} result={resultado} />

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
