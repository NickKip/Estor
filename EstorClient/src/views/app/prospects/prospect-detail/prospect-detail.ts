import { BaseLitWithLoader, component, html, prop, TemplateResult } from "@commontimeltd/infinity-framework";
import { getProspectName } from "client/helpers";
import { EstorManager } from "client/manager";
import { BreadcrumbLink, EstorIcons, Prospect } from "models";
import { EstorViews } from "views/register";

@component({ tag: EstorViews.ProspectDetail.tag, styles: [ require("./prospect-detail.scss") ] })
export class ProspectDetail extends BaseLitWithLoader<EstorManager> {

    @prop({ type: Object })
    prospect: Prospect = null;

    @prop({ type: Boolean })
    editing: boolean = false;

    // === Init === //

    async _init (): Promise<void> {

        this.prospect = this.manager.store.getSelectedProspect();
        window.document.title = `Prospect: ${getProspectName(this.prospect)}`;
    }

    _setupEventListeners (): void {}

    // === Private === //

    private _generateBreadcrumbs (): BreadcrumbLink[] {

        return [

            { text: "Prospects", action: () => this.manager.router.goBack() },
            { text: `${getProspectName(this.prospect)}` },
        ];
    }

    private _toggleEditing = (): void => {

        this.editing = !this.editing;
    }

    // === Render === //

    componentMarkup (): TemplateResult {

        if (!this.prospect) {

            return null;
        }

        return html`
            <div class="container">
                <wc-main-menu></wc-main-menu>

                <div class="content">
                    <wc-breadcrumbs breadcrumbs="${this._generateBreadcrumbs()}"></wc-breadcrumbs>
                    <h1>${getProspectName(this.prospect)}</h1>

                    <div class="top-actions">
                        <wc-button type="transparent" leftIcon="${EstorIcons.IcoMoon.Ledger}" label="New Quote"></wc-button>
                        <wc-button type="transparent" leftIcon="${EstorIcons.IcoMoon.Truck}" label="New Job"></wc-button>
                    </div>

                    <div class="details-container">
                        <div class="prospect-detail">
                            <div class="heading">
                                <wc-icon icon="${this.prospect.isCompany ? EstorIcons.IcoMoon.Factory : EstorIcons.IcoMoon.User}"></wc-icon>
                                <h3>Details</h3>
                            </div>

                            <div class="buttons">
                                <wc-button leftIcon="${EstorIcons.IcoMoon.Pencil}" label="Edit" disabled?="${this.editing}" action="${this._toggleEditing}"></wc-button>
                                ${
                                    this.editing
                                        ? html`
                                            <wc-button class="cancel" type="cancel" leftIcon="${EstorIcons.IcoMoon.Cross}" label="Cancel" action="${this._toggleEditing}"></wc-button>
                                            <wc-button leftIcon="${EstorIcons.IcoMoon.Disk}" label="Save"></wc-button>
                                        `
                                        : null
                                }
                            </div>

                            <wc-prospect-add-edit prospect="${this.prospect}" editing="${this.editing}"></wc-prospect-add-edit>
                        </div>

                        <div class="prospect-events">
                            <div class="heading">
                                <wc-icon icon="${EstorIcons.IcoMoon.Bell}"></wc-icon>
                                <h3>Activity</h3>
                            </div>
                        </div>
                    </div>

                    <div class="contacts-container">
                        <div class="heading">
                            <wc-icon icon="${EstorIcons.IcoMoon.Users}" width="10" height="10"></wc-icon>
                            <h3>Contacts</h3>
                        </div>

                        <wc-prospect-contact-list contacts="${this.prospect.contacts}"></wc-prospect-contact-list>
                    </div>
                </div>
            </div>
        `;
    }
}
