import { VerifiedUser } from '@mui/icons-material';
import { Greeting } from '../utils/greeting';

const PanelHeader = () => {
  const greeting = new Greeting();

  return (
    <section className="bg-lime-500 shadow-md rounded-br-[3rem]  rounded-tl-[3rem] p-8 w-full flex justify-between items-center text-white">
      <div className="flex-2">
        <h1 className="text-2xl text-white font-medium">{greeting.greetUser('George')}</h1>
        <p className="">mosesgorge33@gmail.com</p>
      </div>

      <div className="space-x-1 text-end">
        <VerifiedUser className="text-white" style={{ fontSize: '40px' }} />
        <span className="font-semibold text-white">Verified Mentor</span>
      </div>
    </section>
  );
};

export default PanelHeader;
