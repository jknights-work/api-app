import { AbstractCommonModel } from '../../common/model/abstract.common.model';
import { FlickrItemModel } from './flickr.item.model';

export class FlickrRequestModel extends AbstractCommonModel { 

    private title : string;
    private link : string;
    private description : string;
    private modified : Date;
    private generator : string;
    private items : Array<FlickrItemModel>
   

     public get (propertyName : string){

        var result;
        switch (propertyName) {
            case "title":
                result = this.title;
                break;
            case "link":
                result = this.link;
                break;
            case "description":
                result = this.description;
                break;
            case "modified":
                result = this.modified;
                break;
            case "generator":
                result = this.generator;
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
            case "title":
                this.title = value;
                changes = [{
                    propertyName: propertyName,
                    value: value
                }];
                this.changed(propertyName, type,  changes);
                break;
            case "link":
                this.link = value;
                changes = [{
                    propertyName: propertyName,
                    value: value
                }];
                this.changed(propertyName, type,  changes);
                break;
            case "description":
                this.description = value;
                changes = [{
                    propertyName: propertyName,
                    value: value
                }];
                this.changed(propertyName, type,  changes);
                break;
            case "modified":
                this.modified = value;
                changes = [{
                    propertyName: propertyName,
                    value: value
                }];
                this.changed(propertyName, type,  changes);
                break;
            case "generator":
                this.generator = value;
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