/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_BASEURL: string;
  readonly VITE_APP_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
