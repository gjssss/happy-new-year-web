/**
 * @param { String } name 生成头像种子
 * @returns {String} url
 */
export function generateAvator(name) {
    return "http://hellogjs.top:5001/5.x/micah/svg?seed=" + name + "&eyebrows=up,eyelashesUp&mouth=pucker,laughing,smile,smirk,surprised,nervous"
}