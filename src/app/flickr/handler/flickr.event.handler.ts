import { Injectable } from '@angular/core';
import { CommonEventHandler } from '../../common/handler/common.event.handler';
import { CommonModel } from '../../common/model/common.model';
import { AppHelper } from '../../util/apphelper';
import { FlickrRequestModel } from '../model/flickr.request.model';
import { FlickrItemModel } from '../model/flickr.item.model';

@Injectable()
export class FlickrEventHandler implements CommonEventHandler {

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
            if (txData instanceof FlickrRequestModel) {
                try {
                    txData.set("title", data["title"], this);
                    txData.set("link", data["link"], this);
                    txData.set("modified", new Date(data["modified"]), this);
                    txData.set("generator", data["generator"], this);
                    txData.set("items", this.setItems(data["items"]), this);
                    console.log("here", txData);
                } catch (e) {
                    console.error("Cannot set flickr request model", e);
                }
            }
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

    private setItems (items : Array<any>) : Array<FlickrItemModel> {
        let result = new Array<FlickrItemModel>();
        if (items.length > 0) {
            items.forEach(function (item) {
                let model = new FlickrItemModel();
                model.set("title", item["title"], this);
                model.set("link", item["link"], this);
                model.set("media", item["media"], this);
                model.set("date_taken", new Date(item["date_taken"]), this);
                model.set("description", item["description"], this);
                model.set("published", new Date(item["published"]), this);
                model.set("author", item["author"], this);
                model.set("author_id", Number.parseInt(item["author_id"]), this);
                model.set("tags", item["tags"], this);
                result.push(model);
            })
        }
        return result;
    }

}