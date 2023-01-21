
let instance = {
    name: 'ggg',
    content: '',
    id: 15
}

export function getConfig() {
    const width = 600;
    const height = 800;

    const wishText = {
        x: 0,
        y: 0,
        width: width,
        marginTop: 50,
        fontSize: 30,
        color: '#f4e6b5',
        text: '祝/大/家/新/年/快/乐/万/事/如/意'
    }

    const wish = {
        y: 120,
    }

    const content = {
        width: 500,
        height: 120 + Math.floor(instance.content.length / 13 + 1) * 40,
        y: 550,
        zhuWidth: 20,
        url: "http://api.godreams.cn/img?name=" + instance.name,
        text: instance.content,
    }
    return {
        width: width,
        height: height + Math.floor(instance.content.length / 13 + 1) * 40,
        wishText: wishText,
        wish: wish,
        content: content,
        id: instance.id
    }
}
export function setName(name) {
    instance.name = name;
}
export function setContent(content) {
    instance.content = content;
}
export function setId(id) {
    instance.id = id;
}