import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Buttons from "./Panels/Buttons";
import ColorSample from "./ColorSample";
import ResultActions from "../../../store/actions/ResultActions";
import { loadFontWithUrl, relativePathToS3 } from "../../../utils";

const fontTime = 3000;

const ResultScreen = ({ options }) => {
    const dispatch = useDispatch();
    // @ts-ignore
    const type = useSelector((state) => state.company.type);
    // @ts-ignore
    const style = useSelector((state) => state.company.style);
    // @ts-ignore
    const image = useSelector((state) => state.company.image);
    // @ts-ignore
    const name = useSelector((state) => state.company.name);

    // @ts-ignore
    const results = useSelector((state) => state.result.list);

    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setElapsedTime((item) => item + 100);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        if (type && style) {
            dispatch(
                ResultActions.getList({ especialidad: type, estilo: style })
            );
        }
    }, [type, style]);

    if (!type || !style) {
        return null;
    }

    if (!results || !results[0]) {
        return null;
    }

    const { colores, fuentes } = results[0];

    const period = fuentes.length * fontTime;
    const periodCount = Math.floor(elapsedTime / period);
    const timeSinceLastPeriod = elapsedTime - periodCount * period;
    const fontIndex = Math.floor(timeSinceLastPeriod / fontTime);

    return (
        <div className="screen">
            <div className="overlay">
                <img className="result-img" src={image} alt="uploaded logo" />
                <p
                    className="company-name"
                    style={{ fontFamily: fuentes[fontIndex].nombre }}
                >
                    {name}
                </p>

                <div className="fonts">
                    {fuentes.map(({ id, src, nombre }, index) => {
                        loadFontWithUrl(nombre, relativePathToS3(src));

                        return (
                            <h2
                                key={index}
                                className="font"
                                style={{ fontFamily: nombre }}
                            >
                                {nombre}
                            </h2>
                        );
                    })}
                </div>

                <div className="colors">
                    {colores.map((color, index) => (
                        <ColorSample color={color} key={index} />
                    ))}
                </div>
                <Buttons options={options} backwardSkip={2} />
            </div>
        </div>
    );
};

export default ResultScreen;
