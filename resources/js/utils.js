import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// export const loadFont = (name) => {
//     const fontData = fonts.find((item) => item.name === name);

//     if (fontData) {
//         if (!fontData.loaded) {
//             var newStyle = document.createElement("style");
//             newStyle.appendChild(document.createTextNode(fontData.rule));
//             document.head.appendChild(newStyle);
//             fontData.loaded = true;
//         }

//         return true;
//     }

//     return false;
// };

export const loadFontWithUrl = (name, url) => {
    var newStyle = document.createElement("style");
    newStyle.appendChild(
        document.createTextNode(
            `@font-face {font-family: "${name}"; src: url("${url}");}`
        )
    );
    document.head.appendChild(newStyle);
    // fontData.loaded = true;

    return newStyle;
};

export const copyToClipboard = (text) => {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
};

export const relativePathToS3 = (path) => {
    const s3Url = process.env.MIX_S3_URL || "http://localhost:3000";

    return `${s3Url}/${path}`;
};

export function useUser() {
    // @ts-ignore
    const user = useSelector((state) => state.auth.user);

    return user;
}

export const UseAlternator = (elements, time) => {
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setElapsedTime((item) => item + 100);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const period = elements.length * time;
    const periodCount = Math.floor(elapsedTime / period);
    const timeSinceLastPeriod = elapsedTime - periodCount * period;
    const targetIndex = Math.floor(timeSinceLastPeriod / time);

    return elements[targetIndex];
};
