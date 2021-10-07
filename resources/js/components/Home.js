import React from "react";
import { useState } from "react";
import PanelScreen from "./Panels/PanelScreen";
import HomeScreen from "./Wizard/HomeScreen";
import ImageScreen from "./Wizard/ImageScreen";
import LoadingScreen from "./Wizard/LoadingScreen";
import NameScreen from "./Wizard/NameScreen";
import ResultScreen from "./Wizard/ResultScreen";
import StyleScreen from "./Wizard/StyleScreen";
import TypeScreen from "./Wizard/TypeScreen";

function Home() {
    // @ts-ignore
    //   const currentScreen = useSelector((state) => state.screen.currentScreen);
    const [currentScreen, setCurrentScreen] = useState(0);
    const [screens] = useState([
        HomeScreen,
        NameScreen,
        ImageScreen,
        TypeScreen,
        StyleScreen,
        LoadingScreen,
        ResultScreen,
    ]);

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

    return (
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
    );
}

export default Home;
