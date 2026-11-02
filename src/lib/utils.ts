/** Tiny className joiner (avoids an extra dependency). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

/** True when a link target should open outside the SPA. */
export const isExternal = (to: string) => /^(https?:|mailto:|tel:)/.test(to);

/** Detects Devanagari text so Hindi titles can use the Hindi font stack. */
export const isHindi = (text: string) => /[ऀ-ॿ]/.test(text);
