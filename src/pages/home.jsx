import DayInformations from '../components/dayinformations';
import InkMostUse from '../components/inkmostuse';
import LastOperations from '../components/lastoperations';

const Home = () => {
  return (
    <main className='flex flex-col items-center bg-black'>
      <section className='  w-[83%] h-screen py-2 px-5 justify-between flex flex-col absolute right-0 '>
        <h1 className=' mb-2 font-black text-lg'>Relatório pintura líquida</h1>
        <section className=' w-full flex items-center justify-between gap-2'>
          <DayInformations />
          <InkMostUse />
        </section>
        <LastOperations />
      </section>
    </main>
  );
};

export default Home;
