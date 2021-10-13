import React, { useEffect } from "react";
import { loadFontWithUrl, relativePathToS3 } from "../../../../utils";

const ResultFonts = ({ fonts }) => {
    useEffect(() => {
        const addedFonts = [];

        fonts.forEach(({ nombre, src }) => {
            const addedFont = loadFontWithUrl(nombre, relativePathToS3(src));

            addedFonts.push(addedFont);
        });

        return () => {
            addedFonts.forEach((font) => font.remove());
        };
    }, [fonts]);

    return (
        <div className="fonts">
            {fonts.map(({ id, nombre }) => {
                return (
                    <h2
                        key={id}
                        className="font"
                        style={{ fontFamily: nombre }}
                    >
                        {nombre}
                    </h2>
                );
            })}
        </div>
    );
};

export default ResultFonts;
