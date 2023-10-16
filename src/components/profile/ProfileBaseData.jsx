import { AccountBox, GitHub, LinkedIn, Visibility } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';

const ProfileBaseData = () => {
  const { mentorId } = useParams();
  return (
    <section className="bg-white rounded-md shadow-md p-8">
      <div className="grid grid-cols-[1fr_9fr] gap-4">
        <div className="">
          <AccountBox className="text-slate-800" sx={{ fontSize: '150px' }} />
        </div>

        <div className="space-y-8">
          <div className="flex">
            <div className="">
              <h1 className="text-3xl text-lime-900 font-medium">George Moses</h1>
              <p className="">Senior software engineer</p>
            </div>
            <div className="text-end gap-2 flex w-fit items-center">
              <Link className="p-2 rounded-md bg-slate-100 border">
                <LinkedIn className="text-blue-500" />
              </Link>
              <Link className="p-2 rounded-md bg-slate-100 border">
                <GitHub />
              </Link>
              <Link className="flex items-center gap-1 py-2 px-3 rounded-md bg-slate-100 border">
                <Visibility className="text-lime-900" />
                <span>Resume</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-8">
            <div className="space-y-6 flex-grow basis-1/4">
              <p className="text-slate-800 font-medium">About</p>
              <p className="text-slate-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore illum nesciunt sint
                perspiciatis qui reiciendis?"
              </p>
            </div>
            <div className="jsutify-end space-y-6 flex-grow basis-1/4 text-end">
              <div className="">
                <p className="text-slate-800 font-medium">UUID</p>
                <p className="text-slate-600">{`#${mentorId}`}</p>
              </div>
              <div className="">
                <p className="text-slate-800 font-medium">Higher Education</p>
                <p className="text-slate-600">Master in science</p>
              </div>
            </div>
            <div className="text-en space-y-6 flex-grow basis-1/4 text-end">
              <div className="">
                <p className="text-slate-800 font-medium">Higher Education</p>
                <p className="text-slate-600">Master in science</p>
              </div>
              <div className="">
                <p className="text-slate-800 font-medium">Higher Education</p>
                <p className="text-slate-600">Master in science</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileBaseData;
