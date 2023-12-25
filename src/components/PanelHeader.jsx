import { VerifiedUser } from '@mui/icons-material';
import { greeting } from '../utils/greeting';
import { Cancel } from '@mui/icons-material';

const PanelHeader = ({ loading, admin }) => {
  return (
    <section className="bg-lime-500 shadow-md rounded-br-[3rem] rounded-tl-[3rem] p-8 w-full flex flex-col lg:flex-row justify-between items-center gap-4 text-white">
      <div className="flex-2 w-full">
        {loading || Object.keys(admin).length === 0 ? (
          <p className="animate-pulse w-60 lg:w-80 h-10 bg-lime-400"></p>
        ) : (
          <h1 className="text-2xl text-white font-medium">{greeting.greetUser(admin?.firstName)}</h1>
        )}
        {loading || Object.keys(admin).length === 0 ? (
          <p className="animate-pulse w-40 h-4 mt-3 bg-lime-400"></p>
        ) : (
          <p className="">{admin?.email}</p>
        )}
      </div>

      {loading || Object.keys(admin).length === 0 ? (
        <p className="animate-pulse w-40 h-8 bg-lime-400"></p>
      ) : (
        <div className="space-x-1 w-full lg:text-end">
          {Boolean(admin?.verified) ? (
            <VerifiedUser className="text-white" style={{ fontSize: '40px' }} />
          ) : (
            <Cancel className="text-red-500" style={{ fontSize: '30px' }} />
          )}
          <span className="font-semibold text-white">
            {Boolean(admin?.verified) ? 'Verified Admin' : 'Unverified Admin'}
          </span>
        </div>
      )}
    </section>
  );
};

export default PanelHeader;
