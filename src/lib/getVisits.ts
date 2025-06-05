import { Visit } from '@/types/visits';

export const getAmazonHackingVisits = async () => {
  const response = await fetch(
    'https://temporis-api.vercel.app/museums/01e03fd6-a020-43bd-bf1e-8cd27d0baf09/visits',
    {
      cache: 'no-store',
    }
  );
  if (!response.ok) {
    throw new Error('Failed to fetch Amazon hacking visits');
  }
  return response.json() as Promise<Visit[]>;
};
