import { BAD_REQUEST } from 'http-status-codes';

import ErrorBase from './ErrorBase';
import ErrorCodes from '../constants/ErrorCodes';

class DuplicatedPassportNumberError extends ErrorBase {
  public constructor() {
    super('Duplicated Passport Number', ErrorCodes.DUPLICATED_PASSPORT_NUMBER_ERROR_CODE, BAD_REQUEST);
  }
}

export default DuplicatedPassportNumberError;
