import { FETCH_METAR } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_METAR:
      const decoded = action.payload.data.decoded_metar;
      const newMetar = {
        key: decoded.icao_id.decoded,
        icao_id: decoded.icao_id.decoded,
        raw_metar: decoded.raw_metar,
        decoded_metar: decoded
      }
      return [newMetar, ...state];

    default:
      return state;
  }
}
