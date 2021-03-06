import { BaseLitComponent, component, html, prop, TemplateResult } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";
import { EstorEvents } from "events";
import { ProspectContactModalArgs } from "events/event-args";
import { EstorIcons, ProspectContact } from "models";

@component({ tag: "wc-prospect-contact-list", styles: [ require("./prospect-contact-list.scss") ] })
export class ProspectContactList extends BaseLitComponent<EstorManager> {

    @prop({ type: Array })
    contacts: ProspectContact[] = [];

    @prop({ type: Boolean })
    showAddButtons: boolean = true;

    @prop({ type: Boolean })
    modalShowing: boolean = false;

    // === Init === //

    async _init (): Promise<void> {}

    _setupEventListeners (): void {

        this.manager.on(EstorEvents.CloseModal, () => this.modalShowing = false);
    }

    // === Private === //

    private _showModal = (): void => {

        this.modalShowing = true;
        this.manager.emit(EstorEvents.OpenProspectContactModal, new ProspectContactModalArgs());
    }

    private _rowClick = (contact: ProspectContact): void => {

        this.modalShowing = true;
        this.manager.emit(EstorEvents.OpenProspectContactModal, new ProspectContactModalArgs(contact));
    }

    // === Render === //

    componentMarkup (): TemplateResult {

        return html`
            <div class="prospect-contact-list-container">
                ${this._renderAddButton()}

                <wc-paginated-list
                    items="${this.contacts}"
                    renderHeader="${this._renderHeader}"
                    renderRow="${this._renderRow}"
                ></wc-paginated-list>

                <wc-new-prospect-contact-modal show?="${this.modalShowing}"></wc-new-prospect-contact-modal>
            </div>
        `;
    }

    private _renderAddButton (): TemplateResult {

        if (this.showAddButtons) {

            return html`
                <div class="add-buttons">
                    <wc-button leftIcon="${EstorIcons.IcoMoon.Plus}" label="Add" action="${this._showModal}"></wc-button>
                </div>
            `;
        }

        return null;
    }

    private _renderHeader = (): TemplateResult => {

        return html`
            <div class="list-header">
                <div class="list-col prospect-type">
                    <span></span>
                </div>

                <div class="list-col prospect-name">
                    <span>Name</span>
                </div>

                <div class="list-col prospect-address">
                    <span>Telephone</span>
                </div>

                <div class="list-col prospect-city">
                    <span>Email</span>
                </div>

                <div class="list-col prospect-quote">
                    <span>Active</span>
                </div>
            </div>
        `;
    }

    private _renderRow = (item: ProspectContact): TemplateResult => {

        return html`
            <div class="list-row" on-click="${() => this._rowClick(item)}">
                <div class="list-col prospect-type">
                    <span><wc-icon icon="${item.primary ? EstorIcons.IcoMoon.Tick : null}"></wc-icon></span>
                </div>

                <div class="list-col prospect-name">
                    <span>${item.firstName} ${item.lastName}</span>
                </div>

                <div class="list-col prospect-address">
                    <span>${item.telephone}</span>
                </div>

                <div class="list-col prospect-city">
                    <span>${item.email}</span>
                </div>

                <div class="list-col prospect-quote">
                    <span>${item.active ? "Yes" : "No"}</span>
                </div>
            </div>
        `;
    }
}
