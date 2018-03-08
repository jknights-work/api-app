import { Injectable } from '@angular/core';
import { CommonEventHandler } from '../../common/handler/common.event.handler';
import { CommonModel } from '../../common/model/common.model';
import { AppHelper } from '../../util/apphelper';
//import { FlickrRequestModel } from '../model/flickr.request.model';
//import { FlickrItemModel } from '../model/flickr.item.model';

@Injectable()
export class ItunesEventHandler implements CommonEventHandler {

    constructor (private helper : AppHelper) {}

    public change (data, txData : CommonModel) {
        console.log("change heard", data);
    }

    public set (data, txData : CommonModel) {
        console.log("change set");
    }

    public default (data, txData : CommonModel) {
        console.log("change default");
        
        if (!this.helper.isNull(data)) {
            //if (txData instanceof CommonModel) {
                try {
                
                } catch (e) {
                    console.error("Cannot set flickr request model", e);
                }
            //}
        }
    }

    public handleEvent (eventType : string, data, txData : CommonModel) {
            switch (eventType.toLowerCase()) {
                case "change": 
                    this.change(data, txData);
                    break;
                case "default":
                    this.default(data, txData);
                    break;
                case "set":
                    this.set(data, txData);
                    break;
                default:
                    this.default(data, txData);
            }
    }

    /** Helper Funtions */
    private createLink (link : string) : string {
        let result = "";
        if (!this.helper.isEmpty(link)) {
            let split = link.split("/");
            result = split[0] + "//" + split[1] + "/" + split[2] + "/" + split[3] + "/" + split[4] + "/";
        }
        return result;
    }


}