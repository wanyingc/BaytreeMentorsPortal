import './timecard.css'
import AnalogueClock from 'react-analogue-clock';
import DateTime from './DateTime';

// Analog clock imported from https://www.npmjs.com/package/react-analogue-clock

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
            <button type="button" className="btn btn-default light-red-background w-50 rounded-pill">
              Upload Notes
            </button>
        </div>

        <div className="row justify-content-center">
            <button type="button" className="btn btn-default dark-red-background w-50 rounded-pill my-3">
              Previous Time Punches
            </button>
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
          <button type="button" className="btn btn-primary  w-50 rounded-pill" onClick={() => {console.log(new Date())}}>
            Clock In</button>
        </div>

        <div className="row justify-content-center">
          <button type="button" className="btn btn-secondary w-50 rounded-pill mb-5 my-3" onClick={() => {console.log(new Date())}}>
            Clock Out
          </button>
        </div>

      </div>
    </div>
  );
}

export default TimeCard;