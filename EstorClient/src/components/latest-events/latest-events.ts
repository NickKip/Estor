import { BaseLitComponent, component, html, prop, TemplateResult } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";
import { EstorIcons, EventTypes, LatestEvent } from "models";
import moment from "moment";

@component({ tag: "wc-latest-events", styles: [ require("./latest-events.scss") ] })
export class LatestEvents extends BaseLitComponent<EstorManager> {

    @prop({ type: Array })
    events: LatestEvent[] = [];

    // === Init === //

    async _init (): Promise<void> {

        this.events = [

            { user: "alex", timestamp: moment().add(-1, "days").valueOf(), type: EventTypes.CreatedNewProspect, detail: "Tony Brutnell" },
            { user: "ben", timestamp: moment().add(-2, "days").valueOf(), type: EventTypes.MarkedInvoiceAsPaid, detail: "Id: 123-456-789" },
            { user: "ben", timestamp: moment().add(-3, "days").valueOf(), type: EventTypes.SentNewInvoice, detail: "Id: 123-456-789" },
            { user: "alex", timestamp: moment().add(-4, "days").valueOf(), type: EventTypes.CreatedNewQuote, detail: "Garage roof (Gill Kipling)" },
            { user: "alex", timestamp: moment().add(-5, "days").valueOf(), type: EventTypes.CreatedNewProspect, detail: "Gill Kipling" },
            { user: "ben", timestamp: moment().add(-6, "days").valueOf(), type: EventTypes.EditedReminderSchedule },
            { user: "ben", timestamp: moment().add(-7, "days").valueOf(), type: EventTypes.RepliedToCustomer, detail: "Nick Kipling" }
        ];
    }

    _setupEventListeners (): void {}

    // === Private === //

    // === Render === //

    componentMarkup (): TemplateResult {

        return html`
            <div class="latest-events-container">
                <div class="heading">
                    <wc-icon icon="${EstorIcons.IcoMoon.Bell}"></wc-icon>
                    <h3>Latest Events</h3>
                </div>

                ${
                    this.events.map(x => html`
                        <div class="event">
                            <img src="${this._getUserImage(x.user)}" />
                            <p>${x.type}<br><span>${x.detail}</span></p>
                            <p class="ts">${moment(x.timestamp).fromNow()}</p>
                        </div>
                    `)
                }
            </div>
        `;
    }

    private _getUserImage (user: string): string {

        switch (user) {

            case "alex":
                return "images/alex.jpeg";

            case "ben":
                return "images/ben.jpeg";
        }
    }
}
