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

        this.manager.router.goToPage(EstorViews.QuoteDetail);
    }

    // === Render === //

    componentMarkup (): TemplateResult {

        return html`
            <div class="container">
                <wc-main-menu></wc-main-menu>

                <div class="content">
                    <wc-breadcrumbs breadcrumbs="${this._generateBreadcrumbs()}"></wc-breadcrumbs>
                    <h1>Quotes</h1>
                    <p>View and manage your quotes.</p>

                    <div class="quote-list">
                        <div class="quote-actions">
                            <wc-button leftIcon="${EstorIcons.IcoMoon.Plus}" label="New Quote" action="${this._newQuote}"></wc-button>
                        </div>

                        <wc-paginated-list
                            items="[${[]}]"
                        ></wc-paginated-list>
                    </div>
                </div>
            </div>
        `;
    }
}
