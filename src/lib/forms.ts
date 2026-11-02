import { site } from '@/data/site';

/**
 * Form submission helper.
 *
 * If VITE_FORM_ENDPOINT is set (e.g. a Formspree / Getform / Web3Forms / custom API URL),
 * the form is POSTed there as JSON. Otherwise the user's mail client opens with the
 * enquiry pre-filled to the school's email, so the site works with zero backend.
 */
export async function submitForm(subject: string, data: Record<string, string>): Promise<'sent' | 'mailto'> {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

  if (endpoint) {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ _subject: subject, ...data }),
    });
    if (!res.ok) throw new Error(`Form endpoint responded ${res.status}`);
    return 'sent';
  }

  const body = Object.entries(data)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n');
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return 'mailto';
}
