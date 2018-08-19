import { BaseLitComponent, component, html, TemplateResult } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";
import { EstorIcons } from "models";

@component({ tag: "wc-sub-menu", styles: [ require("./sub-menu.scss") ] })
export class SubMenu extends BaseLitComponent<EstorManager> {

    // === Init === //

    async _init (): Promise<void> {}

    _setupEventListeners (): void {}

    // === Private === //

    // === Render === //

    componentMarkup (): TemplateResult {

        return html`
            <div class="sub-menu-container">
                <div class="sub-menu-actions">
                    <h3>Actions</h3>
                    <div class="sub-menu-button">
                        <wc-icon icon="${EstorIcons.IcoMoon.Plus}" height="14" width="14"></wc-icon>
                        <p>New Prospect</p>
                    </div>

                    <div class="sub-menu-button">
                        <wc-icon icon="${EstorIcons.IcoMoon.Plus}" height="14" width="14"></wc-icon>
                        <p>Import Prospects</p>
                    </div>

                    <div class="sub-menu-button">
                        <wc-icon icon="${EstorIcons.IcoMoon.Plus}" height="14" width="14"></wc-icon>
                        <p>Review Prospects</p>
                    </div>
                </div>
            </div>
        `;
    }
}
