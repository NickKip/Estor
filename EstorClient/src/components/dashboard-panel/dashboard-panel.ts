import { BaseLitComponent, component, html, prop, TemplateResult } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";
import { DashboardStats, EstorIcons, ValueWithHighlight } from "models";

@component({ tag: "wc-dashboard-panel", styles: [ require("./dashboard-panel.scss") ] })
export class DashboardPanel extends BaseLitComponent<EstorManager> {

    @prop({ type: Object })
    stats: DashboardStats;

    // === Init === //

    async _init (): Promise<void> {}

    _setupEventListeners (): void {}

    // === Private === //

    // === Render === //

    componentMarkup (): TemplateResult {

        return html`
            <div class="dashboard-panel-container">
                <div class="heading">
                    <wc-icon icon="${this.stats.icon}"></wc-icon>
                    <h3>${this.stats.title}</h3>
                </div>

                ${
                    this.stats.stats.map(x => html`
                        <div className="stat ${x.alert ? "alert" : ""}">
                            <div class="label">
                                ${
                                    x.alert
                                     ? html`<wc-icon icon="${EstorIcons.IcoMoon.Exclaim}"></wc-icon>`
                                     : null
                                }
                                <p>${x.label} ${x.timeframe ? html`<span>(${x.timeframe})</span>` : null}</p>
                            </div>
                            <div class="val">
                                ${this._renderValue(x.value)}
                            </div>
                        </div>
                    `)
                }
            </div>
        `;
    }

    private _renderValue (value: string | ValueWithHighlight): TemplateResult {

        if (!value) {

            return null;
        }

        if (typeof value === "string") {

            return html`
                <p>${value}</p>
            `;
        }
        else {

            return html`
                <p>${(value as ValueWithHighlight).text} <span>${(value as ValueWithHighlight).highlight}</span></p>
            `;
        }
    }
}
