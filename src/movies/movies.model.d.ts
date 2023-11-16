export interface movieDTO {
  id: number;
  title: string;
  poster: string;
  genresIds?:number[];
  actorIds?:number[];
  theaterIds?:number[];
}

export interface movieCreationDTO {
  title: string;
  inTheaters: boolean;
  trailer:string;
  releaseDate?:Date;
  poster?: File;
  posterURL?: string;
  genresIds?:number[];
  actorIds?:number[];
  theaterIds?:number[];
}

export interface landingPageDTO {
  inTheaters?: movieDTO[];
  upcomingReleases?: movieDTO[];
}