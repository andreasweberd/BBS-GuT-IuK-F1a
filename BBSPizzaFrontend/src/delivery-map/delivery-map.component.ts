import { Component } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';
import * as Leaflet from 'leaflet';
import 'leaflet-routing-machine';

Leaflet.Icon.Default.imagePath = 'assets/';
@Component({
  selector: 'app-delivery-map',
  templateUrl: './delivery-map.component.html',
  styleUrls: ['./delivery-map.component.scss']
})
export class DeliveryMapComponent {
  time = 27;


  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 14,
    center: { lat: 49.75843, lng: 6.64409 }
  }

  initMarkers() {
    const initialMarkers = [
      {
        position: { lat: 49.7593244, lng: 6.6354235 },
        draggable: false,
        description: "Döminos"
      }
    ];
    for (let index = 0; index < initialMarkers.length; index++) {
      const data = initialMarkers[index];
      const marker = this.generateMarker(data, index);
      marker.addTo(this.map).bindPopup(`<b>${data.description}</b>`);
      this.map.panTo(data.position);
      this.markers.push(marker)
    }
  }
  

  generateMarker(data: any, index: number) {
    return Leaflet.marker(data.position, { draggable: data.draggable })
      .on('click', (event) => this.markerClicked(event, index))
      .on('dragend', (event) => this.markerDragEnd(event, index));
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    this.initMarkers();
    this.addRoute();
  }

  mapClicked($event: any) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerClicked($event: any, index: number) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerDragEnd($event: any, index: number) {
    console.log($event.target.getLatLng());
  }
  
  addRoute(){
    var route = this.generateRoute(49.747897050000006, 6.6375348794641695);
    route.addTo(this.map);
  }


  generateRoute(lat: number, lng: number){
   return Leaflet.Routing.control({
      router: Leaflet.Routing.osrmv1({
          serviceUrl: `http://router.project-osrm.org/route/v1/`
      }),
      show: false,
      waypoints: [
          Leaflet.latLng(49.7593244, 6.6354235),
          Leaflet.latLng(lat, lng)
      ]
  });
  }

  getTime(){
    return this.time;
  }
}





