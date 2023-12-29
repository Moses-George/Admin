import { Badge } from '@mui/icons-material';
import Doughnut from './charts/Doughnut';
import { useGetAllMembersQuery } from '../store/api/memberApi';

const MentorsSummary = () => {
  const { isLoading, isError, error, isSuccess, data: members } = useGetAllMembersQuery('mentors');
  const mentors = members?.data;

  const availablePositions = Array.from(
    new Set(mentors?.map((data) => data['job_title']).filter((data) => data))
  );
  console.log(availablePositions);

  const percentages = availablePositions?.map((position) => {
    const mentorsNumber = mentors?.length;
    const mentorsOfSingleJob = mentors?.filter((mentor) => mentor.job_title === position).length;
    console.log(mentorsOfSingleJob);
    const mentorsPercentage = Math.round((mentorsOfSingleJob / mentorsNumber) * 100);
    return mentorsPercentage;
  });
  console.log(percentages);
  return (
    <section className="space-y-10 bg-white rounded-md shadow-md p-8 w-full glossy">
      <div className="w-full space-y-10">
        <div className="flex gap-3 items-center">
          <Badge className="text-slate-600" sx={{ fontSize: '40px' }} />
          <h1 className="text-2xl text-slate-800 font-medium w-full">Mentors Summary</h1>
        </div>
        <div className={`flex scroller ${isLoading || !members ? 'space-x-10' : 'space-x-4'}`}>
          {isLoading || !members
            ? [1, 2, 3, 4, 5].map((loader) => (
                <div
                  key={loader}
                  className="animate-pulse border-[1.7rem] rounded-full w-40 h-40  border-gray-300"></div>
              ))
            : availablePositions.map((position, index) => (
                <div key={position} className="flex flex-col justify-center">
                  <Doughnut
                    color="#65a30d"
                    label={position}
                    percentage={percentages[index]}
                    width={350}
                  />
                  {/* <span className='font-medium text-2xl text-slate-600 ml-12'>{position}</span> */}
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsSummary;
