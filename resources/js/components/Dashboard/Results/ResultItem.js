import React, { useEffect } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import LogoTypeActions from "../../../store/actions/LogoTypeActions";
import { deletingConfirmationMessage } from "../../../text";
import { relativePathToS3 } from "../../../utils";
import ResultColors from "./ResultColors";
import { BASE_PATH } from "./ResultList";

const ResultItem = ({ data }) => {
    const {
        id,
        especialidad,
        estilo,
        descripcion,
        logotipo,
        ilustracion,
        fuentes,
    } = data;

    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();

        if (confirm(deletingConfirmationMessage)) {
            dispatch(LogoTypeActions.delete(id));
        }
    };

    return (
        <tr>
            <td>{especialidad.etiqueta}</td>
            <td>{estilo.etiqueta}</td>
            <td>
                {fuentes.map((item, index) => (
                    <div key={index} style={{ fontFamily: item.nombre }}>
                        {item.nombre}
                    </div>
                ))}
            </td>
            <td>
                <ResultColors colors={data.colores} />
            </td>
            <td>{descripcion}</td>
            <td>{logotipo.nombre}</td>
            <td>
                <img
                    className="table-img"
                    src={relativePathToS3(ilustracion.src)}
                    alt={ilustracion.nombre}
                />
            </td>
            <td>
                <Link to={`/dashboard/${BASE_PATH}/${id}`}>
                    <FiEdit className="f-16 mr-15 text-green" />
                </Link>

                <a href="#" onClick={handleDelete}>
                    <FiTrash2 className="f-16 mr-15 text-red" />
                </a>
            </td>
        </tr>
    );
};

export default ResultItem;
