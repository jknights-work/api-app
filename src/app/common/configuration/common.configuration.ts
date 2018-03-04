import { CommonEventHandler } from "../../common/handler/common.event.handler";

export interface CommonConfiguration {

    getURI() : string;

    getFormat() : string;

    getHttpHeaderOptions () : any;

    getRequestType () : string;

    getCallback () : string;

    getEventTypes() : any;

    getEntityType() : string;

    getEventHandler() : CommonEventHandler;

    verifyEvent(eventType : string) : boolean;

}