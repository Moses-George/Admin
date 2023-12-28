import Doughnut from '../charts/Doughnut';

const MentorSkills = ({ skills, experience }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-8 space-y-4 rounded-tr-[6rem] w-fit">
      <h1 className="font-semibold text-2xl text-slate-800">Professional Skills</h1>
      <p className="text-slate-500 font-medium">Years of Experience: {experience}</p>
      <div className="flex flex-wrap gap-3">
        {skills?.map((skill, index) => (
          <button
            key={index}
            className="rounded-3xl px-4 py-1.5  bg-amber-100 text-amber-700 font-semibold flex-grow basis-1/3">
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MentorSkills;
