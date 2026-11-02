import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { footerLinks, site, socials } from '@/data/site';
import { SocialIcon } from '@/components/ui/Icon';
import { Petal } from '@/components/ui/Blossom';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-leaf-700 bg-grain text-cream-200">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-leaf-500/30 blur-3xl" aria-hidden="true" />

      <div className="container-x relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <img src={site.logo} alt={site.name} className="h-16 w-auto rounded-xl bg-cream-50 p-2" />
          <h3 className="mt-8 text-sm font-extrabold uppercase tracking-[0.18em] text-cream-50">Get In Touch</h3>
          <ul className="mt-4 space-y-3 text-[15px]">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blossom-400" aria-hidden="true" />
              <a href={site.mapQuery} target="_blank" rel="noreferrer" className="hover:text-blossom-300">
                {site.address}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blossom-400" aria-hidden="true" />
              <a href={site.phoneHref} className="hover:text-blossom-300">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blossom-400" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-blossom-300">
                {site.email}
              </a>
            </li>
          </ul>
          <p className="mt-8 text-sm font-bold text-cream-50">Follow us on:</p>
          <ul className="mt-3 flex gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-cream-50/10 transition hover:-translate-y-0.5 hover:bg-blossom-400 hover:text-leaf-950"
                >
                  <SocialIcon name={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <FooterColumn title="Quick Links" links={footerLinks.quick} />
        <FooterColumn title="Therapies" links={footerLinks.therapies} />
        <FooterColumn title="Explore Us" links={footerLinks.explore} />
      </div>

      <div className="relative border-t border-cream-50/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-sm text-cream-200/70 sm:flex-row">
          <p>{site.copyright}</p>
          <ul className="flex gap-5">
            {footerLinks.legal.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-blossom-300">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-cream-50">{title}</h3>
      <ul className="mt-5 space-y-2.5 text-[15px]">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="group inline-flex items-center gap-2 transition hover:text-blossom-300">
              <Petal className="h-3 w-3 text-blossom-400/60 transition group-hover:rotate-45 group-hover:text-blossom-300" />
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
