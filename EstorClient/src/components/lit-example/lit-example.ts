import { BaseLitComponent, TemplateResult, component, html } from "@commontimeltd/infinity-framework";

/**
 *  Note: you can tweak shadow dom usage by setting the property "shadow" to false in the declaration:
 * 
 * @component({ tag: "wc-lit-example", styles: [ require("./lit-example.scss") ], shadow: false })
 * 
 * The default is that shadow is true. It should remain this way unless you have a GOOD reason for
 * disabling it (i.e.. supporting older browsers is required).
 */

@component({ tag: "wc-lit-example", styles: [ require("./lit-example.scss") ] })
export class LitExample extends BaseLitComponent {

    /**
     * Props:
     * 
     * Props are declared the same way as Skate components.
     * However, note you cannot set a default at declaration time.
     * Defaults should be set in the _init method.
     * 
     * E.g.
     * 
     * @prop({ type: String })
     * testProp: string;
     */

    // === Init === //

    async _init (): Promise<void> {

        // Set any property defaults here:
        // this.testProp = "Hello!";
    }

    _setupEventListeners (): void {}

    // === Private === //

    private _onClick = (): void => {

        alert("You clicked the lit component!");
    }

    // === Render === //

    componentMarkup (): TemplateResult {

        return html`
            <div class="container">
                <p on-click="${this._onClick}">This is an example lit-html component. Try clicking me!</p>
            </div>
        `;
    }
}
