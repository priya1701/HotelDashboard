export const GET_ALL = 'GET_ALL';
export const ADD_GUEST = 'ADD_GUEST';
export const REQ_BLACKLIST = 'REQ_BLACKLIST';

export function getAll() {
  return {
    type: GET_ALL,
  };
}

export function addGuest() {
  return {
    type: ADD_GUEST,
  };
}

export function reqBlacklist() {
    return {
      type: REQ_BLACKLIST,
    };
}