import { BaseHandler, EventArgs, WSEventArgs } from "@commontimeltd/infinity-framework";
import { EstorManager } from "client/manager";
import { EstorEvents } from "events";

export class EstorDemoHandler extends BaseHandler<EstorManager> {

    eventType: EstorEvents[] = [

        EstorEvents.DemoEvent
    ];

    protected async handleMessage (message: WSEventArgs): Promise<void> {}

    protected async handleEvent (eventType: EstorEvents, eventArgs: EventArgs): Promise<void> {

        alert("Demo event received!");
    }
}
