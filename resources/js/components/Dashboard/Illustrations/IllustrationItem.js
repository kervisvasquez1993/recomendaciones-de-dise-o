import React, { useEffect } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import IllustrationActions from "../../../store/actions/IllustrationActions";
import { deletingConfirmationMessage } from "../../../text";
import { loadFontWithUrl } from "../../../utils";
import { BASE_PATH } from "./IllustrationList";

const IllustrationItem = ({ data }) => {
    const { id, nombre, descripcion, src } = data;
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();

        if (confirm(deletingConfirmationMessage)) {
            dispatch(IllustrationActions.delete(id));
        }
    };

    useEffect(() => {
        const style = loadFontWithUrl(nombre, `/storage/${src}`);

        return () => {
            style.remove();
        };
    }, [data]);

    return (
        <tr>
            <td>{nombre}</td>
            <td>{descripcion}</td>
            <td>
                <img
                    className="table-img"
                    src={`/storage/${src}`}
                    alt={descripcion}
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

export default IllustrationItem;
