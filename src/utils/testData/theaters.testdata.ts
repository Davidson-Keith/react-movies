import {actorDTO} from "../../actors/actors.model";
import {theaterCreationDTO, theaterDTO} from "../../theaters/theater.model";
import {genreDTO} from "../../genres/genres.model";


export const testDataTheaters: theaterDTO[] = [
  {
    id: 1,
    name: 'Event Cinemas, Pacific Fair',
    latitude: -28.0322621,
    longitude: 153.401651
  },
  {
    id: 2,
    name: 'Event Cinemas, Robina',
    latitude: -28.0751043,
    longitude: 153.3278401
  },
  {
    id: 3,
    name: 'HOTA, Home of the Arts',
    latitude: -27.9943736,
    longitude: 153.3148092,
  },
  {
    id: 4,
    name: 'Dendy Cinemas Southport',
    latitude: -27.9943866,
    longitude: 153.3143822
  },
  {
    id: 5,
    name: 'Twilight Flicks Outdoor Cinemas, Gold Coast',
    latitude: -27.969127,
    longitude: 153.2989534
  },
  {
    id: 6,
    name: 'Event Cinemas, Southport',
    latitude: -27.9951144,
    longitude: 153.2714205
  },
  {
    id: 7,
    name: 'Cinebar, Coolangatta',
    latitude: -28.2424048,
    longitude: 153.4456125
  },
]

export const testDataSelectedTheaters: theaterDTO[] = [
  {
    id: 2,
    name: 'Event Cinemas, Robina',
    latitude: -28.0751043,
    longitude: 153.3278401
  },
  {
    id: 7,
    name: 'Cinebar, Coolangatta',
    latitude: -28.2424048,
    longitude: 153.4456125
  },
]
export const testDataNonNonSelectedTheaters: theaterDTO[] = [
  {
    id: 1,
    name: 'Event Cinemas, Pacific Fair',
    latitude: -28.0322621,
    longitude: 153.401651
  },
  {
    id: 3,
    name: 'HOTA, Home of the Arts',
    latitude: -27.9943736,
    longitude: 153.3148092,
  },
  {
    id: 4,
    name: 'Dendy Cinemas Southport',
    latitude: -27.9943866,
    longitude: 153.3143822
  },
  {
    id: 5,
    name: 'Twilight Flicks Outdoor Cinemas, Gold Coast',
    latitude: -27.969127,
    longitude: 153.2989534
  },
  {
    id: 6,
    name: 'Event Cinemas, Southport',
    latitude: -27.9951144,
    longitude: 153.2714205
  },
]
