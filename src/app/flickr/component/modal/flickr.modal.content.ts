import {Component, Input} from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngbd-modal-content',
    templateUrl: './flickr.modal.content.html',
    styleUrls: ['./flickr.modal.scss']
  })

export class FlickrModalContent {

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

    constructor(public activeModal: NgbActiveModal) {}

}