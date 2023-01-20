import Konva from "konva"
import { getBackground } from "./picture/background.js";
import { getConfig, setContent, setName } from "./picture/config.js";
import { getController } from "./picture/controller.js";

export function load(name, content, url) {
    return new Promise(async (resolve, reject) => {
        setName(name);
        setContent(content)
        const { width, height } = getConfig();
        const c = document.createElement("div");
        const stage = new Konva.Stage({
            container: c,
            width: width,
            height: height
        });
        stage.add(await getBackground())
            .add(await getController());
        resolve(stage.toDataURL())
    })
}