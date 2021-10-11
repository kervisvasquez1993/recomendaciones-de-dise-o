import React from "react";

const ResultColors = ({ colors }) => {
    return colors.map((color, index) => {
        return (
            <div
                key={index}
                className="color-sample"
                style={{ backgroundColor: color }}
            ></div>
        );
    });
};

export default ResultColors;
