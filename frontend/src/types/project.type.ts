export interface IProject {
  _id: string;
  title: string;
  banner: string;
  description: string;
  livePreview: string;
  github: string;

  challenge: {
    image: string;
    description: string;
    challenges: string[];
  };

  solution: {
    image: string;
    description: string;
    solutions: string[];
  };

  result: {
    image: string;
    description: string;
    results: string[];
  };
  createdAt: string;
  updatedAt: string;
}
