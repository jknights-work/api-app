import { Input } from '@angular/core';
import { AbstractCommonModel } from '../../common/model/abstract.common.model';

export class FlickrItemModel extends AbstractCommonModel { 

    @Input() private title : string;
    @Input() private link : string;
    @Input() private media : string;
    @Input() private date_taken : Date;
    @Input() private description : string;
    @Input() private published : Date;
    @Input() private author : string;
    @Input() private author_id : Number;
    @Input() private tags : string;
    @Input() private author_link : string;

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
            case "author_link":
                result = this.author_link
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
                this.author = value;
                changes = [{
                    propertyName: propertyName,
                    value: value
                }];
                this.changed(propertyName, type,  changes);
                break;
            case "author_id":
                this.author_id = value;
                changes = [{
                    propertyName: propertyName,
                    value: value
                }];
                this.changed(propertyName, type,  changes);
                break;
            case "tags":
                this.tags = value;
                changes = [{
                    propertyName: propertyName,
                    value: value
                }];
                this.changed(propertyName, type,  changes);
                break;
            case "author_link":
                this.author_link = value;
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