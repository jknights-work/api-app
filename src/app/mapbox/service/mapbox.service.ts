import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Jsonp} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AbstractCommonService } from '../../common/service/abstract.common.service';
import { AppHelper } from '../../util/apphelper';
import { MapBoxConfiguration } from '../configuration/mapbox.configuration';

@Injectable()
export class MapBoxService extends AbstractCommonService {

    private entityType : string;
    private customConfig : MapBoxConfiguration;

    constructor (@Inject(HttpClient) http : HttpClient, @Inject(Jsonp) jsonp : Jsonp,
                    @Inject(AppHelper) helper : AppHelper, @Inject(MapBoxConfiguration) config : MapBoxConfiguration) {
        super(http, jsonp, helper, config);
        this.customConfig = config;
    }

    public getData () {
        return super.getData();
    }

    public startTx (eventType, txData) {
        return super.startTx(eventType, txData);
    }

    public jsonCall (uri : string) {
        //super.jsonCall(this.customConfig.getURIwithParams(this.searchTerms));
        //this.jsonCallviaPromise(this.customConfig.getURIwithParams(this.searchTerms));
    }

    public jsonCallviaPromise(uri : string) {
        super.jsonCallViaPromise(uri);
    }

    public processResponse (data) {
        return super.processResponse(data);
    }

    public createtxData () {

    }

}