export enum ProjectStatus {
  LIVE,
  WIP,
}

export type Project = {
  name: string;
  url: string;
  description: string;
  thumbnail: string;
  status: ProjectStatus;
  opensource: boolean;
  images: string[];
};
