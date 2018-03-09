import { Input } from '@angular/core';
import { AbstractCommonModel } from '../../common/model/abstract.common.model';

export class ItunesItemModel extends AbstractCommonModel { 

    @Input() private artistName : string;
    @Input() private artistViewUrl : string;
    @Input() private artworkUrl : string;
    @Input() private releaseDate : Date;
    @Input() private collectionName : string;
    @Input() private collectionPrice : Number;
    @Input() private primaryGenreName : string;
    @Input() private previewUrl : string;
    @Input() private trackName : string;
    @Input() private trackViewUrl : string;

    constructor () {
        super()
    }
   

     public get (propertyName : string){

        var result;
        switch (propertyName) {
            case "artistName":
                result = this.artistName;
                break;
            case "artistViewUrl":
                result = this.artistViewUrl;
                break;
            case "releaseDate":
                result = this.releaseDate;
                break;
            case "artworkUrl":
                result = this.artworkUrl;
                break;
            case "collectionName":
                result = this.collectionName;
                break;
            case "collectionPrice":
                result = this.collectionPrice
                break;
            case "primaryGenreName":
                result = this.primaryGenreName
                break;
            case "previewUrl":
                result = this.previewUrl
                break;
            case "trackName":
                result = this.trackName
                break
            case "trackViewUrl":
                result = this.trackViewUrl
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
            case "artistName":
                this.artistName = value;
                changes = [{
                    propertyName: propertyName,
                    value: value
                }];
                this.changed(propertyName, type,  changes);
                break;
            case "artistViewUrl":
                this.artistViewUrl = value;
                changes = [{
                    propertyName: propertyName,
                    value: value
                }];
                this.changed(propertyName, type,  changes);
                break;
            case "releaseDate":
                this.releaseDate = value;
                changes = [{
                    propertyName: propertyName,
                    value: value
                }];
                this.changed(propertyName, type,  changes);
                break;
            case "artworkUrl":
                this.artworkUrl = value;
                changes = [{
                    propertyName: propertyName,
                    value: value
                }];
                this.changed(propertyName, type,  changes);
                break;
            case "collectionName":
                this.collectionName = value;
                changes = [{
                    propertyName: propertyName,
                    value: value
                }];
                this.changed(propertyName, type,  changes);
                break;
            case "collectionPrice":
                this.collectionPrice = value;
                changes = [{
                    propertyName: propertyName,
                    value: value
                }];
                this.changed(propertyName, type,  changes);
                break;
            case "primaryGenreName":
                this.primaryGenreName = value;
                changes = [{
                    propertyName: propertyName,
                    value: value
                }];
                this.changed(propertyName, type,  changes);
                break;
            case "previewUrl":
                this.previewUrl = value;
                changes = [{
                    propertyName: propertyName,
                    value: value
                }];
                this.changed(propertyName, type,  changes);
                break;
            case "trackName":
                this.trackName = value;
                changes = [{
                    propertyName: propertyName,
                    value: value
                }];
                this.changed(propertyName, type,  changes);
                break;
            case "trackViewUrl":
                this.trackViewUrl = value;
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