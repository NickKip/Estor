import { BaseLitComponent, component, html, TemplateResult } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";
import { EstorViews } from "views/register";

@component({ tag: EstorViews.Dashboard.tag, styles: [ require("./dashboard.scss") ] })
export class Dashboard extends BaseLitComponent<EstorManager> {

    // === Init === //

    async _init (): Promise<void> {}

    _setupEventListeners (): void {}

    // === Private === //

    // === Render === //

    componentMarkup (): TemplateResult {

        return html`
            <div class="container">
            </div>
        `;
    }
}
