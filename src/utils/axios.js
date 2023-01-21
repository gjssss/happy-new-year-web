import axios from "axios"
import qs from 'qs'

const instance = axios.create({
    baseURL: 'http://api.godreams.cn',
    timeout: 1000,
});

export function getWish(id) {
    return instance.get("/getWish", {
        params: {
            id: id
        }
    })
}

export function getRandomWish(id) {
    return instance.get("/getRom", {
        params: {
            id: id
        }
    })
}

export function getComments(id) {
    return instance.get("/getCom", {
        params: {
            id: id
        }
    })
}

export function postComments(id, name, content) {
    return instance.post("/upCom", qs.stringify({
        id: id,
        name: name,
        content: content
    }))
}