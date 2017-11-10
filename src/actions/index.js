import axios from 'axios';

export const GET_PROPS = 'GET_PROPS';
export const GET_PROP_INFO = 'GET_PROP_INFO';

export const getProps = () => {
  const promise = axios.get('http://107.21.199.89/equityfinder/property');
  return {
    type: GET_PROPS,
    payload: promise
  }
}

export const getPropInfo = (id) => {
    const promise = axios.get(`http://107.21.199.89/equityfinder/property/${id}`);
    return {
        type: GET_PROP_INFO,
        payload: promise
    }
}