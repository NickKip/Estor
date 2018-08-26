import { BaseLitWithLoader, component, html, TemplateResult } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";
import { BreadcrumbLink } from "models";
import { EstorViews } from "views/register";

@component({ tag: EstorViews.QuoteDetail.tag, styles: [ require("./quote-detail.scss") ] })
export class QuoteDetail extends BaseLitWithLoader<EstorManager> {

    // === Init === //

    async _init (): Promise<void> {}

    _setupEventListeners (): void {}

    // === Private === //

    private _generateBreadcrumbs (): BreadcrumbLink[] {

        return [

            { text: "Quotes", action: () => this.manager.router.goBack() },
            { text: "Quote Detail" },
        ];
    }

    // === Render === //

    componentMarkup (): TemplateResult {

        return html`
            <div class="container">
                <wc-main-menu></wc-main-menu>

                <div class="content">
                    <wc-breadcrumbs breadcrumbs="${this._generateBreadcrumbs()}"></wc-breadcrumbs>
                    <h1>Quote Detail</h1>
                    <p>Manage your quote.</p>
                </div>
            </div>
        `;
    }
}
