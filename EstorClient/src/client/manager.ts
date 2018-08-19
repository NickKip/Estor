import { AppClasses, ClientManager, HandlerClasses, ViewRegistrations } from "@commontimeltd/infinity-framework";
import { EstorRestClient } from "client/rest/rest-client";
import { EstorStore } from "client/store/store";
import { EstorConfig } from "./config/estor-config";

export class EstorManager extends ClientManager {

    // === Public Props === //

    public config: EstorConfig;
    public store: EstorStore;
    public rest: EstorRestClient;

    // === Constructor === //

    constructor (appContainer: string, defaultView: string, config: EstorConfig, views: ViewRegistrations, appClasses: AppClasses, handlers: HandlerClasses) {

        super(appContainer, defaultView, config, views, appClasses, handlers);
    }

    // === Your stuff here... === //
}
