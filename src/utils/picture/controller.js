import Konva from "konva"
import { getConfig } from "./config.js";
import { getContent } from "./group/content.js";
import { getContentWish } from "./group/contentWish.js";
import { getWish } from "./group/wish.js";

export async function getController() {
    const { wishText } = getConfig();
    const controllerLayer = new Konva.Layer();
    controllerLayer.add(new Konva.Text({
        x: wishText.x,
        y: wishText.y + wishText.marginTop,
        width: wishText.width,
        height: wishText.fontSize,
        align: 'center',
        text: wishText.text,
        fontSize: wishText.fontSize,
        fill: wishText.color,
        // fontFamily: 'siyuan',
    }))
    controllerLayer.add(await getWish())
        .add(await getContent())
        .add(getContentWish());
    return controllerLayer
}