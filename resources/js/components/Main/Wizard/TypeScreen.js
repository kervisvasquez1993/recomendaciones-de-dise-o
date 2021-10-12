import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setType } from "../../../store/actions/companyActions";
import SpecialityActions from "../../../store/actions/SpecialityActions";
import Buttons from "./Panels/Buttons";

const TypeScreen = ({ options }) => {
    // @ts-ignore
    const type = useSelector((state) => state.company.type);
    const dispatch = useDispatch();
    // @ts-ignore
    const specialities = useSelector((state) => state.speciality.list);

    useEffect(() => {
        dispatch(SpecialityActions.getList({ con_resultados: true }));
    }, []);

    const handleChange = (e) => {
        dispatch(setType(e.target.value));
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

                <Buttons options={options} disableForwardButton={type === ""} />
            </div>
        </div>
    );
};

export default TypeScreen;
