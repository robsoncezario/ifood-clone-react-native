import { 
  atom,
  selector
} from 'recoil';

export const addressState = atom<any>({
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