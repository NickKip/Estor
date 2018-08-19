import { BaseLitComponent, component, html, IconDefinition, prop, TemplateResult } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";

@component({ tag: "wc-icon", styles: [ require("./icon.scss") ] })
export class Icon extends BaseLitComponent<EstorManager> {

    @prop({ type: String })
    width: string = "18";

    @prop({ type: String })
    height: string = "18";

    @prop({ type: String })
    color: string = "auto";

    @prop({ type: Boolean })
    spin: boolean = false;

    @prop({ type: Object })
    icon: IconDefinition = null;

    private hoverColor: string = "auto";

    // === Init === //

    async _init (): Promise<void> {}

    _setupEventListeners (): void {}

    // === Private === //

    // === Render === //

    componentMarkup (): TemplateResult {

        if (!this.icon) {

            return null;
        }

        this.className = this.spin ? "spin" : "";

        const color: string = this.color !== "auto"
            ? this.color
            : window.getComputedStyle(this.parentElement).color;

        const viewBox: string = this.icon.viewBox || "0 0 1024 1024";
        const svgPaths: string[] = (this.icon.paths || []);

        const svg: SVGSVGElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", this.width);
        svg.setAttribute("height", this.height);
        svg.setAttribute("viewBox", viewBox);
        svg.setAttribute("style", `fill: ${color}; width: ${this.width}px; height: ${this.height}px;`);

        svgPaths.forEach(x => {

            // tslint:disable-next-line no-any
            const path: any = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", x);
            svg.appendChild(path);
        });

        return html`${svg}`;
    }
}
