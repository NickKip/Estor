import { Prospect, ProspectContact } from "models";

export function getProspectName (prospect: Prospect): string {

    if (!prospect) {

        return null;
    }

    if (prospect.companyName) {

        return prospect.companyName;
    }
    else {

        const primary: ProspectContact = prospect.contacts.find(x => x.primary);

        if (primary) {

            return `${primary.firstName} ${primary.lastName}`;
        }
        else {

            return "Unknown";
        }
    }
}
