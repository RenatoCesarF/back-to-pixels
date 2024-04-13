const exceptiosn = ["e", "do", "de", "da",]
export function toTitleCase(str: string) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            if (txt.length == 1 || exceptiosn.includes(txt)) {
                return txt; // Return the word as is if it has less than 2 characters
            } else {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        }
    );
}