import { BaseLitComponent, component, html, TemplateResult } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";
import { EstorIcons } from "models";

@component({ tag: "wc-prospects-panel", styles: [ require("./prospects-panel.scss") ] })
export class ProspectsPanel extends BaseLitComponent<EstorManager> {

    // === Init === //

    async _init (): Promise<void> {}

    _setupEventListeners (): void {}

    // === Private === //

    // === Render === //

    componentMarkup (): TemplateResult {

        return html`
            <div class="prospects-panel-container">
                <div class="heading">
                    <wc-icon icon="${EstorIcons.IcoMoon.User}"></wc-icon>
                    <h3>Prospects</h3>
                </div>

                <div class="stat">
                    <div class="label">
                        <p>New prospects <span>(last 30 days)</span></p>
                    </div>
                    <div class="val">
                        <p>20</p>
                    </div>
                </div>

                <div class="stat">
                    <div class="label">
                        <p>Best source <span>(last 30 days)</span></p>
                    </div>
                    <div class="val">
                        <p>Website form</p>
                    </div>
                </div>

                <div class="stat">
                    <div class="label">
                        <p>Quotes generated <span>(last 30 days)</span></p>
                    </div>
                    <div class="val">
                        <p>10 (50%)</p>
                    </div>
                </div>

                <wc-button type="transparent" label="See More" rightIcon="${EstorIcons.IcoMoon.ChevronRight}"></wc-button>
            </div>
        `;
    }
}
