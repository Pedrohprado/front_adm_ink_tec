/* eslint-disable react/prop-types */
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

function PickerDayByRange({ selectedRange, setSelectdRange }) {
  return (
    <div className='z-10 fixed top-24 right-[29rem] shadow-md bg-white text-zinc-900 rounded'>
      <DayPicker
        mode='range'
        selected={selectedRange}
        onSelect={(range) => setSelectdRange(range)}
      />
    </div>
  );
}

export default PickerDayByRange;
