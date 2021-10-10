import './timecard.css'
import AnalogueClock from 'react-analogue-clock';

const clockOptions = {
  baseColor: '#22345E',
  borderColor: '#000000',
  borderWidth: 0,
  centerColor: '#DA2E7C',
  handColors: {
      hour: '#FFFFFF',
      minute: '#FFFFFF',
      second: '#DA2E7C',
  },
  notchColor: '#51638D',
  numbersColor: '#51638D',
  showNumbers: false,
  size: 300
}

function TimeCard(): JSX.Element {
  return (
    <div id="container" className="container-xl">
      <div className="row justify-content-center">
        <div className="col-xl-9">
            <button type="button" className="btn btn-default light-red-background btn-block">
              Upload Notes
            </button><br/><br/>
            <button type="button" className="btn btn-default dark-red-background btn-block">
              Previous Time Punches
            </button><br/><br/>
            <div id="analogClock">
              <AnalogueClock {...clockOptions} />
            </div>
            <div id="ClockInOutButtons">
              <button type="button" className="btn btn-primary btn-lg" style={{marginRight: '150px', marginLeft:'50px'}}>Clock In</button>
              <button type="button" className="btn btn-secondary btn-lg">Clock Out</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default TimeCard;