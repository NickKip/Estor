import { BaseLitComponent, component, html, IconDefinition, prop, TemplateResult } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";
import { EstorIcons } from "models";

@component({ tag: "wc-button", styles: [ require("./button.scss") ] })
export class Button extends BaseLitComponent<EstorManager> {

    @prop({ type: String })
    type: string = "normal";

    @prop({ type: Boolean })
    spin: boolean = false;

    @prop({ type: Object })
    leftIcon: IconDefinition = null;

    @prop({ type: Boolean })
    leftIconSpin: boolean = false;

    @prop({ type: Boolean })
    leftAlign: boolean = false;

    @prop({ type: Object })
    rightIcon: IconDefinition = null;

    @prop({ type: Boolean })
    rightIconSpin: boolean = false;

    @prop({ type: String })
    label: string;

    @prop({ type: Boolean })
    disabled: boolean;

    private leftIconColor: string = "auto";
    private rightIconColor: string = "auto";

    private action: () => void;

    // === Init === //

    async _init (): Promise<void> {}

    _setupEventListeners (): void {}

    // === Private === //

    private _action = (): void => {

        if (this.action && !this.spin) {

            this.action();
        }
    }

    // === Render === //

    // tslint:disable-next-line no-any
    _shouldRender (props: any, changedProps: any, prevProps: any): boolean {

        if (changedProps && changedProps.disabled !== undefined) {

            const button: HTMLButtonElement = this.shadowRoot.querySelector("button");

            if (this.leftIcon) {

                changedProps.disabled
                    ? this.leftIconColor = button ? getComputedStyle(button).color : "auto"
                    : this.leftIconColor = "auto";
            }

            if (this.rightIcon) {

                changedProps.disabled
                    ? this.rightIconColor = button ? getComputedStyle(button).color : "auto"
                    : this.rightIconColor = "auto";
            }
        }

        return true;
    }

    componentMarkup (): TemplateResult {

        return html`
            <div class="button-container">

                <button className="${ this.type } ${this.leftIcon ? "left-icon" : ""}" disabled?="${this.disabled}" on-click="${ this._action }">
                    ${ this.spin ? this._renderSpinner() : this._renderContent() }
                </button>

            </div>
        `;
    }

    private _renderContent (): TemplateResult {

        return html`
            ${
                this.leftIcon
                    ? html`
                        <div className="${`left-icon ${this.leftAlign ? "left-align" : ""}`}">
                            ${ this.leftIcon ? html`<wc-icon icon="${this.leftIconSpin ? EstorIcons.IcoMoon.Loader : this.leftIcon}" color="${this.leftIconColor}" spin?="${this.leftIconSpin}"></wc-icon>` : null }
                        </div>
                    `
                    : null
            }

            ${this.label}

            ${
                this.rightIcon
                    ? html`
                        <div class="right-icon">
                            ${ this.rightIcon ? html`<wc-icon height="14" width="14" icon="${this.rightIconSpin ? EstorIcons.IcoMoon.Loader : this.rightIcon}" color="${this.rightIconColor}" spin?="${this.rightIconSpin}"></wc-icon>` : null }
                        </div>
                    `
                    : null
            }
        `;
    }

    private _renderSpinner (): TemplateResult {

        return html`
            <wc-icon icon="${EstorIcons.IcoMoon.Loader}" spin></wc-icon>
        `;
    }
}
