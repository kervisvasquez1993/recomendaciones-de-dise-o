import React from "react";
import { Link } from "react-router-dom";
import { UseAlternator } from "../../../utils";
import ColorSample from "./ColorSample";
import { fontTime } from "./ResultScreen";

const ResultCard = ({ data, name }) => {
    const { id, colores, fuentes } = data;

    const font = UseAlternator(fuentes, fontTime);

    return (
        <Link to={`/proceso/resultado/${id}`}>
            <div className="result-card">
                <h2 className="py-4" style={{ fontFamily: font.nombre }}>{name}</h2>

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
