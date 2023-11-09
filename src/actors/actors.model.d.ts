export interface actorCreationDTO {
  name: string;
  dateOfBirth?: Date;
  picture?: File;
  pictureURL?: string;
  biography?: string;
}

// Not used?
export interface actorDTO {
  id: number;
  name: string;
  dateOfBirth?: Date;
  picture?: File;
  pictureURL?: string;
  biography?: string;
}