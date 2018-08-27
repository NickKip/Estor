import { BaseLitComponent, component, html, prop, TemplateResult } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";
import { renderProp } from "client/utils";
import { EstorEvents } from "events";
import { ProspectContactModalArgs } from "events/event-args";
import { EstorIcons, ProspectContact } from "models";

@component({ tag: "wc-new-prospect-contact-modal", styles: [ require("./new-prospect-contact-modal.scss") ] })
export class NewProspectContactModal extends BaseLitComponent<EstorManager> {

    @prop({ type: Boolean })
    show: boolean = false;

    @prop({ type: Boolean })
    editing: boolean = false;

    @prop({ type: Boolean })
    showEdit: boolean = true;

    @prop({ type: Boolean })
    active: boolean = true;

    @prop({ type: Boolean })
    primary: boolean = false;

    @prop({ type: Object })
    contact: ProspectContact = null;

    @prop({ type: String })
    title: string;

    @prop({ type: Boolean })
    validated: boolean = false;

    // === Init === //

    async _init (): Promise<void> {}

    _setupEventListeners (): void {

        this.manager.on(EstorEvents.CloseModal, () => this.show = false);
        this.manager.on(EstorEvents.OpenProspectContactModal, this._setContact);
    }

    // === Private === //

    private _generateEmptyContact = (): ProspectContact => {

        return {

            firstName: "",
            lastName: "",
            telephone: "",
            email: "",
            notes: "",
            active: true,
            primary: false
        };
    }

    private _setContact = (args: ProspectContactModalArgs): void => {

        this.title = args.title;

        if (args.contact) {

            this.contact = args.contact;
            this.editing = false;
            this.active = this.contact.active;
            this.primary = this.contact.primary;
            this.showEdit = true;
        }
        else {

            this.contact = this._generateEmptyContact();
            this.editing = true;
            this.showEdit = false;
        }

        this._validate();
    }

    private _toggleActive = (): void => {

        this.active = !this.active;
    }

    private _togglePrimary = (): void => {

        this.primary = !this.primary;
    }

    private _toggleEditing = (): void => {

        this.editing = !this.editing;
    }

    private _formInput (field: string, value: string): void {

        this.contact[field] = value;
        this._validate();
    }

    private _validate (): void {

        this.validated = false;

        if (this.contact.firstName && this.contact.lastName) {

            this.validated = true;
        }
    }

    private _closeModal = (): void => {

        this.show = false;
        this.editing = false;
        this.showEdit = true;
        this.active = true;
        this.primary = false;
        this.contact = null;
        this.manager.emit(EstorEvents.CloseModal);
    }

    // === Render === //

    componentMarkup (): TemplateResult {

        return html`
            <div class="new-prospect-contact-modal-container">
                <div class="inner-modal-container">
                    <div class="header">
                        <wc-icon icon="${EstorIcons.IcoMoon.Users}"></wc-icon>
                        <h3>${this.title}</h3>
                        <wc-icon-button
                            class="start"
                            icon="${this.active ? EstorIcons.IcoMoon.Tick : EstorIcons.IcoMoon.Stop}"
                            iconColor="${this.active ? "#32b148" : "auto"}"
                            iconHoverColor="${this.active ? "#32b148" : "auto"}"
                            action="${this._toggleActive}"
                            hoverText="Active"
                        >
                        </wc-icon-button>
                        <wc-icon-button
                            class="mid"
                            icon="${this.primary ? EstorIcons.IcoMoon.Star : EstorIcons.IcoMoon.StarEmpty}"
                            iconColor="${this.primary ? "#32b148" : "auto"}"
                            iconHoverColor="${this.primary ? "#32b148" : "auto"}"
                            action="${this._togglePrimary}"
                            hoverText="Primary"
                        >
                        </wc-icon-button>
                        ${
                            this.showEdit
                                ? html`<wc-icon-button class="mid" icon="${EstorIcons.IcoMoon.Pencil}" action="${this._toggleEditing}" hoverText="Edit"></wc-icon-button>`
                                : null 
                        }
                        <wc-icon-button class="end" icon="${EstorIcons.IcoMoon.Cross}" action="${this._closeModal}"></wc-icon-button>
                    </div>

                    <div class="form-item">
                        <label>First Name</label>
                        <input value="${renderProp(this.contact, "firstName")}" disabled?="${!this.editing}" on-input="${(e) => this._formInput("firstName", e.currentTarget.value)}" />
                    </div>

                    <div class="form-item">
                        <label>Last Name</label>
                        <input value="${renderProp(this.contact, "lastName")}" disabled?="${!this.editing}" on-input="${(e) => this._formInput("lastName", e.currentTarget.value)}" />
                    </div>

                    <div class="form-item">
                        <label>Telephone</label>
                        <input value="${renderProp(this.contact, "telephone")}" disabled?="${!this.editing}" on-input="${(e) => this._formInput("telephone", e.currentTarget.value)}" />
                    </div>

                    <div class="form-item">
                        <label>Email</label>
                        <input value="${renderProp(this.contact, "email")}" disabled?="${!this.editing}" on-input="${(e) => this._formInput("email", e.currentTarget.value)}" />
                    </div>

                    <div class="form-item">
                        <label>Telephone</label>
                        <textarea rows="6" value="${renderProp(this.contact, "notes")}" disabled?="${!this.editing}" on-input="${(e) => this._formInput("notes", e.currentTarget.value)}"></textarea>
                    </div>

                    <div class="buttons">
                        <wc-button leftIcon="${EstorIcons.IcoMoon.Disk}" label="Save" disabled?="${!this.editing || !this.validated}"></wc-button>
                    </div>
                </div>
            </div>
        `;
    }
}
