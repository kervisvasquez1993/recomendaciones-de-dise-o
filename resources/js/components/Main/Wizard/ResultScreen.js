import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Buttons from "./Panels/Buttons";
import ColorSample from "./ColorSample";
import ResultActions from "../../../store/actions/ResultActions";
import { loadFontWithUrl, relativePathToS3 } from "../../../utils";
import { Link, Redirect } from "react-router-dom";
import { result } from "lodash";
import { useParams } from "react-router";

export const fontTime = 1500;

const ResultScreen = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const image = useSelector((state) => state.company.image);
    // @ts-ignore
    const type = useSelector((state) => state.company.type);
    // @ts-ignore
    const style = useSelector((state) => state.company.style);
    // @ts-ignore
    const { id } = useParams();
    // @ts-ignore
    const name = useSelector((state) => state.company.name);
    // @ts-ignore
    const result = useSelector((state) => state.result.item);

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
        dispatch(ResultActions.get(id));
    }, [type, style]);

    useEffect(() => {
        const addedFonts = [];

        if (result) {
            result.fuentes.forEach(({ nombre, src }) => {
                const addedFont = loadFontWithUrl(
                    nombre,
                    relativePathToS3(src)
                );

                addedFonts.push(addedFont);
            });
        }

        return () => {
            addedFonts.forEach((font) => font.remove());
        };
    }, [result]);

    if (!name) {
        return <Redirect to="/proceso/nombre" />;
    }

    if (!result) {
        return null;
    }

    const { colores, fuentes } = result;

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

                <div className="buttons">
                    <Link to="/proceso/resultados" className="btn btn-link">
                        Ir Atrás
                    </Link>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default ResultScreen;
