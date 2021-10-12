import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { findTranslation } from "../../../localization";
import { setStyle } from "../../../store/actions/companyActions";
import { getStyles } from "../../../store/actions/styleActions";
import Buttons from "./Panels/Buttons";

const StyleScreen = () => {
    // @ts-ignore
    const style = useSelector((state) => state.company.style);
    // @ts-ignore
    const styles = useSelector((state) => state.style.list);
    // @ts-ignore
    const type = useSelector((state) => state.company.type);
    // @ts-ignore
    const name = useSelector((state) => state.company.name);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(setStyle(e.target.value));
    };

    useEffect(() => {
        dispatch(getStyles({ speciality: type }));
    }, [type]);

    if (!name) {
        return <Redirect to="/proceso/nombre" />;
    }

    if (!type) {
        return null;
    }

    return (
        <div className="screen">
            <div className="overlay">
                <form action="">
                    <label htmlFor="">
                        ¿Qué estilo piensa que posee su logotipo?
                    </label>
                    <select name="type" onChange={handleChange} value={style}>
                        <option value=""></option>
                        {styles.map(({ etiqueta, id }) => (
                            <option value={id} key={id}>
                                {etiqueta}
                            </option>
                        ))}
                    </select>
                </form>

                <div className="buttons">
                    <Link to="/proceso/sector" className="btn btn-link">
                        Ir Atrás
                    </Link>

                    <Link to="/proceso/resultados" className="btn">
                        Siguiente
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StyleScreen;
