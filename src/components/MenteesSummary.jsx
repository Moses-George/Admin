import SelectMenu from './ui/SelectMenu';
import Doughnut from './charts/Doughnut';

const MenteesSummary = () => {

  return (
    <section className="space-y-10 bg-white rounded-md shadow-md p-8 w-full glossy">
      <div className="">
        <div className="flex flex-col lg:flex-row">
          <h1 className="text-2xl text-slate-800 font-medium pb-8">Mentees Summary</h1>
          <SelectMenu />
        </div>
        <div className="flex flex-col lg:flex-row -ml-8">
        <Doughnut color="#65a30d" label="Web" percentage={50} width={350} />
        <Doughnut color="#d97706" label="Mobile" percentage={30} width={350} />
        <Doughnut color="#65a30d" label="DevOps" percentage={20} width={350} />
        </div>
      </div>
    </section>
  );
};

export default MenteesSummary;
