import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SavedResultActions from "../../../store/actions/SavedResultActions";
import { loadFonts, useAlternator } from "../../../utils";
import { fontTime } from "./ResultScreen";

const ResultCard = ({ data, name, saved = undefined }) => {
    const dispatch = useDispatch();
    const { id, colores, fuentes } = data;
    loadFonts(fuentes);
    const font = useAlternator(fuentes, fontTime);

    const handleDelete = (e) => {
        e.preventDefault();
        if (confirm("¿Está seguro que quiere eliminar esta imagen?")) {
            dispatch(SavedResultActions.delete(saved));
        }
    };

    return (
        <Link
            to={
                saved
                    ? `/proceso/resultado_guardado/${saved}`
                    : `/proceso/resultado/${id}`
            }
        >
            <div className={`result-card ${saved ? "saved" : ""}`}>
                <div className="d-flex align-items-center">
                    <h2
                        className="py-3 px-2"
                        style={{ fontFamily: font.nombre }}
                    >
                        {name}
                    </h2>
                    {saved && (
                        <button className="delete-btn" onClick={handleDelete}>
                            <FiTrash2 className="text-danger" />
                        </button>
                    )}
                </div>

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
