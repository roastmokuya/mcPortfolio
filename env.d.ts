/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_BASEURL: string;
  readonly VITE_RESUME_PASSWORD: string;
  readonly VITE_RESUME_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
