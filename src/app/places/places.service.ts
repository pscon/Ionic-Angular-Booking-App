import { Injectable } from '@angular/core';
import {Place} from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
private _places: Place []= [
new Place(
  'p1',
  'Lekki Conventional Center',
'Nature And Wild Life Areas',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/88/2e/14/wooden-walkway.jpg?w=500&h=400&s=1', 25.00
),

new Place(
  'p2',
  'Tinapa Lakeside Hotel, Calabar, Cross River, Nigeria',
'relaxation center',
'https://exp.cdn-hotels.com/hotels/4000000/3160000/3158600/3158591/854b5b8e_z.jpg?impolicy=fcrop&w=500&h=333&q=medium', 30.00
),


new Place(
  'p3',
  'Ikeja City Mall',
// eslint-disable-next-line max-len
'Ikeja City Mall is situated in the heart of ikeja – alausa, home to the state government and its parastatals. ICM is the choice retail destination in Lagos with a wide selection of national and international tenants.',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/11/a5/bd/p-20160326-155047-1-p.jpg?w=500&h=-1&s=1', 25.00
)
];

get places() {

  // eslint-disable-next-line no-underscore-dangle
  return [...this._places];
}
  constructor() { }

  getPlace(id: string){
    // eslint-disable-next-line no-underscore-dangle
    return {...this._places.find(p => p.id === id)};

  }
}
