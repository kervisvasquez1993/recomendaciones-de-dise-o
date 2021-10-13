import React from "react";
import { relativePathToS3 } from "../../../../utils";
import ResultColors from "./ResultColors";
import ResultFonts from "./ResultFonts";
import ResultName from "./ResultName";

const ResultInfo = ({name, result}) => {
    const { colores, fuentes, descripcion, logotipo, ilustracion } = result;

    return (
        <>
            <p className="mb-3">{descripcion}</p>
            <h2 className="mb-3 h3">Tipo de logo: {logotipo.nombre}</h2>
            <h2 className="mb-3 h3">Ilustración: {ilustracion.nombre}</h2>
            {ilustracion && (
                <img
                    className="result-img"
                    src={relativePathToS3(ilustracion.src)}
                    alt="uploaded logo"
                />
            )}
            <ResultName name={name} fonts={fuentes} />
            <ResultFonts fonts={fuentes} />
            <ResultColors colors={colores} />
        </>
    );
};

export default ResultInfo;
