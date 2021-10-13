import React, { useEffect, useState } from "react";
import { fontTime } from "../ResultScreen";

const ResultName = ({ name, fonts }) => {
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setElapsedTime((item) => item + 100);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const period = fonts.length * fontTime;
    const periodCount = Math.floor(elapsedTime / period);
    const timeSinceLastPeriod = elapsedTime - periodCount * period;
    const fontIndex = Math.floor(timeSinceLastPeriod / fontTime);

    return (
        <p
            className="company-name"
            style={{ fontFamily: fonts[fontIndex].nombre }}
        >
            {name}
        </p>
    );
};

export default ResultName;
