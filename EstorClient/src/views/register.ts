import { ViewRegistrations } from "@commontimeltd/infinity-framework";

// tslint:disable-next-line
export const EstorViews: ViewRegistrations = {

    Login: { tag: "view-login", title: "Login", uri: "", default: true },

    // App

    Dashboard: { tag: "view-dashboard", title: "Dashboard | Estor", uri: "dashboard" },
    Prospects: { tag: "view-prospects", title: "Prospects | Estor", uri: "prospects" },
    ProspectDetail: { tag: "view-prospect-detail", title: "Prospect Detail", uri: "prospect-detail" }
};
