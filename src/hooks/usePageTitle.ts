import { useEffect } from 'react';
import { site } from '@/data/site';

/** Sets document.title as "<Page> | Amaltas Special School" (or the site title on Home). */
export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : `${site.name}, Dewas`;
  }, [title]);
}
