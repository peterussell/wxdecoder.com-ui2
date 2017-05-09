import axios from 'axios';

// const ROOT_URL = 'http://localhost:8000/metar/decode';
const ROOT_URL = 'http://api.wxdecoder.com/metar/decode';

export const FETCH_METAR = 'fetch_metar';

export function fetchMetar(values) {
  // TODO: determine whether input is an airport ID or raw METAR text

  const url = `${ROOT_URL}/${values.metarInput}/`;
  const request = axios.get(url, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return {
    type: FETCH_METAR,
    payload: request
  };
}
