/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly LUNIVERSE_BASE_URL: string;
    readonly LUNIVERSE_ENVIRONMENT_ID: string;
    readonly LUNIVERSE_KEY_ID: string;
    readonly LUNIVERSE_KEY_SECRET: string;
    readonly LUNIVERSE_AUTH_TOKEN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
