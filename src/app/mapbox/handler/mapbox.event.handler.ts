import { Injectable } from '@angular/core';
import { CommonEventHandler } from '../../common/handler/common.event.handler';
import { CommonModel } from '../../common/model/common.model';
import { AppHelper } from '../../util/apphelper';
import { MapBoxItemModel } from '../model/mapbox.item.model';
import { MapBoxRequestModel } from '../model/mapbox.request.model';

@Injectable()
export class MapBoxEventHandler implements CommonEventHandler {

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
            if (txData instanceof MapBoxRequestModel) {
                try {
                        txData.set("items", this.setItems(data), this);
                    } catch (e) {
                        console.error("Cannot set itunes request model", e);
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

    private setItems (items : Array<any>) : Array<MapBoxItemModel> {
        let result = new Array<MapBoxItemModel>();
        let that = this;
        if (items.length > 0) {
            items.forEach(function (item) {
                let model = new MapBoxItemModel();
                model.set("artistName", item["artistName"] ? item["artistName"] : "Untitled", this);
                model.set("artistViewUrl", item["artistViewUrl"], this);
                model.set("artworkUrl", item["artworkUrl100"], this);
                model.set("releaseDate", new Date(item["releaseDate"]), this);
                model.set("collectionName", item["collectionName"], this);
                model.set("previewUrl", item["previewUrl"], this);
                model.set("primaryGenreName", item["primaryGenreName"], this);
                model.set("collectionPrice", Number.parseInt(item["collectionPrice"]), this);
                model.set("trackName", item["trackName"], this);
                model.set("trackViewUrl", item["trackViewUrl"], this);
                result.push(model);
            })
        }
        return result;
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