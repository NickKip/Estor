import { BaseLitWithLoader, component, html, TemplateResult } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";
import { BreadcrumbLink, EstorIcons } from "models";
import { EstorViews } from "views/register";

@component({ tag: EstorViews.Quotes.tag, styles: [ require("./quotes.scss") ] })
export class Quotes extends BaseLitWithLoader<EstorManager> {

    // === Init === //

    async _init (): Promise<void> {}

    _setupEventListeners (): void {}

    // === Private === //

    private _generateBreadcrumbs (): BreadcrumbLink[] {

        return [

            { text: "Quotes" }
        ];
    }

    private _newQuote = (): void => {

        this.manager.router.goToPage(EstorViews.NewQuote);
    }

    // === Render === //

    componentMarkup (): TemplateResult {

        return html`
            <div class="container">
                <wc-main-menu></wc-main-menu>

                <div class="content">
                    <wc-breadcrumbs breadcrumbs="${this._generateBreadcrumbs()}"></wc-breadcrumbs>
                    <h1>Quotes</h1>

                    <div class="top-actions">
                        <wc-button type="transparent" leftIcon="${EstorIcons.IcoMoon.Plus}" label="New Quote" action="${this._newQuote}"></wc-button>
                        <wc-button type="transparent" leftIcon="${EstorIcons.IcoMoon.Truck}" label="View Historic Quotes"></wc-button>
                    </div>

                    <div class="quote-list">
                        <div class="heading">
                            <wc-icon icon="${EstorIcons.IcoMoon.Ledger}"></wc-icon>
                            <h3>Recently Approved <span>(Last 30 days)</span></h3>
                        </div>

                        <wc-paginated-list
                            items="${[]}"
                        ></wc-paginated-list>
                    </div>

                    <div class="quote-list">
                        <div class="heading">
                            <wc-icon icon="${EstorIcons.IcoMoon.Ledger}"></wc-icon>
                            <h3>Recently Expired / Declined <span>(Last 30 days)</span></h3>
                        </div>

                        <wc-paginated-list
                            items="${[]}"
                        ></wc-paginated-list>
                    </div>

                    <div class="quote-list">
                        <div class="heading">
                            <wc-icon icon="${EstorIcons.IcoMoon.Ledger}"></wc-icon>
                            <h3>Pending</h3>
                        </div>

                        <wc-paginated-list
                            items="${[]}"
                        ></wc-paginated-list>
                    </div>
                </div>
            </div>
        `;
    }
}
