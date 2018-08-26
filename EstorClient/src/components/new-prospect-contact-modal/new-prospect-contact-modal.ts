import { BaseLitComponent, component, html, prop, TemplateResult } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";
import { EstorEvents } from "events";
import { EstorIcons } from "models";

@component({ tag: "wc-new-prospect-contact-modal", styles: [ require("./new-prospect-contact-modal.scss") ] })
export class NewProspectContactModal extends BaseLitComponent<EstorManager> {

    @prop({ type: Boolean })
    show: boolean = false;

    @prop({ type: Boolean })
    editing: boolean = false;

    // === Init === //

    async _init (): Promise<void> {}

    _setupEventListeners (): void {

        this.manager.on(EstorEvents.CloseModal, () => this.show = false);
    }

    // === Private === //

    private _toggleEditing = (): void => {

        this.editing = !this.editing;
    }

    private _closeModal = (): void => {

        this.show = false;
        this.manager.emit(EstorEvents.CloseModal);
    }

    // === Render === //

    componentMarkup (): TemplateResult {

        return html`
            <div class="new-prospect-contact-modal-container">
                <div class="inner-modal-container">
                    <div class="header">
                        <wc-icon icon="${EstorIcons.IcoMoon.Users}"></wc-icon>
                        <h3>New Prospect</h3>
                        <wc-icon-button class="start" icon="${EstorIcons.IcoMoon.Pencil}" action="${this._toggleEditing}"></wc-icon-button>
                        <wc-icon-button class="mid" icon="${EstorIcons.IcoMoon.Star}" action="${this._toggleEditing}"></wc-icon-button>
                        <wc-icon-button class="mid" icon="${EstorIcons.IcoMoon.Pencil}" action="${this._toggleEditing}"></wc-icon-button>
                        <wc-icon-button class="end" icon="${EstorIcons.IcoMoon.Cross}" action="${this._closeModal}"></wc-icon-button>
                    </div>

                    <div class="form-item">
                        <label>First Name</label>
                        <input value="Nick" disabled?="${!this.editing}" />
                    </div>

                    <div class="form-item">
                        <label>Last Name</label>
                        <input value="Kipling" disabled?="${!this.editing}" />
                    </div>

                    <div class="form-item">
                        <label>Telephone</label>
                        <input value="01234567891" disabled?="${!this.editing}" />
                    </div>

                    <div class="form-item">
                        <label>Email</label>
                        <input value="test@email.com" disabled?="${!this.editing}" />
                    </div>

                    <div class="form-item">
                        <label>Primary</label>
                    </div>

                    <div class="form-item">
                        <label>Active</label>
                    </div>
                </div>
            </div>
        `;
    }
}
