import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SpecialityActions from "../../../store/actions/SpecialityActions";
import { deletingConfirmationMessage } from "../../../text";

const SpecialityItem = ({ speciality }) => {
    const { id, etiqueta, descripcion } = speciality;
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();

        if (confirm(deletingConfirmationMessage)) {
            dispatch(SpecialityActions.delete(id));
        }
    };

    return (
        <tr>
            <td>{etiqueta}</td>
            <td>{descripcion}</td>
            <td>
                <Link to={`/dashboard/especialidades/${id}`}>
                    <FiEdit className="f-16 mr-15 text-green" />
                </Link>

                <a href="#" onClick={handleDelete}>
                    <FiTrash2 className="f-16 mr-15 text-red" />
                </a>
            </td>
        </tr>
    );
};

export default SpecialityItem;
