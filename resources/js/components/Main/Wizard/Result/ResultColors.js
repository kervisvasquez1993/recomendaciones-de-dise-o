import React from "react";
import ColorSample from "../ColorSample";

const ResultColors = ({ colors }) => {
    return (
        <div className="colors">
            {colors.map((color, index) => (
                <ColorSample color={color} key={index} />
            ))}
        </div>
    );
};

export default ResultColors;
