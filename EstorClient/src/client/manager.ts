import { AppClasses, AppConfig, ClientManager, HandlerClasses, ViewRegistrations } from "@commontimeltd/infinity-framework";
import { EstorRestClient } from "client/rest/rest-client";
import { EstorStore } from "client/store/store";

export class EstorManager extends ClientManager {

    // === Public Props === //

    public store: EstorStore;
    public rest: EstorRestClient;

    // === Constructor === //

    constructor (appContainer: string, defaultView: string, config: AppConfig, views: ViewRegistrations, appClasses: AppClasses, handlers: HandlerClasses) {

        super(appContainer, defaultView, config, views, appClasses, handlers);
    }

    // === Your stuff here... === //
}
