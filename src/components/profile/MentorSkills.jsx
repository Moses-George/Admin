import Doughnut from '../charts/Doughnut';

const MentorSkills = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 space-y-4 rounded-tr-[6rem]">
      <h1 className="text-xl text-slate-800">My Skills</h1>
      <Doughnut label="skills" percentage={30} width={250} color="#d97706" />
      <p className="text-slate-500 font-medium">Years of Experience: 4</p>
      <div className="grid grid-cols-2 gap-3">
        <button className="rounded-3xl px-4 py-1.5  bg-amber-100 text-amber-700 font-semibold">
          ReactJs
        </button>
        <button className="rounded-3xl px-4 py-1.5 bg-amber-100 text-amber-700 font-semibold">
          ReactJs
        </button>
        <button className="rounded-3xl px-4 py-1.5  bg-amber-100 text-amber-700 font-semibold">
          ReactJs
        </button>
        <button className="rounded-3xl px-4 py-1.5 bg-amber-100 text-amber-700 font-semibold">
          ReactJs
        </button>
        <button className="rounded-3xl px-4 py-1.5 bg-amber-100 text-amber-700 font-semibold">
          ReactJs
        </button>
        <button className="rounded-3xl px-4 py-1.5 bg-amber-100 text-amber-700 font-semibold">
          ReactJs
        </button>
      </div>
    </div>
  );
};

export default MentorSkills;
