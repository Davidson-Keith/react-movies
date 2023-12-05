export interface ActorCreationDTO {
  name: string;
  dateOfBirth?: Date;
  picture?: File;
  pictureURL?: string;
  biography?: string;
}


/*
 Not used?
 */
export interface ActorDTO {
  id: number;
  name: string;
  dateOfBirth?: Date;
  picture?: File;
  pictureURL?: string;
  biography?: string;
}

export interface ActorMovieDTO {
  id: number;
  name: string;
  character: string;
  picture: string;
}