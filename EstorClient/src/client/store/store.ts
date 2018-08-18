import { Store } from "@commontimeltd/infinity-framework/src/store/store";
import { EstorState } from "client/store/state";

export class EstorStore extends Store<EstorState> {

    // === Public === //

    public async setMyCustomItem (item: string): Promise<void> {

        this.state.myCustomItem = item;
        return await this._saveToPersistent();
    }

    public getMyCustomItem (): string {

        return this.state.myCustomItem;
    }

    // === Protected === //

    protected _generateInitialState (): EstorState {

        return {

            _id: this.name,
            messageQueue: [],
            myCustomItem: null
        };
    }

}
