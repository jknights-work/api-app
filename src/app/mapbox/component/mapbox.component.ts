import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
 
@Component({
  selector: 'mapbox-component',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss']
})
export class MapBoxComponent { 

    private long : Number;
    private lat : Number;
    private style : String;
    private coordinates : any;
    private parsed_coordinates : String;
    private map : any;
    private interval : any;
    private marker : any;

    constructor () {
        this.lat = 51.2802;
        this.long = 1.0789;
        this.coordinates = [this.long, this.lat];
        this.convert_coordinates();
        
    }

    ngOnInit() {
        Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set('pk.eyJ1IjoianJrbmlnaHRzIiwiYSI6ImNqaHZvdWU3ODBhd3YzcW1tcmhxMXdybjcifQ.rS1bbZqHn8upLv73YJmdWQ');
        this.build_map();
        let map = document.querySelector('#map .mapboxgl-canvas-container');
        let canvas = document.querySelector('canvas .mapboxgl-canvas');
        map.setAttribute("style", "height: 80vh;");
        this.map.resize();
        this.add_marker();
        this.interval = setInterval(() => {
            this.move_location();
        }, 5000);
    }


    private convert_coordinates () {
        this.parsed_coordinates = JSON.stringify(this.coordinates);
    }

    private build_map () {
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/outdoors-v9',
            center: this.coordinates,
            zoom: 9
        });
    }

    private move_location () {
        this.lat = 40 + (Math.random() - 0.5) * 10;
        this.long = -74.50 + (Math.random() - 0.5) * 10;
        this.coordinates = [this.long, this.lat];
        this.convert_coordinates();
        this.map.flyTo({
            center: this.coordinates
        });
        this.marker.setLngLat(this.coordinates);
    }

    private add_marker () {
        this.marker = new mapboxgl.Marker()
        .setLngLat(this.coordinates)
        .addTo(this.map);
    }

}