import { CommonModel } from '../model/common.model';
import { Pipe, PipeTransform } from '@angular/core';
import { CommonPipe } from './common.pipe';
import { AppHelper } from '../../util/apphelper';

@Pipe({
    name: 'filter'
})

export class CommonFilterPipe implements CommonPipe <CommonModel> {

    constructor (private helper : AppHelper) {}

    public transform(items: CommonModel[], searchText: string, el : string): Array<CommonModel> {
        let result = new Array<CommonModel>();
        let propertyName = "title";
        if (this.helper.isEmpty(searchText)) {
            result = items
        } else {
            searchText = searchText.toLowerCase();
            items.filter( it => {
                if (it.get(propertyName).toLowerCase().includes(searchText)) {
                    result.push(it);
                }
            });
        }
        return result;
    }

    //To Implement//
    public getPropertyNameByInstance (model : CommonModel) : string {
        let result = null;
        if (this.helper.isNull(model)) {
            
            switch (model.constructor.name) {
                case "FlickrItemModel":
                    result = "title";
                    break;
                default:
                    break;
            }
        }
        return result;
    }

    public filter () {}

}