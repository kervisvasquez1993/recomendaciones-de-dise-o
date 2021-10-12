import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
// @ts-ignore
import loadingAnimation from "../../lotties/703-navis-loader.json";
// @ts-ignore
import successAnimation from "../../lotties/68994-success.json";
import Buttons from "../Panels/Buttons";

const LoadingScreen = ({ options }) => {
    const { isActive } = options;

    return (
        <div className="screen">
            <div className="overlay transition-all">
                <div className={`overlay-lottie`}>
                    <Lottie
                        options={{
                            loop: true,
                            autoplay: true,
                            animationData: successAnimation,
                        }}
                        style={{ maxWidth: "450px" }}
                    />
                    <p>
                        ¡El análisis está listo! Haga clic en "Siguiente" para
                        ver los parámetros estéticos recomendados según las
                        tendencias actuales y público objetivo.
                    </p>
                </div>
            </div>
            <Buttons options={options} showForwardButton={true} />
        </div>
    );
};

export default LoadingScreen;
