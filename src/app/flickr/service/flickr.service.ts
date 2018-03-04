import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Jsonp} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AbstractCommonService } from '../../common/service/abstract.common.service';
import { AppHelper } from '../../util/apphelper';
import { FlickrConfiguration } from '../configuration/flickr.configuration';
//import { FlickrAPI } from 'https://api.flickr.com/services/feeds/photos_public.gne?tags=space&tagmode=all&format=json';

@Injectable()
export class FlickrService extends AbstractCommonService {

    private entityType : string;

    constructor (@Inject(HttpClient) http : HttpClient, @Inject(Jsonp) jsonp : Jsonp,
                    @Inject(AppHelper) helper : AppHelper, @Inject(FlickrConfiguration) config : FlickrConfiguration) {
        super(http, jsonp, helper, config);
    }

    public getData () {
        return super.getData();
    }

    public startTx (eventType, txData) {
        return super.startTx(eventType, txData);
    }

    public processResponse (data) {
        return super.processResponse(data);
    }

    public createtxData () {

    }
}