import { AppClasses, AppConfig, HandlerClasses } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";
import { EstorRestClient } from "client/rest/rest-client";
import { EstorStore } from "client/store/store";
import { EstorDemoHandler } from "handlers";
import { estorViews } from "views/register";

// All components required for your app are exported into the build
export * from "components";

// Likewise, the same goes for your views
export * from "views";

// Use this to link to your own custom implementations of
// classes like the Store / Rest Client / etc...
const myCustomClasses: AppClasses = {

    store: EstorStore,
    rest: EstorRestClient
};

// Create your own custom event handlers and register them
// inside this const. They will then have their events
// registered at launch and can be used for business logic.
const estorHandlers: HandlerClasses = {

    demoHandler: EstorDemoHandler
};

// Pass configuration into your manager
const config: AppConfig = {

    name: "Estor"
};

// This is needed to init everything. You could defer this
// into a custom JS script (for example, when inside CTI).
window.EstorManager = new EstorManager("body", "view-login", config, estorViews, myCustomClasses, estorHandlers);
