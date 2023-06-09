// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Qualifications } = initSchema(schema);

export {
  Qualifications
};