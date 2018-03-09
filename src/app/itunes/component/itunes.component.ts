import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModel } from '../../common/model/common.model';
import { AppHelper } from '../../util/apphelper';
import { ItunesService } from '../service/itunes.service';
import { ItunesRequestModel } from '../model/itunes.request.model';

@Component({
  selector: 'itunes-component',
  templateUrl: './itunes.component.html',
  styleUrls: ['./itunes.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ItunesComponent {

    private img_alt = "Itunes Picture";
    private img_class = "img-responsive";
    private default_img = "/assets/images/default-img.jpg";
    private offset = 100;
    private classes = new Array("green", "black", "blue");

    constructor (private helper : AppHelper, private service : ItunesService, private model : ItunesRequestModel) {
    }

    search (terms : any) {
        if (!this.helper.isEmpty(terms.value)) {
            this.service.setSearchTerms(terms.value);
            this.service.startTx("default", this.model);
        }
    }

    changeBg () {
        var body = document.body.className = this.classes[Math.floor(Math.random() * this.classes.length)];
    }


}