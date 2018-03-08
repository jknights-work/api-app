import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';
import { JsonpModule } from '@angular/http';
import { FlickrService } from './flickr/service/flickr.service';
import { FlickrConfiguration } from './flickr/configuration/flickr.configuration';
import { AppHelper } from './util/apphelper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlickrItemModel } from './flickr/model/flickr.item.model';
import { AppComponent } from './app.component';
import { FlickrComponent } from './flickr/component/flickr.component';
import { ItunesComponent } from './itunes/component/itunes.component';
import { FlickrRequestModel } from './flickr/model/flickr.request.model';
import { FlickrModalContent } from './flickr/component/modal/flickr.modal.content';
import { FlickrModal } from './flickr/component/modal/flickr.modal';
import { FormsModule }   from '@angular/forms';
import { CommonFilterPipe } from './common/pipe/common.filter.pipe';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { Routes, RouterModule } from '@angular/router';
import { ItunesService } from './itunes/service/itunes.service';
import { ItunesConfiguration } from './itunes/configuration/itunes.configuration';

const routes: Routes = [
  { path: 'itunes', component: ItunesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FlickrComponent,
    FlickrModal,
    FlickrModalContent,
    CommonFilterPipe,
    ItunesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    JsonpModule,
    NgbModule.forRoot(),
    FormsModule,
    LazyLoadImageModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AppHelper, 
    FlickrService,
    FlickrConfiguration,
    FlickrRequestModel,
    FlickrModal,
    ItunesService,
    ItunesConfiguration,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    FlickrModalContent
]
})
export class AppModule { }
