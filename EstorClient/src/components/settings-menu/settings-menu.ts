import { BaseLitComponent, component, html, TemplateResult } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";

@component({ tag: "wc-settings-menu", styles: [ require("./settings-menu.scss") ] })
export class SettingsMenu extends BaseLitComponent<EstorManager> {

    // === Init === //

    async _init (): Promise<void> {}

    _setupEventListeners (): void {}

    // === Private === //

    // === Render === //

    componentMarkup (): TemplateResult {

        return html`
            <div class="settings-menu-container">
                <div class="settings-profile">
                    <img src="images/ben.jpeg" />
                </div>
            </div>
        `;
    }
}
