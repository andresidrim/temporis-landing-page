export type Visit = {
  id: string;
  name: string;
  birthPlace: string;
  museumId: string;
  visitedAt: string;
  userId: string | null;
  museum: {
    name: string;
  };
};
