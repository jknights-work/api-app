import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModel } from '../../common/model/common.model';
import { AppHelper } from '../../util/apphelper';
import { ItunesService } from '../service/itunes.service';

@Component({
  selector: 'itunes-component',
  templateUrl: './itunes.component.html',
  styleUrls: ['./itunes.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ItunesComponent {

    private img_alt = "Flickr Picture";
    private img_class = "img-responsive";
    private default_img = "/assets/images/default-img.jpg";
    private offset = 100;

    constructor (private helper : AppHelper, private service : ItunesService) {
    }

    search (terms : any) {
        if (!this.helper.isEmpty(terms.value)) {
            this.service.setSearchTerms(terms.value);
            this.service.startTx("default", null);
        }
    }


}