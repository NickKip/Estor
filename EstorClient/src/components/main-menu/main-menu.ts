import { BaseLitComponent, component, html, TemplateResult } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";
import { EstorIcons } from "models";
import { EstorViews } from "views/register";

@component({ tag: "wc-main-menu", styles: [ require("./main-menu.scss") ] })
export class MainMenu extends BaseLitComponent<EstorManager> {

    // === Init === //

    async _init (): Promise<void> {}

    _setupEventListeners (): void {}

    // === Private === //

    private _goToProspects = (): void => {

        this.manager.router.goToPage(EstorViews.Prospects);
    }

    // === Render === //

    componentMarkup (): TemplateResult {

        return html`
            <div class="main-menu-container">
                <div class="actions">
                    <wc-icon-button icon="${EstorIcons.IcoMoon.User}" width="20" height="20" hoverText="Prospects" action="${this._goToProspects}"></wc-icon-button>
                    <wc-icon-button icon="${EstorIcons.IcoMoon.NoteBook}" width="20" height="20" hoverText="Quotes"></wc-icon-button>
                    <wc-icon-button icon="${EstorIcons.IcoMoon.Truck}" width="20" height="20" hoverText="Jobs"></wc-icon-button>
                    <wc-icon-button icon="${EstorIcons.IcoMoon.Ledger}" width="20" height="20" hoverText="Invoicing"></wc-icon-button>
                    <wc-icon-button icon="${EstorIcons.IcoMoon.Graph2}" width="20" height="20" hoverText="Reporting"></wc-icon-button>
                    <wc-icon-button icon="${EstorIcons.IcoMoon.Plus}" width="20" height="20" hoverText="Quick create"></wc-icon-button>

                    <div class="bottom">
                        <wc-icon-button icon="${EstorIcons.IcoMoon.Bell}" width="20" height="20" hoverText="Notifications"></wc-icon-button>
                        <wc-icon-button icon="${EstorIcons.IcoMoon.QuestionMarkCircle}" width="20" height="20" hoverText="Help"></wc-icon-button>
                    </div>
                </div>
                <wc-settings-menu></wc-settings-menu>
            </div>
        `;
    }
}
