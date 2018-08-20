import { BaseLitComponent, component, html, prop, TemplateResult } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";
import { EstorIcons, Prospect, ProspectContact } from "models";

@component({ tag: "wc-prospect-add-edit", styles: [ require("./prospect-add-edit.scss") ] })
export class ProspectAddEdit extends BaseLitComponent<EstorManager> {

    @prop({ type: Object })
    prospect: Prospect = null;

    @prop({ type: Boolean })
    editing: boolean = false;

    // === Init === //

    async _init (): Promise<void> {}

    _setupEventListeners (): void {}

    // === Private === //

    // === Render === //

    componentMarkup (): TemplateResult {

        if (!this.prospect) {

            return null;
        }

        return html`
            <div class="prospect-add-edit-container">
                ${
                    this.prospect.isCompany
                        ? this._renderCompany()
                        : this._renderPrimary()
                }

                <div class="detail-item">
                    <label>Address 1</label>
                    <input value="${this.prospect.addressLine1}" disabled?="${!this.editing}" />
                </div>

                <div class="detail-item">
                    <label>Address 2</label>
                    <input value="${this.prospect.addressLine2}" disabled?="${!this.editing}" />
                </div>

                <div class="detail-item">
                    <label>City</label>
                    <input value="${this.prospect.city}" disabled?="${!this.editing}" />
                </div>

                <div class="detail-item">
                    <label>Postcode</label>
                    <input value="${this.prospect.postcode}" disabled?="${!this.editing}" />
                </div>

                <div class="detail-item">
                    <label>Notes</label>
                    <textarea rows="12" value="${this.prospect.notes}" disabled?="${!this.editing}"></textarea>
                </div>
            </div>
        `;
    }

    private _renderCompany (): TemplateResult {

        return html`
            <div class="detail-item">
                <label>Company Name</label>
                <input value="${this.prospect.companyName}" disabled?="${!this.editing}" />
            </div>

            <div class="detail-item">
                <label>Company Telephone</label>
                <input value="${this.prospect.companyTelephone}" disabled?="${!this.editing}" />
            </div>

            <div class="detail-item no-margin">
                <label>Company Email</label>
                <input value="${this.prospect.companyEmail}" disabled?="${!this.editing}" />
            </div>

            <div class="divider">
                <hr />
            </div>
        `;
    }

    private _renderPrimary (): TemplateResult {
        
        const primary: ProspectContact = this.prospect.contacts.find(x => x.primary);

        if (primary) {

            return html`
                <div class="contact-heading">
                    <h4>Primary Contact</h4>
                    <wc-icon-button icon="${EstorIcons.IcoMoon.Pencil}" hoverText="Edit primary contact"></wc-icon-button>
                </div>

                <div class="detail-item">
                    <label>First Name</label>
                    <input value="${primary.firstName}" disabled?="${true}" />
                </div>

                <div class="detail-item">
                    <label>Last Name</label>
                    <input value="${primary.lastName}" disabled?="${true}" />
                </div>

                <div class="detail-item">
                    <label>Telephone</label>
                    <input value="${primary.telephone}" disabled?="${true}" />
                </div>

                <div class="detail-item no-margin">
                    <label>Email</label>
                    <input value="${primary.email}" disabled?="${true}" />
                </div>

                <div class="divider">
                    <hr />
                </div>
            `;
        }
        else {

            return null;
        }   
    }
}
