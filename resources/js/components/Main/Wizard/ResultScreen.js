import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResultActions from "../../../store/actions/ResultActions";
import { useUser } from "../../../utils";
import { Link, Redirect } from "react-router-dom";
import { useParams } from "react-router";
import SavedResultActions from "../../../store/actions/SavedResultActions";
import ResultName from "./Result/ResultName";
import ResultFonts from "./Result/ResultFonts";
import ResultColors from "./Result/ResultColors";

export const fontTime = 1500;

const ResultScreen = () => {
    const dispatch = useDispatch();
    const user = useUser();
    // @ts-ignore
    const image = useSelector((state) => state.company.image);
    // @ts-ignore
    const type = useSelector((state) => state.company.type);
    // @ts-ignore
    const style = useSelector((state) => state.company.style);
    // @ts-ignore
    const { id } = useParams();
    // @ts-ignore
    const name = useSelector((state) => state.company.name);
    // @ts-ignore
    const result = useSelector((state) => state.result.item);
    // @ts-ignore
    const savedResults = useSelector((state) => state.savedResult.list);

    useEffect(() => {
        dispatch(ResultActions.get(id));
        dispatch(SavedResultActions.getList());
    }, [type, style]);

    if (!name) {
        return <Redirect to="/proceso/nombre" />;
    }

    if (!result) {
        return null;
    }

    const { colores, fuentes } = result;

    const isSaved = savedResults.find(
        (item) =>
            item.nombre_empresa === name && item.resultado_id === result.id
    );

    const handleSave = () => {
        const onSuccess = (data) => {
            dispatch(SavedResultActions.getList());
        };

        const data = new FormData();
        data.append("nombre_empresa", name);
        data.append("resultado_id", result.id);
        data.append("logo_empresa", image);

        dispatch(SavedResultActions.create(data, onSuccess));
    };

    return (
        <div className="screen">
            <div className="overlay">
                {image && (
                    <img
                        className="result-img"
                        src={URL.createObjectURL(image)}
                        alt="uploaded logo"
                    />
                )}

                <ResultName name={name} fonts={fuentes} />
                <ResultFonts fonts={fuentes} />
                <ResultColors colors={colores} />

                {!user && (
                    <p className="text-white">
                        <Link to="/register">Registrate</Link> para poder
                        guardar el resultado
                    </p>
                )}

                <div className="buttons">
                    <Link to="/proceso/resultados" className="btn btn-link">
                        Ir Atrás
                    </Link>

                    {user ? (
                        <button
                            className="btn"
                            onClick={handleSave}
                            disabled={isSaved}
                        >
                            {isSaved ? "¡Guardado!" : "Guardar"}
                        </button>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResultScreen;
