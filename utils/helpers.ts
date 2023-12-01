export const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export const JSToCSS = (JS: { [x: string]: any }) => {
    let cssString = ""
    for (let objectKey in JS) {
        cssString +=
            objectKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`) +
            ": " +
            JS[objectKey] +
            "; "
    }

    return cssString
}
