import { Store } from "@commontimeltd/infinity-framework/src/store/store";
import { EstorState } from "client/store/state";
import { Prospect } from "models";

export class EstorStore extends Store<EstorState> {

    // === Public === //

    public async setSelectedProspect (prospect: Prospect = null): Promise<void> {

        this.state.selectedProspect = prospect;
        return await this._saveToPersistent();
    }

    public getSelectedProspect (): Prospect {

        return this.state.selectedProspect;
    }

    // === Protected === //

    protected _generateInitialState (): EstorState {

        return {

            _id: this.name,
            messageQueue: [],
            selectedProspect: null
        };
    }

}
