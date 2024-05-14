/* eslint-disable react/prop-types */
import { DayPicker } from 'react-day-picker';
function PickerMode({ selected, setSelected }) {
  return (
    <DayPicker
      mode='single'
      selected={selected}
      onSelect={setSelected}
      styles={{
        caption: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginBottom: '10px',
        },
        day: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          height: '30px',
          width: '30px',
          cursor: 'pointer',
        },
        selected: {
          backgroundColor: '#007BFF',
          color: '#fff',
        },
        today: {
          border: '2px solid #007BFF',
        },
      }}
      className=' bg-white rounded-lg shadow py-5 px-10 fixed top-36 right-[23rem] z-10 flex items-center justify-center'
    />
  );
}

export default PickerMode;
