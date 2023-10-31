import { Connection } from 'mongoose';
import { UserSchema } from '../schemas/user.schema';
import { CONNECTION, USER_MODEL } from 'src/utils/constants';

export const userProviders = [
  {
    provide: USER_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: [CONNECTION],
  },
];
