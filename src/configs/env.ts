export const ENV = {
  SERVER_TYPE: process.env.SERVER_TYPE as 'DEV' | 'PROD' | 'TEST',
  PORT: process.env.PORT as string,
  MONGO_URI: process.env.MONGO_URI as string,
  ACCESS_TOKEN_KEY: process.env.ACCESS_TOKEN_KEY as string,
  ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY as string, //15m
  REFRESH_TOKEN_KEY: process.env.REFRESH_TOKEN_KEY as string,
  REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY as string, //7d
  COOKIE_EXPIRY_IN_DAYS: process.env.COOKIE_EXPIRY_IN_DAYS as string, //1
};
