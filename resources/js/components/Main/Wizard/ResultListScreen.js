import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ColorSample from "./ColorSample";
import ResultActions from "../../../store/actions/ResultActions";
import { loadFontWithUrl, relativePathToS3 } from "../../../utils";
import { Link, Redirect, useHistory } from "react-router-dom";
import ResultCard from "./ResultCard";

const ResultListScreen = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    // @ts-ignore
    const type = useSelector((state) => state.company.type);
    // @ts-ignore
    const style = useSelector((state) => state.company.style);
    // @ts-ignore
    const image = useSelector((state) => state.company.image);
    // @ts-ignore
    const name = useSelector((state) => state.company.name);

    // @ts-ignore
    const results = useSelector((state) => state.result.list);

    useEffect(() => {
        if (type && style) {
            dispatch(
                ResultActions.getList({ especialidad: type, estilo: style })
            );
        }
    }, [type, style]);

    useEffect(() => {
        const addedFonts = [];

        results.forEach((resultado) => {
            resultado.fuentes.forEach(({ nombre, src }) => {
                const addedFont = loadFontWithUrl(
                    nombre,
                    relativePathToS3(src)
                );

                addedFonts.push(addedFont);
            });
        });

        return () => {
            addedFonts.forEach((font) => font.remove());
        };
    }, [results]);

    if (!name) {
        return <Redirect to="/proceso/nombre" />;
    }

    const handleBack = () => {
        history.push("/proceso/estilo");
    };

    return (
        <div className="screen">
            <div className="overlay">
                <div className="results">
                    {results.map((item) => (
                        <ResultCard data={item} key={item.id} />
                    ))}
                </div>
                
                <div className="buttons">
                    <button
                        className="btn btn-link"
                        onClick={handleBack}
                        disabled={!name}
                    >
                        Ir Atrás
                    </button>

                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default ResultListScreen;
