import {ActorDTO, ActorMovieDTO} from "../../actors/actors.model";


export const testDataActors: ActorDTO[] = [
  {
    id: 1,
    name: 'Daniel Craig',
    dateOfBirth: new Date('1968-03-02T00:00:00'),
    biography: `# Daniel
    This legend was born in a **castle**.`,
    pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Daniel_Craig_in_2021.jpg/440px-Daniel_Craig_in_2021.jpg'
  },
]

export const testDataActorMovies: ActorMovieDTO[] = [
  {
    id: 1,
    name: 'Daniel Craig',
    character: 'James Bond',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Daniel_Craig_in_2021.jpg/440px-Daniel_Craig_in_2021.jpg'
  },
  {
    id: 2,
    name: 'Brad Pitt',
    character: '',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg'
  },
  {
    id: 3,
    name: 'Scarlett Johansson',
    character: '',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%2C_2%29.jpg'
  },
  {
    id: 4,
    name: 'Jennifer Lawrence',
    character: '',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Jennifer_Lawrence_in_2016.jpg'
  },
  {
    id: 5,
    name: 'Johnny Depp',
    character: '',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Johnny_Depp_2020.jpg'
  },
]

