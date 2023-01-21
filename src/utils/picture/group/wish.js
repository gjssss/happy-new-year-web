import Konva from "konva"
import { getConfig } from "../config";

export function getWish() {
    return new Promise((resolve, reject) => {
        const { width, wish } = getConfig();
        const wishGroup = new Konva.Group({
            x: 0,
            y: wish.y,
        });

        Konva.Image.fromURL("http://api.godreams.cn/getImg/1.png", node => {
            node.setAttrs({
                x: 0,
                y: 0,
                width: width,
                height: 325,
            });
            wishGroup.add(node);
            resolve(wishGroup);
        })
    })

}