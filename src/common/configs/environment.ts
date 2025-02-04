import * as dotenv from 'dotenv';
dotenv.config();

export interface IEnvironment {
  APP: {
    PORT: number | string;
  };
  NUMBERS: {
    API: string;
  };
}

export const ENVIRONMENT: IEnvironment = {
  APP: {
    PORT: process.env.PORT || process.env.APP_PORT || 3000,
  },
  NUMBERS: {
    API: process.env.NUMBERS_API || '',
  },
};
