import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import FontActions from "../../../store/actions/fontActions";
// import { deleteFont } from "../../../store/actions/fontActions";
import { deletingConfirmationMessage } from "../../../text";
import { loadFont } from "../../../utils";
import { BASE_PATH } from "./FontList";

const FontItem = ({ data }) => {
    const { id, nombre } = data;
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();

        if (confirm(deletingConfirmationMessage)) {
            dispatch(FontActions.delete(id));
        }
    };

    loadFont(data);

    return (
        <tr>
            <td>{nombre}</td>
            <td>
                <h3 style={{ fontFamily: nombre }}>{nombre}</h3>
                <h3 style={{ fontFamily: nombre }}>Lorem Ipsum</h3>
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

export default FontItem;
