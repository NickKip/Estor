import { BaseLitComponent, component, html, TemplateResult } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";
import { EstorViews } from "views/register";

@component({ tag: EstorViews.Login.tag, styles: [require("./login.scss")] })
export class Login extends BaseLitComponent<EstorManager> {

    // === Init === //

    async _init (): Promise<void> {}

    _setupEventListeners (): void {}

    // === Private === //

    private _signIn = (): void => {

        this.manager.router.goToPage(EstorViews.Dashboard);
    }

    // === Render === //

    componentMarkup (): TemplateResult {

        return html`
            <div class="container">

                <div class="heading">
                    <div class="inner">
                        <h1>Estor</h1>
                        <p>Create and manage prospects, quotes and jobs effortlessly.</p>
                    </div>
                </div>

                <div class="login">
                    <wc-button type="primary" label="Sign In" action="${this._signIn}"></wc-button>
                    <wc-button label="Register Account"></wc-button>
                    <p><a href="#">What is Estor?</a></p>
                </div>

                <wc-version-info></wc-version-info>
            </div>
        `;
    }
}
