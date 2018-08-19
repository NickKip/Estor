import { BaseLitComponent, component, html, prop, TemplateResult } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";
import { EstorEvents } from "events";
import { ModalEventArgs } from "events/event-args";
import { ButtonDefinition } from "models";

@component({ tag: "wc-modal", styles: [ require("./modal.scss") ] })
export class Modal extends BaseLitComponent<EstorManager> {

    @prop({ type: Boolean })
    showing: boolean = false;

    @prop({ type: String })
    modalTitle: string;

    @prop({ type: Array })
    messageContent: string[] = [];

    @prop({ type: Array })
    modalButtons: ButtonDefinition[] = [];

    // === Init === //

    async _init (): Promise<void> {}

    _setupEventListeners (): void {

        this.manager.on(EstorEvents.OpenModal, (args: ModalEventArgs) => {

            this.modalTitle = args.title;
            this.messageContent = [...args.content];
            this.modalButtons = [...args.buttons];
        });
    }

    // === Private === //

    private _close = (): void => {

        this.removeAttribute("show");
        this.manager.emit(EstorEvents.CloseModal);
    }

    // === Render === //

    componentMarkup (): TemplateResult {

        return html`
            <div class="modal-container">
                <div class="inner-modal-container">

                    <h2>${this.modalTitle}</h2>

                    ${
                        this.messageContent.map(x => html`<p>${x}</p>`)
                    }

                    <div class="buttons">

                        ${
                            this.modalButtons.map(x => html`<wc-wellbeing-button type="${x.type}" label="${x.text}" action="${x.action ? x.action : this._close}"></wc-wellbeing-button>`)
                        }

                    </div>

                </div>
            </div>
        `;
    }
}
