import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Jsonp} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AbstractCommonService } from '../../common/service/abstract.common.service';
import { AppHelper } from '../../util/apphelper';
import { ItunesConfiguration } from '../configuration/itunes.configuration';

@Injectable()
export class ItunesService extends AbstractCommonService {

    private entityType : string;
    private searchTerms : Array<string>;
    private customConfig : ItunesConfiguration;

    constructor (@Inject(HttpClient) http : HttpClient, @Inject(Jsonp) jsonp : Jsonp,
                    @Inject(AppHelper) helper : AppHelper, @Inject(ItunesConfiguration) config : ItunesConfiguration) {
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
        super.jsonCall(this.customConfig.getURIwithParams(this.searchTerms));
    }

    public processResponse (data) {
        return super.processResponse(data);
    }

    public createtxData () {

    }

    public setSearchTerms (str : string) {
        this.searchTerms = str.split(" ");
    }
}