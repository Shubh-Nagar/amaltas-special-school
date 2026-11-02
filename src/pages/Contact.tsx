import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { site, socials } from '@/data/site';
import { PageHeader } from '@/components/ui/PageHeader';
import { Reveal, Stagger, rise } from '@/components/ui/Reveal';
import { SocialIcon } from '@/components/ui/Icon';
import { ContactForm } from '@/components/forms/ContactForm';
import { TourSection } from '@/components/sections/TourSection';
import { WP } from '@/data/site';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function Contact() {
  usePageTitle('Contact Us');
  const cards = [
    { Icon: MapPin, label: 'Address', value: site.address, href: site.mapQuery },
    { Icon: Phone, label: 'Phone', value: site.phoneDisplay, href: site.phoneHref },
    { Icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { Icon: MessageCircle, label: 'WhatsApp', value: site.phoneDisplay, href: site.whatsappHref },
  ];

  return (
    <>
      <PageHeader title="Contact Us" />

      <section className="section bg-cream-50">
        <div className="container-x">
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map(({ Icon, label, value, href }) => (
              <motion.a
                key={label}
                variants={rise}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group rounded-4xl bg-white p-7 shadow-soft ring-1 ring-leaf-100 transition hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-leaf-100 text-leaf-700 transition group-hover:bg-blossom-400 group-hover:text-leaf-950">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.18em] text-ink-muted">{label}</p>
                <p className="mt-1 break-words font-bold text-ink">{value}</p>
              </motion.a>
            ))}
          </Stagger>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <Reveal className="rounded-5xl bg-white p-8 shadow-soft ring-1 ring-leaf-100 sm:p-12">
              <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Get in Touch</h2>
              <div className="mt-8">
                <ContactForm />
              </div>
            </Reveal>

            <div className="flex flex-col gap-6">
              <Reveal className="relative overflow-hidden rounded-5xl bg-leaf-700 p-8 text-cream-50">
                <img src={`${WP}/2025/06/shared-image-7.jpeg`} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
                <div className="relative flex items-center gap-4">
                  <img src={`${WP}/2023/11/google.png`} alt="Google" className="h-12 w-12 rounded-full bg-white p-2" />
                  <div>
                    <p className="text-sm font-bold text-cream-200">Parent's Feedback</p>
                    {/* The Contact page on the original site shows 4.7/5.0 (Home shows 4.9/5.0). */}
                    <p className="font-display text-3xl font-semibold">Review 4.7/5.0</p>
                  </div>
                </div>
                <p className="relative mt-6 text-sm font-bold">Follow us on:</p>
                <ul className="relative mt-3 flex gap-2">
                  {socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.label}
                        className="grid h-10 w-10 place-items-center rounded-full bg-cream-50/15 transition hover:bg-blossom-400 hover:text-leaf-950"
                      >
                        <SocialIcon name={s.icon} />
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="min-h-[20rem] flex-1 overflow-hidden rounded-5xl shadow-soft ring-1 ring-leaf-100">
                <iframe
                  title="Map — Amaltas Special School, Bangar, Dewas"
                  src={site.mapEmbed}
                  className="h-full min-h-[20rem] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <TourSection />
    </>
  );
}
