import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
    setCompanyName,
    setImage,
    setStyle,
    setType,
} from "../../../store/actions/companyActions";
import { UseAlternator } from "../../../utils";
import { fontTime } from "./ResultScreen";

const ResultCard = ({ data, name, saved = undefined }) => {
    const { id, colores, fuentes, especialidad_id, estilo_id } = data;
    const dispatch = useDispatch();

    const font = UseAlternator(fuentes, fontTime);

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
