import { Component, ViewEncapsulation } from '@angular/core';
import { FlickrService } from '../service/flickr.service';
import { FlickrRequestModel } from '../model/flickr.request.model';
import { FlickrItemModel } from '../model/flickr.item.model';
import { CommonModel } from '../../common/model/common.model';
import { AppHelper } from '../../util/apphelper';
import { FlickrModal } from './modal/flickr.modal';

@Component({
  selector: 'flickr-component',
  templateUrl: './flickr.component.html',
  styleUrls: ['./flickr.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class FlickrComponent {

    private img_alt = "Flickr Picture";
    private img_class = "img-responsive";
    private default_img = "/assets/images/default-img.jpg";
    private offset = 100;

    constructor (private service : FlickrService, private model : FlickrRequestModel, private helper : AppHelper, private modal : FlickrModal) {
        this.service.startTx("default", model);
    }

    openModal (item : FlickrItemModel) {
        if (!this.helper.isNull(item) && item instanceof FlickrItemModel ) {
            this.modal.open(item);
        }
    }


}