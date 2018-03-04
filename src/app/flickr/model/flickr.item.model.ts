import { AbstractCommonModel } from '../../common/model/abstract.common.model';

export class FlickrItemModel extends AbstractCommonModel { 

    private title : string;
    private link : string;
    private media : string;
    private date_taken : Date;
    private description : string;
    private published : Date;
    private author : string;
    private author_id : Number;
    private tags : string;

    constructor () {
        super()
    }
   

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
            case "media":
                result = this.media;
                break;
            case "published":
                result = this.published;
                break;
            case "date_taken":
                result = this.date_taken
                break;
            case "author":
                result = this.author
                break;
            case "author_id":
                result = this.author_id
                break;
            case "tags":
                result = this.tags
                break
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
            case "media":
                this.media = value;
                changes = [{
                    propertyName: propertyName,
                    value: value
                }];
                this.changed(propertyName, type,  changes);
                break;
            case "published":
                this.published = value;
                changes = [{
                    propertyName: propertyName,
                    value: value
                }];
                this.changed(propertyName, type,  changes);
                break;
            case "date_taken":
                this.date_taken = value;
                changes = [{
                    propertyName: propertyName,
                    value: value
                }];
                this.changed(propertyName, type,  changes);
                break;
            case "author":
                this.date_taken = value;
                changes = [{
                    propertyName: propertyName,
                    value: value
                }];
                this.changed(propertyName, type,  changes);
                break;
            case "author_id":
                this.date_taken = value;
                changes = [{
                    propertyName: propertyName,
                    value: value
                }];
                this.changed(propertyName, type,  changes);
                break;
            case "tags":
                this.date_taken = value;
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