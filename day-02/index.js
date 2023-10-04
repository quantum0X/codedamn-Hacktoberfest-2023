/**
 * Returns a 6 digit hexCode prepended with '#' as a valid color code
 * @returns {string} hexCode
 */
export function generateRandomHexCode() {
    let hexCode = "#";

    for (let i = 0; i < 3; i++) {
        hexCode += Math.floor(Math.random() * 256).toString(16);
    }

    if (hexCode.length != 7) {
        let remainLen = 7 - hexCode.length;
        while (remainLen > 0) {
            hexCode += '0';
            remainLen -= 1;
        }
    }

    return hexCode;
}

// You can log the results of the function to debug
// Sample Strings
for (let i = 0; i < 100; i++) {
    console.log(generateRandomHexCode());
}
