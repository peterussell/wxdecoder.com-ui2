import { FETCH_METAR } from '../actions';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_METAR:
      const decoded = action.payload.data.decoded_metar;
      return {
        icao_id: decoded.icao_id.decoded,
        raw_metar: decoded.raw_metar,
        decoded_metar: decoded
      };
    default:
      return state;
  }
}
