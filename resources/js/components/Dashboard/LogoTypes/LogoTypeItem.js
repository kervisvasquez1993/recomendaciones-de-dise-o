import React, { useEffect } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import LogoTypeActions from "../../../store/actions/LogoTypeActions";
import { deletingConfirmationMessage } from "../../../text";
import { BASE_PATH } from "./LogoTypeList";

const LogoTypeItem = ({ data }) => {
    const { id, nombre, descripcion } = data;
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();

        if (confirm(deletingConfirmationMessage)) {
            dispatch(LogoTypeActions.delete(id));
        }
    };

    return (
        <tr>
            <td>{nombre}</td>
            <td>{descripcion}</td>
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

export default LogoTypeItem;
