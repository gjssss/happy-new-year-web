import Konva from "konva"
import { getConfig } from "../config";

export function getContentWish() {
    const { content } = getConfig();
    const contentWishGroup = new Konva.Group({
        x: content.width - 140 - content.zhuWidth,
        y: content.y - 20,
    });
    contentWishGroup.add(new Konva.Rect({
        x: 0,
        y: 0,
        width: 60,
        height: 60,
        cornerRadius: 30,
        fill: '#d0372a',
        stroke: '#ffbba0',
        strokeWidth: 1
    }));
    contentWishGroup.add(new Konva.Text({
        x: 10,
        y: 17,
        fontSize: 30,
        fill: '#ffbc67',
        text: '新',
    }));
    contentWishGroup.add(new Konva.Rect({
        x: 0,
        y: 0,
        width: 60,
        height: 60,
        cornerRadius: 30,
        fill: '#d0372a',
        stroke: '#ffbba0',
        strokeWidth: 1,
        offsetX: -40,
    }));
    contentWishGroup.add(new Konva.Text({
        x: 10,
        y: 17,
        fontSize: 30,
        fill: '#ffbc67',
        text: '年',
        offsetX: -40,
    }));
    contentWishGroup.add(new Konva.Rect({
        x: 0,
        y: 0,
        width: 60,
        height: 60,
        cornerRadius: 30,
        fill: '#d0372a',
        stroke: '#ffbba0',
        strokeWidth: 1,
        offsetX: -80,
    }));
    contentWishGroup.add(new Konva.Text({
        x: 10,
        y: 17,
        fontSize: 30,
        fill: '#ffbc67',
        text: '快',
        offsetX: -80,
    }));
    contentWishGroup.add(new Konva.Rect({
        x: 0,
        y: 0,
        width: 60,
        height: 60,
        cornerRadius: 30,
        fill: '#d0372a',
        stroke: '#ffbba0',
        strokeWidth: 1,
        offsetX: -120,
    }));
    contentWishGroup.add(new Konva.Text({
        x: 15,
        y: 17,
        fontSize: 30,
        fill: '#ffbc67',
        text: '乐',
        offsetX: -120,
    }));
    return contentWishGroup;
}
