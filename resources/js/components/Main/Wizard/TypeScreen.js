import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { setType } from "../../../store/actions/companyActions";
import SpecialityActions from "../../../store/actions/SpecialityActions";

const TypeScreen = () => {
    const history = useHistory();
    // @ts-ignore
    const type = useSelector((state) => state.company.type);
    // @ts-ignore
    const name = useSelector((state) => state.company.name);
    const dispatch = useDispatch();
    // @ts-ignore
    const specialities = useSelector((state) => state.speciality.list);

    useEffect(() => {
        dispatch(SpecialityActions.getList({ con_resultados: true }));
    }, []);

    const handleChange = (e) => {
        dispatch(setType(e.target.value));
    };

    if (!name) {
        return <Redirect to="/proceso/nombre" />;
    }

    const handleNext = () => {
        history.push("/proceso/estilo");
    };

    const handleBack = () => {
        history.push("/proceso/imagen");
    };

    return (
        <div className="screen">
            <div className="overlay">
                <form action="">
                    <label htmlFor="">¿Que tipo de empresa es?</label>
                    <select name="type" onChange={handleChange} value={type}>
                        <option value=""></option>
                        {specialities.map((item, index) => (
                            <option value={item.id} key={index}>
                                {item.etiqueta}
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
                        disabled={!type}
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TypeScreen;
