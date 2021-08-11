import { useLocation } from 'react-router-dom';

export function useQuery(queryName?: string): URLSearchParams | string | null {
  if (!queryName) return new URLSearchParams(useLocation().search);
  return new URLSearchParams(useLocation().search).get(queryName);
}
