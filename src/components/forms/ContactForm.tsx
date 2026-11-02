import { useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Field, TextArea } from './Field';
import { Button } from '@/components/ui/Button';
import { submitForm } from '@/lib/forms';

/** "Get in Touch" form — Name*, Email*, Phone*, Message (same fields as the original Contact page). */
export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'busy' | 'done' | 'error'>('idle');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setStatus('busy');
    try {
      await submitForm('Website enquiry — Amaltas Special School', {
        Name: String(fd.get('name') ?? ''),
        Email: String(fd.get('cemail') ?? ''),
        Phone: String(fd.get('cphone') ?? ''),
        Message: String(fd.get('message') ?? ''),
      });
      setStatus('done');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'done') {
    return (
      <div role="status" className="flex flex-col items-center gap-3 rounded-3xl bg-leaf-50 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-leaf-600" aria-hidden="true" />
        <p className="font-display text-2xl font-semibold">Thank you!</p>
        <p className="text-ink-soft">Your message has been sent.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <p className="text-sm text-ink-muted sm:col-span-2">Your email address will not be published.</p>
      <Field label="Name" id="name" required autoComplete="name" className="sm:col-span-2" />
      <Field label="Email" id="cemail" type="email" required autoComplete="email" />
      <Field label="Phone" id="cphone" type="tel" required autoComplete="tel" inputMode="tel" />
      <TextArea label="Message" id="message" className="sm:col-span-2" />
      <div className="sm:col-span-2">
        <Button type="submit" variant="leaf" size="lg" disabled={status === 'busy'}>
          {status === 'busy' ? 'Sending…' : 'Submit Now'}
        </Button>
        {status === 'error' && (
          <p role="alert" className="mt-3 text-sm text-coral">
            Something went wrong. Please call us or try again.
          </p>
        )}
      </div>
    </form>
  );
}
