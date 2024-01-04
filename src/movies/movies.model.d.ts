export interface movieDTO {
  id: number;
  title: string;
  poster: string;
  genresIds?:number[];
  actorIds?:number[];
  theaterIds?:number[];
}

export interface MovieCreationDTO {
  title: string;
  inTheaters: boolean;
  trailer:string;
  releaseDate?:Date;
  poster?: File;
  posterURL?: string;
  genresIds?:number[];
  theaterIds?:number[];
  actors?: ActorMovieDTO[];

  // Not used?
  actorIds?:number[];
}

export interface landingPageDTO {
  inTheaters?: movieDTO[];
  upcomingReleases?: movieDTO[];
}