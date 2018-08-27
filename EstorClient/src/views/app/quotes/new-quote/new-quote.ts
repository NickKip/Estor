import { BaseLitComponent, component, html, TemplateResult } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";
import { BreadcrumbLink, EstorIcons } from "models";
import { EstorViews } from "views/register";

@component({ tag: EstorViews.NewQuote.tag, styles: [ require("./new-quote.scss") ] })
export class NewQuote extends BaseLitComponent<EstorManager> {

    private exampleText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum facilisis nisl eu interdum. Nam lacinia, urna id interdum elementum, lectus turpis elementum urna, eu congue arcu odio a mauris. Morbi urna risus, commodo ac eros ac, tempor posuere augue. Nulla eros ex, dictum sit amet justo vel, commodo feugiat diam. Suspendisse et scelerisque nisi, mattis dapibus sapien. Suspendisse sed massa tortor. Etiam non enim accumsan, vehicula augue ac, ornare sapien. Donec tincidunt condimentum justo, id molestie lectus. Quisque quis ligula vitae leo accumsan tempor. Vivamus augue felis, facilisis in volutpat in, volutpat in nulla. Morbi tristique ac purus in vestibulum. Curabitur a iaculis justo. Proin tempus fringilla mollis.";

    // === Init === //

    async _init (): Promise<void> {}

    _setupEventListeners (): void {}

    // === Private === //

    private _generateBreadcrumbs (): BreadcrumbLink[] {

        return [

            { text: "Quotes", action: () => this.manager.router.goBack() },
            { text: "New Quote" }
        ];
    }

    // === Render === //

