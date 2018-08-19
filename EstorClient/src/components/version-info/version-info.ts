import { BaseLitComponent, component, html, prop, TemplateResult } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";
import moment from "moment";

@component({ tag: "wc-version-info", styles: [ require("./version-info.scss") ] })
export class VersionInfo extends BaseLitComponent<EstorManager> {

    @prop({ type: Boolean })
    showBuild: boolean = false;

    // === Init === //

    async _init (): Promise<void> {

        this.showBuild = this.manager.config.showBuild;
    }

    _setupEventListeners (): void {}

    // === Private === //

    // === Render === //

    componentMarkup (): TemplateResult {

        return html`
            <div class="version-info-container">
                <p>
                    Version: ${__VERSION__}
                    ${
                        this.showBuild
                            ? html`<span>(Build: ${moment(__BUILD__).format("HH:mm DD/MM/YYYY")})`
                            : null
                    }
                </p>
                <p>Copyright &copy; ${moment().format("YYYY")} Nick Kipling.</p>
            </div>
        `;
    }
}
