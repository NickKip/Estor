export interface Prospect {

    companyName: string;
    companyTelephone: string;
    companyEmail: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    postcode: string;
    source: string;
    inseredAt: string;
    updatedAt: string;
    notes: string;
    quoteBlocked: boolean;
    quoteBlockedReason: string;
    jobBlocked: boolean;
    jobBlockedReason: string;
    isCompany: boolean;
    contacts: ProspectContact[];
}

export interface ProspectContact {

    firstName: string;
    lastName: string;
    telephone: string;
    email: string;
    primary: boolean;
    active: boolean;
    insertedAt: string;
    updatedAt: string;
    notes: string;
}
