import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import PanelScreen from "../Panels/PanelScreen";
import ImageScreen from "./ImageScreen";
import LoadingScreen from "./LoadingScreen";
import ResultScreen from "./ResultScreen";
import StyleScreen from "./StyleScreen";
import TypeScreen from "./TypeScreen";

function Wizard() {
    const [currentScreen, setCurrentScreen] = useState(0);
    const [screens] = useState([
        ImageScreen,
        TypeScreen,
        StyleScreen,
        LoadingScreen,
        ResultScreen,
    ]);
    // @ts-ignore
    const name = useSelector((state) => state.company.name);

    const nextScreen = () => {
        skipScreens(1);
    };

    const lastScreen = () => {
        skipScreens(-1);
    };

    const firstScreen = () => {
        setCurrentScreen(0);
    };

    const skipScreens = (count) => {
        let target = currentScreen + count;
        target = Math.min(target, screens.length - 1);
        target = Math.max(target, 0);

        setCurrentScreen(target);
    };

    const options = {
        nextScreen,
        lastScreen,
        firstScreen,
        skipScreens,
        currentScreen,
        screenCount: screens.length,
    };

    if (!name) {
        return <Redirect to="/" />;
    }

    return (
        <div className="wizard">
            <div className="screens">
                <div className="overlay screen-background"></div>
                {screens.map((Item, index) => {
                    const className =
                        index === currentScreen
                            ? "active"
                            : index < currentScreen
                            ? "left"
                            : "right";

                    return (
                        <PanelScreen key={index} className={className}>
                            <Item
                                options={{
                                    ...options,
                                    index,
                                    isActive: index === currentScreen,
                                }}
                            />
                        </PanelScreen>
                    );
                })}
            </div>
        </div>
    );
}

export default Wizard;
