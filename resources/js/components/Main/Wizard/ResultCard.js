import React from "react";
import { Link } from "react-router-dom";
import { loadFonts, useAlternator } from "../../../utils";
import { fontTime } from "./ResultScreen";

const ResultCard = ({ data, name, saved = undefined }) => {
    const { id, colores, fuentes } = data;
    loadFonts(fuentes);
    const font = useAlternator(fuentes, fontTime);

    return (
        <Link
            to={
                saved
                    ? `/proceso/resultado_guardado/${saved}`
                    : `/proceso/resultado/${id}`
            }
        >
            <div className="result-card">
                <h2 className="py-4" style={{ fontFamily: font.nombre }}>
                    {name}
                </h2>

                <div className="card-colors">
                    {colores.map((color, index) => (
                        <div
                            style={{ background: color }}
                            className="color"
                            key={index}
                        ></div>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default ResultCard;
