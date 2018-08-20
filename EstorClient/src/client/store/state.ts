import { State } from "@commontimeltd/infinity-framework";
import { Prospect } from "models";

export interface EstorState extends State {

    selectedProspect: Prospect;
}
