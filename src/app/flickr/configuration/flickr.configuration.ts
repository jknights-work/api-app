import { CommonConfiguration } from "../../common/configuration/common.configuration";
import { FlickrEventHandler } from '../handler/flickr.event.handler';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AppHelper } from '../../util/apphelper';

//change these values
const uri =  "https://api.flickr.com/services/feeds/photos_public.gne?tags=space&tagmode=all&format=json&jsoncallback=JSONP_CALLBACK";
const format = "application/json";
const entityType = "FLICKR";
const defaultEvent = new Map<String, String>();
const eventTypes = ["change", "default", "set"];
const requestType = "JSONP";
const httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin': 'https://api.flickr.com',
      'Access-Control-Request-Method' : 'GET'
    })}
const callback = "jsonFlickrFeed";

@Injectable()
export class FlickrConfiguration implements CommonConfiguration {

    constructor (private helper : AppHelper) {}

    public getURI() : string {
        return uri;
    }

    public getFormat() : string {
        return format;
    }

    public getHttpHeaderOptions() {
        return httpOptions;
    }

    public getRequestType () {
        return requestType;
    }

    public getCallback () {
        return callback;
    }
 
    public getEventTypes() : Array<string> {
        return eventTypes;
    }

    public getEntityType() : string {
        return entityType;
    }

    public getEventHandler() : FlickrEventHandler {
        return new FlickrEventHandler(new AppHelper());
    }

    public verifyEvent(eventType) : boolean {
        let result = false;
        let events = this.getEventTypes()
        if (!this.helper.isNull(events)) {
            events.indexOf(eventType) >= 0 ? result = true : result = false;
        }
        return result;
    }
    

}