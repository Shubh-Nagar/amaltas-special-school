/** Smaller pages: Students, Privacy Policy, Terms & Conditions. */
import { ExternalLink, FileText, Mail, Phone } from 'lucide-react';
import { site } from '@/data/site';
import { PageHeader } from '@/components/ui/PageHeader';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { usePageTitle } from '@/hooks/usePageTitle';

/** Students — the original page links to a downloadable student list PDF. */
export function Students() {
  usePageTitle('Students');
  return (
    <>
      <PageHeader title="Students" />
      <section className="section bg-cream-50">
        <div className="container-x">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center rounded-5xl bg-white p-12 text-center shadow-soft ring-1 ring-leaf-100">
            <span className="grid h-20 w-20 place-items-center rounded-3xl bg-leaf-100 text-leaf-700">
              <FileText className="h-10 w-10" aria-hidden="true" />
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold text-ink">Student List</h2>
            <div className="mt-8">
              <Button to={site.studentListPdf} size="lg">
                Download PDF
              </Button>
            </div>
            <div className="mt-8 flex flex-col gap-2 text-ink-soft sm:flex-row sm:gap-6">
              <a href={site.phoneHref} className="flex items-center gap-2 hover:text-leaf-700">
                <Phone className="h-4 w-4" aria-hidden="true" /> {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-leaf-700">
                <Mail className="h-4 w-4" aria-hidden="true" /> {site.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/**
 * Privacy Policy / Terms & Conditions.
 * The legal text could not be migrated automatically; until it is pasted into this component
 * the page links to the current published version so nothing is lost.
 */
export function LegalPage({ title, legacyUrl }: { title: string; legacyUrl: string }) {
  usePageTitle(title);
  return (
    <>
      <PageHeader title={title} />
      <section className="section bg-cream-50">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl rounded-5xl bg-white p-10 shadow-soft ring-1 ring-leaf-100 sm:p-14">
            {/* TODO(content): paste the legal text from the live page here. */}
            <h2 className="font-display text-3xl font-semibold text-ink">{title}</h2>
            <a
              href={legacyUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-bold text-leaf-700 underline-offset-4 hover:underline"
            >
              Read the current {title} <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
