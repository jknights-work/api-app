import { CommonConfiguration } from "../../common/configuration/common.configuration";
import { MapBoxEventHandler } from '../handler/mapbox.event.handler';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AppHelper } from '../../util/apphelper';

//change these values
const uri =  "https://itunes.apple.com/search?term=";
const format = "application/json";
const entityType = "ITUNES";
const defaultEvent = new Map<String, String>();
const eventTypes = ["change", "default", "set"];
const requestType = "JSON";
const httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin': 'https://itunes.apple.com',
      'Access-Control-Request-Method' : 'GET'
    })}
const callback = "itunesSearchFeed";

@Injectable()
export class MapBoxConfiguration implements CommonConfiguration {

    constructor (private helper : AppHelper) {}

    public getURI() : string {
        return uri;
    }

    public getURIwithParams (params : Array<string>) : string {
        let result = this.getURI();
        if (result) {
            params.forEach(function (param, index) {
                result += param;
                if (index !== params.length -1) {
                    result += "+";
                }
            });
        }
        return result;
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

    public getEventHandler() : MapBoxEventHandler {
        return new MapBoxEventHandler(new AppHelper());
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