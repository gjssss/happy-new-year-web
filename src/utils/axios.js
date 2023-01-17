import axios from "axios"

export function test() {
    axios.get("http://api.godreams.cn/getRom?id=1").then(data => { console.log(data); }).catch(e => { console.error(e); })
}