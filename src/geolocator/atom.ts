import { 
  atom,
  selector
} from 'recoil';

import Address from '../models/Address/model';

export const addressState = atom<null | Address>({
  key: 'addressState',
  default: null
}); 

export const addressSelector = selector({
  key: 'addressSelector',
  get: ({get} : any) => {
    const value = get(addressState);

    return value?.formatted;
  }
}); 