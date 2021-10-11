import React from "react";

const ResultColors = ({ colors }) => {
    return colors.map((color) => {
        return (
            <div
                key={color}
                className="color-sample"
                style={{ backgroundColor: color }}
            ></div>
        );
    });
};

export default ResultColors;