    componentMarkup (): TemplateResult {

        return html`
            <div class="container">
                <wc-main-menu></wc-main-menu>

                <div class="content">
                    <wc-breadcrumbs breadcrumbs="${this._generateBreadcrumbs()}"></wc-breadcrumbs>
                    <h1>New Quote</h1>

                    <div class="top-actions">
                        <wc-button type="transparent" leftIcon="${EstorIcons.IcoMoon.Disk}" label="Save"></wc-button>
                        <wc-button type="transparent" leftIcon="${EstorIcons.IcoMoon.Truck}" label="Save & Send"></wc-button>
                    </div>

                    <div class="content-inner">

                        <div class="quote-row">
                            <div class="new-quote-panel">
                                <div class="form-item">
                                    <textarea rows="8" value="${this.exampleText}" disabled?="${true}"></textarea>
                                </div>

                                <!-- <div class="opening-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum facilisis nisl eu interdum. Nam lacinia, urna id interdum elementum, lectus turpis elementum urna, eu congue arcu odio a mauris. Morbi urna risus, commodo ac eros ac, tempor posuere augue. Nulla eros ex, dictum sit amet justo vel, commodo feugiat diam. Suspendisse et scelerisque nisi, mattis dapibus sapien. Suspendisse sed massa tortor. Etiam non enim accumsan, vehicula augue ac, ornare sapien. Donec tincidunt condimentum justo, id molestie lectus. Quisque quis ligula vitae leo accumsan tempor. Vivamus augue felis, facilisis in volutpat in, volutpat in nulla. Morbi tristique ac purus in vestibulum. Curabitur a iaculis justo. Proin tempus fringilla mollis.</p>
                                    <p>Fusce condimentum gravida mi, nec dignissim tellus mattis non. Ut auctor rutrum dignissim. Nunc et rhoncus elit. Donec volutpat malesuada porta. Nullam efficitur in ante sed egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam risus tellus, fermentum mattis feugiat vitae, pretium sed augue. Nunc laoreet enim est, quis malesuada augue faucibus quis. Mauris libero ante, finibus id dui eu, fermentum suscipit lectus.</p>
                                    <p>Fusce convallis nibh eget eros ultrices, in elementum risus tempus. Vestibulum placerat lorem eget libero congue, ac dignissim nisi pulvinar. Integer laoreet pharetra nulla ut molestie. Ut eu interdum nulla. Nam ullamcorper leo id tortor scelerisque ultrices. Fusce lacinia eleifend ligula, nec tristique libero aliquet quis. Donec bibendum ex justo, vel mollis velit scelerisque eu. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed in lacus sit amet est ullamcorper aliquet nec eget risus. Cras sed ante a odio volutpat ullamcorper. Proin ac leo at nunc eleifend faucibus. Sed pharetra mi scelerisque, pretium odio sit amet, ornare ante. Donec ac metus a elit placerat venenatis sit amet in dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div> -->
                            </div>

                            <div class="help-text">
                                <div class="heading">
                                    <wc-icon icon="${EstorIcons.IcoMoon.QuestionMarkCircle}"></wc-icon>
                                    <h4>Opening Text</h4>
                                </div>

                                <p>This text will appear at the top of your quote sent out to the prospect. Usually, you would use this to describe the overview of the work. The default text can be customised <a href="">here</a>.</p>
                            </div>
                        </div>

                        <div class="quote-row">
                            <div class="work-item">
                                <div class="top-row">
                                    <div class="form-item column">
                                        <label>Description</label>
                                        <textarea rows="6"></textarea>
                                    </div>
                                </div>

                                <div class="form-item">
                                    <label>Qty</label>
                                    <input type="text" />
                                </div>

                                <div class="form-item">
                                    <label>Price</label>
                                    <input type="text" />
                                </div>

                                <div class="form-item">
                                    <label>Optional</label>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>

                         <div class="quote-row">
                            <div class="new-work-item">
                                <wc-icon icon="${EstorIcons.IcoMoon.Plus}"></wc-icon>
                                <p>Add new work item</p>
                            </div>

                            <div class="help-text">
                                <div class="heading">
                                    <wc-icon icon="${EstorIcons.IcoMoon.QuestionMarkCircle}"></wc-icon>
                                    <h4>Add Work Items</h4>
                                </div>

                                <p>Add work items to your quote. Most quotes are split into a number of work items to make it easier for the prospect to digest. Items can be marked as required or optional.</p>
                            </div>
                         </div>

                         <div class="quote-row">
                            <div class="totals">
                                <p><span>Cost:</span> £1000</p>
                                <p><span>VAT:</span> £200</p>
                                <p><span>Total:</span> £1200</p>
                            </div>
                        </div>

                         <div class="quote-row">
                            <div class="new-quote-panel">
                                <div class="form-item">
                                    <textarea rows="8" value="${this.exampleText}" disabled?="${true}"></textarea>
                                </div>

                                <!-- <div class="opening-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum facilisis nisl eu interdum. Nam lacinia, urna id interdum elementum, lectus turpis elementum urna, eu congue arcu odio a mauris. Morbi urna risus, commodo ac eros ac, tempor posuere augue. Nulla eros ex, dictum sit amet justo vel, commodo feugiat diam. Suspendisse et scelerisque nisi, mattis dapibus sapien. Suspendisse sed massa tortor. Etiam non enim accumsan, vehicula augue ac, ornare sapien. Donec tincidunt condimentum justo, id molestie lectus. Quisque quis ligula vitae leo accumsan tempor. Vivamus augue felis, facilisis in volutpat in, volutpat in nulla. Morbi tristique ac purus in vestibulum. Curabitur a iaculis justo. Proin tempus fringilla mollis.</p>
                                    <p>Fusce condimentum gravida mi, nec dignissim tellus mattis non. Ut auctor rutrum dignissim. Nunc et rhoncus elit. Donec volutpat malesuada porta. Nullam efficitur in ante sed egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam risus tellus, fermentum mattis feugiat vitae, pretium sed augue. Nunc laoreet enim est, quis malesuada augue faucibus quis. Mauris libero ante, finibus id dui eu, fermentum suscipit lectus.</p>
                                    <p>Fusce convallis nibh eget eros ultrices, in elementum risus tempus. Vestibulum placerat lorem eget libero congue, ac dignissim nisi pulvinar. Integer laoreet pharetra nulla ut molestie. Ut eu interdum nulla. Nam ullamcorper leo id tortor scelerisque ultrices. Fusce lacinia eleifend ligula, nec tristique libero aliquet quis. Donec bibendum ex justo, vel mollis velit scelerisque eu. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed in lacus sit amet est ullamcorper aliquet nec eget risus. Cras sed ante a odio volutpat ullamcorper. Proin ac leo at nunc eleifend faucibus. Sed pharetra mi scelerisque, pretium odio sit amet, ornare ante. Donec ac metus a elit placerat venenatis sit amet in dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div> -->
                            </div>

                            <div class="help-text">
                                <div class="heading">
                                    <wc-icon icon="${EstorIcons.IcoMoon.QuestionMarkCircle}"></wc-icon>
                                    <h4>Closing Text</h4>
                                </div>

                                <p>This text will appear at the bottom of your quote. This is a good place to add any disclaimers or other relevant information. The default text can be customised <a href="">here</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
