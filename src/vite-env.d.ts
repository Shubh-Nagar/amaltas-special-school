/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Optional form endpoint (Formspree, Web3Forms, custom API). Falls back to mailto when empty. */
  readonly VITE_FORM_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
