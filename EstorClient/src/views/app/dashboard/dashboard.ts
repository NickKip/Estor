import { BaseLitComponent, component, html, prop, TemplateResult } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";
import { DashboardStats, EstorIcons } from "models";
import { EstorViews } from "views/register";

@component({ tag: EstorViews.Dashboard.tag, styles: [ require("./dashboard.scss") ] })
export class Dashboard extends BaseLitComponent<EstorManager> {

    @prop({ type: Array })
    panels: DashboardStats[] = [];

    // === Init === //

    async _init (): Promise<void> {

        this.panels = [

            { icon: EstorIcons.IcoMoon.User, title: "Prospects", stats: [
                { label: "New prospects", timeframe: "Last 30 days", value: "20" },
                { label: "Best source", timeframe: "Last 30 days", value: "Website form" },
                { label: "Quotes generated", timeframe: "Last 30 days", value: "10 (50%)" }
            ] },
            { icon: EstorIcons.IcoMoon.NoteBook, title: "Quotes", stats: [
                { label: "Quotes sent", timeframe: "Last 30 days", value: "10" },
                { label: "Approved", timeframe: "Last 30 days", value: "6 (60%)" },
                { label: "Declined", timeframe: "Last 30 days", value: "2 (20%)" },
                { label: "Outstanding", timeframe: "Last 30 days", value: "2 (20%)" }
            ] },
            { icon: EstorIcons.IcoMoon.Truck, title: "Jobs", stats: [
                { label: "Current job", value: { text: "Kipling roof", highlight: "(due to end in 3 days)" } },
                { label: "Next job", value: { text: "Mitchell roof", highlight: "(due to start in 4 days)"} },
                { alert: true, label: "To be scheduled", value: "2" },
                { label: "Unanswered questions", value: "0" }
            ] },
            { icon: EstorIcons.IcoMoon.Ledger, title: "Invoices", stats: [
                { label: "Jobs to invoice", value: "1" },
                { label: "Awaiting payment", value: "3" },
                { alert: true, label: "Overdue", value: "2" }
            ] }
        ];
    }

    _setupEventListeners (): void {}

    // === Private === //

    // === Render === //

    componentMarkup (): TemplateResult {

        return html`
            <div class="container">
                <wc-main-menu></wc-main-menu>

                <div class="content">
                    <wc-breadcrumbs></wc-breadcrumbs>
                    <h1>Dashboard</h1>
                    <p>View your activity at a glance.</p>

                    <div class="panel-container">
                        <div class="left">
                            ${
                                this.panels && this.panels.length 
                                    ? this.panels.map(x => html`<wc-dashboard-panel stats="${x}"></wc-dashboard-panel>`)
                                    : null
                            }
                        </div>

                        <div class="right">
                            <wc-latest-events></wc-latest-events>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
