export interface actorCreationDTO {
  name: string;
  dateOfBirth?: Date;
  picture?: File;
  pictureURL?: string;
}

export interface actorDTO {
  id: number;
  name: string;
  dateOfBirth?: Date;
  picture?: File;
  pictureURL?: string;
}