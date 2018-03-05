import { Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FlickrModalContent } from './flickr.modal.content';
import { FlickrItemModel } from '../../model/flickr.item.model';
import { AppHelper } from '../../../util/apphelper';

@Component({
    selector: 'flickr-modal',
    template : ''
  })
  export class FlickrModal {

    constructor (private modalService: NgbModal, private helper : AppHelper) {}
  
    open(model : FlickrItemModel) {
      const modalRef = this.modalService.open(FlickrModalContent);
      if (!this.helper.isNull(model)) {
        modalRef.componentInstance.title = model.get("title");
        modalRef.componentInstance.link = model.get("link");
        modalRef.componentInstance.media = model.get("media");
        modalRef.componentInstance.date_taken = model.get("date_taken");
        modalRef.componentInstance.description = model.get("description");
        modalRef.componentInstance.published = model.get("published");
        modalRef.componentInstance.author = model.get("author");
        modalRef.componentInstance.author_id = model.get("author_id");
        modalRef.componentInstance.tags = model.get("tags");
        modalRef.componentInstance.author_link = model.get("author_link");
      }
      
    }
  }