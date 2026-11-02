import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const base =
  'w-full rounded-2xl border border-leaf-200 bg-white px-4 py-3.5 text-ink placeholder:text-ink-muted/70 transition focus:border-leaf-600 focus:outline-none focus:ring-4 focus:ring-leaf-200/60';

/** Labelled input with consistent styling and accessible label association. */
export function Field({
  label,
  id,
  required,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string; id: string }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-ink">
        {label}
        {required && <span className="text-coral"> *</span>}
      </label>
      <input id={id} name={id} required={required} className={base} {...props} />
    </div>
  );
}

export function TextArea({
  label,
  id,
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; id: string }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-ink">
        {label}
      </label>
      <textarea id={id} name={id} rows={5} className={cn(base, 'resize-y')} {...props} />
    </div>
  );
}
