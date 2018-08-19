import { BaseLitWithLoader, component, html, prop, TemplateResult } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";
import { BreadcrumbLink, EstorIcons, Prospect, ProspectContact } from "models";
import { EstorViews } from "views/register";

@component({ tag: EstorViews.Prospects.tag, styles: [ require("./prospects.scss") ] })
export class Prospects extends BaseLitWithLoader<EstorManager> {

    @prop({ type: Array })
    prospects: Prospect[] = [];

    // === Init === //

    async _init (): Promise<void> {

        this.prospects = require("../../../fake/prospects.json");
    }

    _setupEventListeners (): void {}

    // === Private === //

    private _generateBreadcrumbs (): BreadcrumbLink[] {

        return [

            { text: "Prospects" }
        ];
    }

    // === Render === //

    componentMarkup (): TemplateResult {

        return html`
            <div class="container">
                <wc-main-menu></wc-main-menu>

                <div class="content">
                    <wc-breadcrumbs breadcrumbs="${this._generateBreadcrumbs()}"></wc-breadcrumbs>
                    <h1>Prospects</h1>
                    <p>View and manage your prospects.</p>

                    <div class="prospects-list">
                        <div class="prospect-actions">
                            <wc-button leftIcon="${EstorIcons.IcoMoon.Plus}" label="New Prospect"></wc-button>
                            <wc-button leftIcon="${EstorIcons.IcoMoon.Plus}" label="Import Prospects"></wc-button>
                        </div>

                        <wc-paginated-list
                            items="${this.prospects}"
                            renderHeader="${this._renderHeader}"
                            renderRow="${this._renderRow}"
                        ></wc-paginated-list>
                    </div>
                </div>
            </div>
        `;
    }

    private _renderHeader = (): TemplateResult => {

        return html`
            <div class="list-header">
                <div class="list-col prospect-type">
                    <span>Type</span>
                </div>

                <div class="list-col prospect-name">
                    <span>Name</span>
                </div>

                <div class="list-col prospect-address">
                    <span>Address</span>
                </div>

                <div class="list-col prospect-city">
                    <span>City</span>
                </div>

                <div class="list-col prospect-quote">
                    <span>Last Quote</span>
                </div>
            </div>
        `;
    }

    private _renderRow = (item: Prospect): TemplateResult => {

        return html`
            <div className="list-row ${item.quoteBlocked ? "quote-blocked" : ""} ${item.jobBlocked ? "job-blocked" : ""}">
                <div class="list-col prospect-type">
                    <span><wc-icon icon="${item.isCompany ? EstorIcons.IcoMoon.Factory : EstorIcons.IcoMoon.User}"></wc-icon></span>
                </div>

                <div class="list-col prospect-name">
                    <span>${this._getName(item)}</span>
                </div>

                <div class="list-col prospect-address">
                    <span>${item.addressLine1}</span>
                </div>

                <div class="list-col prospect-city">
                    <span>${item.city}</span>
                </div>

                <div class="list-col prospect-quote">
                    <span>Last Quote</span>
                </div>
            </div>
        `;
    }

    private _getName (item: Prospect): string {

        if (item.companyName) {

            return item.companyName;
        }
        else {

            const primary: ProspectContact = item.contacts.find(x => x.primary);

            if (primary) {

                return `${primary.firstName} ${primary.lastName}`;
            }
            else {

                return "Unknown";
            }
        }
    }
}
