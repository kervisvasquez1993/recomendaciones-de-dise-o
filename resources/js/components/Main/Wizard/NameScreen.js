import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { setCompanyName } from "../../../store/actions/companyActions";

const NameScreen = () => {
    // @ts-ignore
    const name = useSelector((state) => state.company.name);
    const dispatch = useDispatch();
    const history = useHistory();
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/proceso/imagen");
    };

    useEffect(() => {
        inputRef.current.focus({ preventScroll: true });
    }, []);

    return (
        <div className="screen">
            <div className="overlay">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Escriba el nombre de su empresa</label>
                    <input
                        ref={inputRef}
                        type="text"
                        value={name}
                        onChange={(e) =>
                            dispatch(setCompanyName(e.target.value))
                        }
                    />
                </form>

                {/* <Buttons options={options} disableForwardButton={!name} /> */}
                <div className="buttons">
                    <div></div>

                    <Link to="/proceso/imagen" className="btn">
                        Siguiente
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NameScreen;
