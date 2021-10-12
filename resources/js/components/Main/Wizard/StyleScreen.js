import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findTranslation } from "../../../localization";
import { setStyle } from "../../../store/actions/companyActions";
import { getStyles } from "../../../store/actions/styleActions";
import Buttons from "./Panels/Buttons";

const StyleScreen = ({ options }) => {
    // @ts-ignore
    const style = useSelector((state) => state.company.style);
    // @ts-ignore
    const styles = useSelector((state) => state.style.list);
    // @ts-ignore
    const type = useSelector((state) => state.company.type);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(setStyle(e.target.value));
    };

    useEffect(() => {
        dispatch(getStyles({ speciality: type }));
    }, [type]);

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

                <Buttons
                    options={options}
                    disableForwardButton={style === ""}
                />
            </div>
        </div>
    );
};

export default StyleScreen;
