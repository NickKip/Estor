import { BaseLitComponent, component, html, TemplateResult } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";
import { estorViews } from "views/register";

@component({ tag: estorViews.Login.tag, styles: [require("./login.scss")] })
export class Login extends BaseLitComponent<EstorManager> {

    // === Init === //

    async _init (): Promise<void> {}

    _setupEventListeners (): void {}

    // === Private === //

    // === Render === //

    componentMarkup (): TemplateResult {

        return html`
            <div>
                <h1>My Login Page</h1>
            </div>
        `;
    }
}
