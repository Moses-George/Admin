import {
  AccountBox,
  GitHub,
  LinkedIn,
  Twitter,
  Visibility,
  VerifiedUser,
  Cancel
} from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/helpers';

const ProfileBaseData = ({ mentor, loading }) => {
  const textSkeleton = <p className="animate-pulse w-20 h-4 bg-gray-200"></p>;
  return (
    <section className="space-y-8">
      <div className="bg-white rounded-md glossy px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_8fr] gap-4 w-full">
          <div className="p-1.5 rounded-full border-4 h-fit w-fit border-lime-300">
            {loading || !mentor ? (
              <div className="animate-pulse w-[10rem] h-[10rem] rounded-full bg-gray-300 shadow-md"></div>
            ) : !mentor?.image ? (
              <AccountBox className="text-slate-800" sx={{ fontSize: '170px' }} />
            ) : (
              <img src={mentor?.image} alt="" className="rounded-full h-[10rem] w-[10rem]" />
            )}
          </div>

          <div className="space-y-8 w-full">
            <div className="flex flex-col lg:flex-row w-full space-y-6">
              <div className="w-full space-y-2">
                {loading || !mentor ? (
                  <h1 className="w-60 h-6 bg-gray-200"></h1>
                ) : (
                  <h1 className="text-3xl text-lime-900 font-medium">{`${capitalizeFirstLetter(
                    mentor?.firstName
                  )} (${capitalizeFirstLetter(mentor?.initials)})`}</h1>
                )}
                <div className="space-x-1 w-full">
                  {Boolean(mentor?.verified) ? (
                    <VerifiedUser className="text-lime-400" style={{ fontSize: '30px' }} />
                  ) : (
                    <Cancel className="text-red-400" style={{ fontSize: '30px' }} />
                  )}
                  <span className="font-semibold text-slate-600">
                    {Boolean(mentor?.verified) ? 'Verified Mentor' : 'Unverified Mentor'}{' '}
                  </span>
                </div>
              </div>
              {/* <div className="text-end gap-2 flex w-fit items-center">
                <Link className="p-2 rounded-md bg-slate-100 border" aria-disabled>
                  <LinkedIn className="text-blue-500" />
                </Link>
                <Link className="p-2 rounded-md bg-slate-100 border" aria-disabled>
                  <GitHub />
                </Link>
                {
                  <Link className="p-2 rounded-md bg-slate-100 border" aria-disabled>
                    <Twitter className="text-blue-500" />
                  </Link>
                }
                <Link
                  className="flex items-center gap-1 py-2 px-3 rounded-md bg-slate-100 border"
                  aria-disabled>
                  <Visibility className="text-lime-900" />
                  <span>RESUME</span>
                </Link>
              </div> */}
            </div>

            <div className="flex flex-wrap gap-8 w-full">
              <div className="jsutify-end space-y-6 flex-grow basis-1/4 w-full">
                <div className="w-full">
                  <p className="text-slate-800 font-medium">UUID</p>
                  {loading || !mentor ? (
                    textSkeleton
                  ) : (
                    <p className="text-slate-600">{mentor?.id}</p>
                  )}
                </div>
                <div className="w-full">
                  <p className="text-slate-800 font-medium">JOB TITLE</p>
                  {loading || !mentor ? (
                    textSkeleton
                  ) : (
                    <p className="text-slate-600">
                      {!mentor?.job_title ? 'null' : mentor?.job_title}
                    </p>
                  )}
                </div>
              </div>
              <div className="jsutify-end space-y-6 flex-grow basis-1/4 w-full">
                <div className="w-full">
                  <p className="text-slate-800 font-medium">INDUSTRY</p>
                  {loading || !mentor ? (
                    textSkeleton
                  ) : (
                    <p className="text-slate-600">
                      {!mentor?.industry ? 'null' : mentor?.industry}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <p className="text-slate-800 font-medium">COUNTRY</p>
                  {loading || !mentor ? (
                    textSkeleton
                  ) : (
                    <p className="text-slate-600">{!mentor?.country ? 'null' : mentor?.country}</p>
                  )}
                </div>
              </div>
              <div className="text-en space-y-6 flex-grow basis-1/4 w-full">
                <div className="w-full">
                  <p className="text-slate-800 font-medium">PHONE NUMBER</p>
                  {loading || !mentor ? (
                    textSkeleton
                  ) : (
                    <p className="text-slate-600">
                      {!mentor?.telNumber ? 'null' : mentor?.telNumber}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <p className="text-slate-800 font-medium">EMAIL</p>
                  {loading || !mentor ? (
                    textSkeleton
                  ) : (
                    <p className="text-slate-600">{!mentor?.email ? 'null' : mentor?.email}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-md glossy px-8 py-16">
        <div className="space-y-3">
          <h2 className="font-semibold text-2xl text-slate-800">BIO</h2>
          {loading || mentor.length === 0 ? (
            <p className="w-full h-60 bg-gray-200 animate-pulse"></p>
          ) : (
            <p className="text-slate-600 leading-8">
              {!mentor?.bio ? 'No biography' : mentor?.bio}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white rounded-md glossy px-8 py-16">
          <div className="space-y-3">
            <h2 className="font-semibold text-2xl text-slate-800">WHY MENTORING </h2>
            {loading || mentor?.length === 0 ? (
              <p className="w-full h-60 bg-gray-200 animate-pulse"></p>
            ) : (
              <p className="text-slate-600 leading-7">
                {!mentor?.why_mentoring ? 'No Information provided' : mentor?.why_mentoring}
              </p>
            )}
          </div>
        </div>
        <div className="bg-white rounded-md glossy px-8 py-16">
          <div className="space-y-3">
            <h2 className="font-semibold text-2xl text-slate-800">HOW HELP</h2>
            {loading || mentor.length === 0 ? (
              <p className="w-full h-60 bg-gray-200 animate-pulse"></p>
            ) : (
              <p className="text-slate-600 leading-7">
                {!mentor?.how_help ? 'No Information provided' : mentor?.how_help}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileBaseData;
