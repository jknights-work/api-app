import { AbstractCommonModel } from '../../common/model/abstract.common.model';
import { MapBoxItemModel } from './mapbox.item.model';

export class MapBoxRequestModel extends AbstractCommonModel { 

    private artistName : string;
    private items : Array<MapBoxItemModel>
   

     public get (propertyName : string){

        var result;
        switch (propertyName) {
            case "artistName":
                result = this.artistName;
                break;
            case "items":
                result = this.items
                break;
            default:
                break;
        }
        return result;
    }

    public set (propertyName : string, value : any, sourceId : any) {
        var type = "MODEL";
        var changes;
        switch (propertyName) {
            case "artistName":
                this.artistName = value;
                changes = [{
                    propertyName: propertyName,
                    value: value
                }];
                this.changed(propertyName, type,  changes);
                break;
            case "items":
                this.items = value;
                changes = [{
                    propertyName: propertyName,
                    value: value
                }];
                this.changed(propertyName, type,  changes);
                break;
        }
        return changes;
    }

    changed (propertyName, type,  changes) {}   


}