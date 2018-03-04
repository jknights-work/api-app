import { Component } from '@angular/core';
import { FlickrService } from '../service/flickr.service';
import { FlickrRequestModel } from '../model/flickr.request.model';

@Component({
  selector: 'flickr-component',
  templateUrl: './flickr.component.html',
  styleUrls: ['./flickr.component.css']
})

export class FlickrComponent {

    constructor (private service : FlickrService) {
        this.service.startTx("default", new FlickrRequestModel());
    }

}