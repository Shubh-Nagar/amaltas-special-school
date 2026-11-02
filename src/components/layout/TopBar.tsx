import { Mail, MapPin, Phone } from 'lucide-react';
import { site, socials } from '@/data/site';
import { SocialIcon } from '@/components/ui/Icon';

/** Slim utility bar above the navbar — address, email, phone and social links. */
export function TopBar() {
  return (
    <div className="hidden bg-leaf-700 text-[13px] text-cream-200 lg:block">
      <div className="container-x flex h-10 items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <a href={site.mapQuery} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blossom-300">
            <MapPin className="h-3.5 w-3.5 text-blossom-400" aria-hidden="true" />
            {site.address}
          </a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-blossom-300">
            <Mail className="h-3.5 w-3.5 text-blossom-400" aria-hidden="true" />
            {site.email}
          </a>
          <a href={site.phoneHref} className="flex items-center gap-2 hover:text-blossom-300">
            <Phone className="h-3.5 w-3.5 text-blossom-400" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
        </div>
        <ul className="flex items-center gap-1">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-7 w-7 place-items-center rounded-full transition hover:bg-blossom-400 hover:text-leaf-950"
              >
                <SocialIcon name={s.icon} className="h-3.5 w-3.5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
