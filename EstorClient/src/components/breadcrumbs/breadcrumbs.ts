import { BaseLitComponent, component, html, prop, TemplateResult } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";
import { BreadcrumbLink, EstorIcons } from "models";
import { EstorViews } from "views/register";

@component({ tag: "wc-breadcrumbs", styles: [ require("./breadcrumbs.scss") ] })
export class Breadcrumbs extends BaseLitComponent<EstorManager> {

    @prop({ type: Array })
    breadcrumbs: BreadcrumbLink[];

    // === Init === //

    async _init (): Promise<void> {}

    _setupEventListeners (): void {}

    // === Private === //

    private _goToHome = (): void => {

        this.manager.router.goToPage(EstorViews.Dashboard);
    }

    // === Render === //

    componentMarkup (): TemplateResult {

        return html`
            <div class="breadcrumbs-container">
                <wc-icon-button icon="${EstorIcons.IcoMoon.Home}" width="20" height="20" action="${this._goToHome}"></wc-icon-button>
                ${
                    this.breadcrumbs && this.breadcrumbs.length
                        ? this.breadcrumbs.map(this._renderBreadcrumb)
                        : null
                }
            </div>
        `;
    }

    private _renderBreadcrumb = (link: BreadcrumbLink, idx: number): TemplateResult => {

        const isLast: boolean = idx === this.breadcrumbs.length - 1;

        return html`

            <span class="break">/</span>
            <span className="${isLast ? "last" : ""}" on-click="${link.action}">${link.text}</span>
        `;
    }
}
