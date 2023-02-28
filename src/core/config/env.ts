export interface ENVBaseConfig {
  APP_NAME: string;
  APP_HOSTNAME: string;
  APP_ORIGIN: string;
  APP_PORT: number;
}

export interface ENVConfig extends ENVBaseConfig {
  ENV_NAME: string;
  API_URL: string;
  LOGIN_URL: string;
  SERVICE_1: string;
  SERVICE_2: string;
}

export const currentENV: ENVBaseConfig = {
  APP_NAME: process.env.APP_NAME ?? "",
  APP_HOSTNAME: process.env.APP_HOSTNAME ?? "",
  APP_ORIGIN: process.env.APP_ORIGIN ?? "",
  APP_PORT: Number(process.env.APP_PORT) ?? 8080,
};
