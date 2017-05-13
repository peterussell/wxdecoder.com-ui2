import React, { Component } from 'react';
import { connect } from 'react-redux';
import Collapsible from 'react-collapsible';
import { getOrdinalForDayOfMonth } from '../util';

class MetarList extends Component {
  renderMetarDetails(metar) {
    let output = [];
    for (let k in metar) {
      let value = metar[k].decoded;

      if (k === 'raw_metar') { // Skip raw_metar
        // TODO: fix this in the REST API (raw_metar shouldn't be in decoded)
        continue;
      } else if (Array.isArray(value)) { // Arrays
        if (value.length === 0) { continue; }
        output.push(`${k}: ` + value.join(', '));
      } else if (k === 'obs_datetime') { // Special case for obs_datetime
        // TODO: fix this in the REST API
        output.push(`date: ${value.date}`);
        output.push(`time: ${value.time}`);
      } else if (value) { // Render any non-empty key/vals
        output.push(`${k}: ${metar[k].decoded}`);
      }
    }

    return (
      <div>
        {output.map(val => <div key={val}>{val}</div>)}
      </div>
    )
  }

  renderMetar(metar) {
    const dc = metar.decoded_metar;
    const dateTimeText = getOrdinalForDayOfMonth(dc.obs_datetime.decoded.date) +
      " day of the month at " + dc.obs_datetime.decoded.time + " Zulu";
    const decodedText = dc.mod_auto.decoded ? "Yes" : "No";
    return (
      <Collapsible
        trigger={metar.raw_metar}
        transitionTime="30"
        triggerClassName="collapsible-heading"
        triggerOpenedClassName="collapsible-heading"
        contentInnerClassName="metar-detail-text">

      <table>
        <tbody>
          <tr>
            <td width={200}>Airport ID</td>
            <td className="detail-val">{metar.icao_id}</td>
          </tr>
          <tr>
            <td>Date & Time</td>
            <td className="detail-val">
              {dateTimeText}
            </td>
          </tr>
          <tr>
            <td>Automated</td>
            <td className="detail-val">{decodedText}</td>
          </tr>
          <tr>
            <td>Wind Dir. & Speed</td>
            <td className="detail-val">{dc.wind_dir_speed.decoded}</td>
          </tr>
          <tr>
            <td>Visibility</td>
            <td className="detail-val">{dc.vis.decoded}</td>
          </tr>
          <tr>
            <td>Sky Condition</td>
            <td className="detail-val">{dc.sky_condition.decoded.join(', ')}</td>
          </tr>
          <tr>
            <td>Temperature</td>
            <td className="detail-val">{dc.temp.decoded}</td>
          </tr>
          <tr>
            <td>Dewpoint</td>
            <td className="detail-val">{dc.dewpoint.decoded}</td>
          </tr>
          <tr>
            <td>Altimeter</td>
            <td className="detail-val">{dc.altimeter.decoded}</td>
          </tr>
          <tr>
            <td>Remarks</td>
            <td className="detail-val">{dc.remarks.decoded}</td>
          </tr>
        </tbody>
      </table>
      </Collapsible>
    );
  }

  render() {
    if (this.props.metars.length === 0) {
      return (
        <div>
          <p className="get-started-text">
            Enter an airport code (eg. KSFO) above to get started.
          </p>
        </div>
      );
    }

    return (
      <div className="wxd-metar-list-container">
        <div className="panel-group">
          {this.props.metars.map(this.renderMetar)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { metars: state.metars };
}

export default connect(mapStateToProps)(MetarList);
