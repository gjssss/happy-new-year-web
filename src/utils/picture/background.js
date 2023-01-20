import Konva from "konva"
import { getConfig } from "./config";

export function getBackground() {
    return new Promise((resolve) => {
        const { width, height } = getConfig()
        const backgroundLayer = new Konva.Layer();

        backgroundLayer.add(new Konva.Rect({
            x: 0,
            y: 0,
            width: width,
            height: height,
            fill: '#a00a0a',
            // fill: 'white',
        }));

        Konva.Image.fromURL("http://api.godreams.cn/getQr?id=14", node => {
            node.setAttrs({
                x: 30,
                y: height - 120,
                width: 100,
                height: 100,
                crop: {
                    x: 35,
                    y: 35,
                    width: 300,
                    height: 300
                }
            });
            backgroundLayer.add(node);
            resolve(backgroundLayer)
        })
    })
}