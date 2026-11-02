import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Field } from './Field';
import { Button } from '@/components/ui/Button';
import { submitForm } from '@/lib/forms';

/**
 * "Schedule a Tour" form — same fields as the original site:
 * First Name, Last Name, Phone Number, Email, Finding Source, Location,
 * Child's Date of Birth, Expected Start Date.
 */
export function TourForm() {
  const [status, setStatus] = useState<'idle' | 'busy' | 'done' | 'error'>('idle');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = {
      'First Name': String(fd.get('firstName') ?? ''),
      'Last Name': String(fd.get('lastName') ?? ''),
      'Phone Number': String(fd.get('phone') ?? ''),
      Email: String(fd.get('email') ?? ''),
      'Finding Source': String(fd.get('source') ?? ''),
      Location: String(fd.get('location') ?? ''),
      "Child's Date of Birth": String(fd.get('dob') ?? ''),
      'Expected Start Date': String(fd.get('startDate') ?? ''),
    };
    setStatus('busy');
    try {
      await submitForm('Schedule a Tour — Amaltas Special School', data);
      setStatus('done');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === 'done' ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 rounded-3xl bg-leaf-50 p-10 text-center"
            role="status"
          >
            <CheckCircle2 className="h-14 w-14 text-leaf-600" aria-hidden="true" />
            <p className="font-display text-2xl font-semibold text-ink">Thank you!</p>
            <p className="text-ink-soft">We have received your tour request and will contact you soon.</p>
            <button type="button" onClick={() => setStatus('idle')} className="text-sm font-bold text-leaf-700 underline">
              Submit another request
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Field label="First Name" id="firstName" required autoComplete="given-name" />
            <Field label="Last Name" id="lastName" autoComplete="family-name" />
            <Field label="Phone Number" id="phone" type="tel" required autoComplete="tel" inputMode="tel" />
            <Field label="Email" id="email" type="email" autoComplete="email" />
            <Field label="Finding Source" id="source" placeholder="How did you hear about us?" />
            <Field label="Location" id="location" autoComplete="address-level2" />
            <Field label="Child's Date of Birth" id="dob" type="date" />
            <Field label="Expected Start Date" id="startDate" type="date" />
            <div className="sm:col-span-2">
              <Button type="submit" variant="leaf" size="lg" className="w-full sm:w-auto" disabled={status === 'busy'}>
                {status === 'busy' ? 'Sending…' : 'Submit Now'}
              </Button>
              {status === 'error' && (
                <p role="alert" className="mt-3 text-sm text-coral">
                  Something went wrong. Please call us or try again.
                </p>
              )}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
