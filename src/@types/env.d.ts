declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    NODE_ENV: string;
    NEXTAUTH_URL: string;
    HOST_URL: string;
    NEXTAUTH_SECRET_URL: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
  }
}
