import { BaseLitComponent, component, html, IconDefinition, prop, TemplateResult } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";
import { EstorIcons } from "models";

@component({ tag: "wc-icon-button", styles: [ require("./icon-button.scss") ] })
export class IconButton extends BaseLitComponent<EstorManager> {

    @prop({ type: String })
    type: string = "transparent";

    @prop({ type: Boolean })
    disabled: boolean = false;

    @prop({ type: String })
    iconColor: string = "auto";

    @prop({ type: String })
    iconHoverColor: string = "auto";

    @prop({ type: Object })
    icon: IconDefinition = null;

    @prop({ type: String })
    width: string = "18";

    @prop({ type: String })
    height: string = "18";

    @prop({ type: Boolean })
    isWaiting: boolean = false;

    @prop({ type: Boolean })
    stopPropagation: boolean = true;

    @prop({ type: Boolean })
    hoverTextShowing: boolean = false;

    @prop({ type: String })
    hoverText: string = "";

    action: () => void;

    private previousColor: string = "auto";
    private hoverTextTimeout: number;

    // === Init === //

    async _init (): Promise<void> {}

    _setupEventListeners (): void {}

    // === Private === //

    private _buttonClasses (): string {

        const classes: string[] = [];

        classes.push(this.type);

        if (this.isWaiting) {

            classes.push("waiting");
        }

        return classes.join(" ");
    }

    private _action = (e: Event): void => {

        if (this.stopPropagation) {

            e.stopImmediatePropagation();
        }

        if (this.action) {

            this.action();
        }
    }

    private _onMouseOver = (): void => {

        if (this.iconColor !== this.iconHoverColor) {

            this.previousColor = this.iconColor;
            this.iconColor = this.iconHoverColor;
        }

        if (this.hoverText && !this.hoverTextTimeout) {

            this.hoverTextTimeout = setTimeout(this._showHoverText, 500);
        }
    }

    private _onMouseOut = (): void => {

        this.iconColor = this.previousColor;
        clearTimeout(this.hoverTextTimeout);
        this.hoverTextTimeout = 0;
        this.hoverTextShowing = false;
    }

    private _showHoverText = (): void => {

        this.hoverTextShowing = true;
        this.hoverTextTimeout = 0;
    }

    // === Render === //

    componentMarkup (): TemplateResult {

        this.onmouseover = this._onMouseOver;
        this.onmouseleave = this._onMouseOut;

        return html`
            <button className="${this._buttonClasses()}" disabled="${this.isWaiting || this.disabled}" on-click="${this._action}">

                <wc-icon
                    icon="${this.isWaiting ? EstorIcons.IcoMoon.Loader : this.icon}"
                    color="${this.iconColor}"
                    hoverColor="${this.iconHoverColor}"
                    width="${this.width}"
                    height="${this.height}"
                    spin?="${this.isWaiting}"
                >
                </wc-icon>

            </button>
            <div className="hover-text ${this.hoverTextShowing ? "visible" : ""}">
                <p>${this.hoverText}</p>
            </div>
        `;
    }
}
