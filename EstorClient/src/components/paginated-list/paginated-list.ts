import { BaseLitComponent, component, html, prop, TemplateResult } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";

@component({ tag: "wc-paginated-list", styles: [ require("./paginated-list.scss") ] })
export class PaginatedList<T> extends BaseLitComponent<EstorManager> {

    @prop({ type: Array })
    items: T[] = [];

    @prop({ type: Array })
    selectedItems: T[] = [];

    @prop({ type: Number })
    currentPage: number = 1;

    private paginatedItems: T[] = [];
    private pagination: number = 20;
    private totalItems: number;
    private totalPages: number = 1;
    private maxPaginationButtonsToShow: number = 10;

    private action: (T: T) => void;
    private renderRow: (item: T) => TemplateResult;
    private renderHeader: () => TemplateResult;
    private onSelect: (selectedItems: T[]) => void;

    // === Init === //

    async _init (): Promise<void> {}

    _setupEventListeners (): void {}

    // === Private === //

    private _getPaginatedItems (): void {

        if (this.items.length > this.pagination) {

            const start: number = this.currentPage === 1 ? 0 : (this.currentPage - 1) * this.pagination;

            this.paginatedItems = this.items.slice(start, start + this.pagination);
            this.totalItems = this.items.length;

            this.totalPages = Math.ceil(this.totalItems / this.pagination);
        }
        else {

            this.paginatedItems = this.items;
            this.totalItems = this.items.length;
        }
    }

    private _paginationClick (pos: number): void {

        this.currentPage = pos;
        this._getPaginatedItems();
    }

    private _rowClick = (item: T): void => {

        if (this.action) {

            this.action(item);
        }
    }

    // === Render === //

    // tslint:disable-next-line no-any
    _shouldRender (props: any, changedProps: any, prevProps: any): boolean {

        // tslint:disable-next-line no-console
        // console.log("Paginated List Attr changed:", name, changedProps, prevProps);

        if (changedProps.items && prevProps.items) {

            this._getPaginatedItems();
        }

        return true;
    }

    componentMarkup (): TemplateResult {

        return html`
            <div class="paginated-list-container">
                ${this.renderHeader ? this.renderHeader() : null}

                ${this.paginatedItems.map(x => this.renderRow ? this.renderRow(x) : null)}

                <p class="size">${this.items.length} elements in the list.</p>

                ${this._renderPagination()}
            </div>
        `;
    }

    private _renderPagination (): TemplateResult {

        if (!this.totalItems || this.totalItems < this.pagination) {

            return null;
        }

        const start: number = this.currentPage < this.maxPaginationButtonsToShow
            ? 1
            : Math.floor(this.currentPage / this.maxPaginationButtonsToShow) * this.maxPaginationButtonsToShow || this.currentPage;

        const totalButtonsToRender: number = this.totalPages > this.maxPaginationButtonsToShow
            ? start + 10
            : this.totalPages + 1;

        const numberedArray: number[] = [];

        for (let i: number = start; i < totalButtonsToRender; i++) {

            if (i <= this.totalPages) {

                numberedArray.push(i);
            }
        }

        return html`
            <div class="mail-pagination">
                <div class="pagination-inner">
                    ${
                        this.currentPage > 1
                            ? html`<wc-button id="prev" label="Prev" type="pagination" action="${() => this._paginationClick(this.currentPage - 1)}"></wc-button>`
                            : null
                    }

                    ${
                        numberedArray.map(x => html`
                            <wc-button
                                label="${x}"
                                type="pagination ${this.currentPage === x ? "selected" : ""}"
                                action="${() => this._paginationClick(x)}"
                            >
                            </wc-button>
                        `)
                    }

                    ${
                        this.currentPage < this.totalPages
                            ? html`<wc-button id="next" label="Next" type="pagination" action="${() => this._paginationClick(this.currentPage + 1)}"></wc-button>`
                            : null
                    }
                </div>
            </div>
        `;
    }
}
