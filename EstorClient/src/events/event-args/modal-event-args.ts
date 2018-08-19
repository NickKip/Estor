import { EventArgs } from "@commontimeltd/infinity-framework";
import { ButtonDefinition } from "models";

export class ModalEventArgs extends EventArgs {

    title: string;
    content: string[];
    buttons: ButtonDefinition[] = [{ text: "Okay", type: "primary" }];

    constructor (title: string, content: string[], buttons: ButtonDefinition[] = []) {

        super();

        this.title = title;
        this.content = content;

        if (buttons.length > 0) {

            this.buttons = buttons;
        }
    }
}
