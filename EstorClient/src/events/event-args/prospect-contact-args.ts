import { ProspectContact } from "models";
import { ModalEventArgs } from "./modal-event-args";

export class ProspectContactModalArgs extends ModalEventArgs {

    public contact: ProspectContact = null;

    constructor (prospectContact: ProspectContact = null) {

        super(prospectContact ? "Edit Prospect" : "New Prospect", [], []);

        this.contact = prospectContact;
    }
}
