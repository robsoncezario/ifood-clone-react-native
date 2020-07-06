import { 
  atom,
  selector
} from 'recoil';

import Address from '../models/Address/model';

export const addressState = atom<null | Address>({
  key: 'addressState',
  default: null
}); 