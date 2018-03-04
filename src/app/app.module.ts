import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';
import { JsonpModule } from '@angular/http';
import { FlickrService } from './flickr/service/flickr.service';
import { FlickrConfiguration } from './flickr/configuration/flickr.configuration';
import { AppHelper } from './util/apphelper';


import { AppComponent } from './app.component';
import { FlickrComponent } from './flickr/component/flickr.component';

@NgModule({
  declarations: [
    AppComponent,
    FlickrComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    JsonpModule
  ],
  providers: [
    AppHelper, 
    FlickrService,
    FlickrConfiguration
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
