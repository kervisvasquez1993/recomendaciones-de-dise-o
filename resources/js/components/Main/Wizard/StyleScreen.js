import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { setStyle } from "../../../store/actions/companyActions";
import { getStyles } from "../../../store/actions/styleActions";

const StyleScreen = () => {
    const history = useHistory();
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

    const handleNext = () => {
        history.push("/proceso/resultados");
    };

    const handleBack = () => {
        history.push("/proceso/sector");
    };

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
                    <button
                        className="btn btn-link"
                        onClick={handleBack}
                        disabled={!name}
                    >
                        Ir Atrás
                    </button>

                    <button
                        className="btn"
                        onClick={handleNext}
                        disabled={!style}
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StyleScreen;
