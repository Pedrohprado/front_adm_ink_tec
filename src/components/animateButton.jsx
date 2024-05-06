/* eslint-disable react/prop-types */
import { IoCalendarOutline, IoCloseSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';

function AnimationButton({ active, setActive }) {
  const buttonVariants = {
    active: { rotate: 180 },
    inactive: { rotate: 0 },
  };
  return (
    <motion.button
      className='border p-2 rounded transition hover:bg-slate-950 hover:text-white'
      onClick={() => setActive(!active)}
    >
      <motion.div
        animate={active ? 'active' : 'inactive'}
        variants={buttonVariants}
      >
        {active ? <IoCloseSharp size={26} /> : <IoCalendarOutline size={26} />}
      </motion.div>
    </motion.button>
  );
}

export default AnimationButton;
