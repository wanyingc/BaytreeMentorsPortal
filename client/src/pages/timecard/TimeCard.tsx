import './timecard.css'
import AnalogueClock from 'react-analogue-clock';
import DateTime from './DateTime';

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
    <div id="container" className="container-lg">
      <div className="col-xl-6">
        <div className="row justify-content-center">
          <div>
            <button type="button" className="btn btn-default light-red-background btn-block">
              Upload Notes
            </button><br/><br/>
            <button type="button" className="btn btn-default dark-red-background btn-block">
              Previous Time Punches
            </button>
          </div>
        </div>

        <div className="row justify-content-center">
          <div id="analogClock">
            <AnalogueClock {...clockOptions}/>
          </div>
        </div>

        <div className="row justify-content-center">
          <div id="dateTimeDisplay">
            <DateTime></DateTime>
          </div>
        </div>

        <div className="row justify-content-center">
          <div>
            <button type="button" className="btn btn-primary btn-block" onClick={() => {console.log(new Date())}}>
              Clock In</button><br/><br/>
            <button type="button" className="btn btn-secondary btn-block" onClick={() => {console.log(new Date())}}>
              Clock Out
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default TimeCard;