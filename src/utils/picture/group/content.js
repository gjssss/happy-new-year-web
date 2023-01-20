import Konva from "konva"
import { getConfig } from "../config";

export function getContent() {
    return new Promise((resolve, reject) => {
        const { width, content } = getConfig();

        const contentGroup = new Konva.Group({
            x: (width - content.width) / 2,
            y: content.y,
        });
        contentGroup.add(new Konva.Rect({
            x: 0,
            y: 0,
            width: content.zhuWidth,
            height: content.height,
            fill: '#ffdbac',
            cornerRadius: content.zhuWidth
        }));
        contentGroup.add(new Konva.Rect({
            x: 0,
            y: 0,
            width: content.zhuWidth,
            height: content.height,
            fill: '#ffdbac',
            cornerRadius: content.zhuWidth,
            offsetX: -content.width + content.zhuWidth,
        }));
        contentGroup.add(new Konva.Rect({
            x: 0,
            y: 0,
            width: content.width - content.zhuWidth,
            height: content.height - content.zhuWidth,
            fill: '#ffdbac',
            offsetX: -content.zhuWidth,
            offsetY: -content.zhuWidth / 2,
        }));
        contentGroup.add(new Konva.Text({
            x: content.zhuWidth + 30,
            y: 70,
            width: content.width - content.zhuWidth * 2 - 60,
            text: content.text,
            fontSize: 30,
            lineHeight: 1.4
        }))
        Konva.Image.fromURL(content.url, node => {
            node.setAttrs({
                x: content.zhuWidth,
                y: -40 - content.zhuWidth / 2,
                width: 100,
                height: 100,
                cornerRadius: 50,
                fill: '#a00a0a',
                stroke: '#a00a0a',
                strokeWidth: 1
            });
            contentGroup.add(node);
            resolve(contentGroup)
        })
    })
}