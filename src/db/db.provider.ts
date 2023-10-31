import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => {
      console.log(process.env.DATABASE_URL);
      return mongoose.connect(process.env.DATABASE_URL);
    },
  },
];
