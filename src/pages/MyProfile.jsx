import { AdminPanelSettings, AttachMoney, AvTimer, People, Reviews } from '@mui/icons-material';
import ProfileBaseData from '../components/ProfileBaseData';
import AdminLayout from '../components/layout/AdminLayout';
import MySkills from '../components/MySkills';
import AchieveMentCard from '../components/AchievementCard';

const achievements = [
  {
    id: 'a1',
    title: 'Mentor Hours',
    amount: '86',
    icon: <AvTimer className="text-white" sx={{ fontSize: '60px' }} />,
    bgColor: 'bg-lime-500',
    hover: "hover:bg-lime-600"
  },
  {
    id: 'a1',
    title: 'Mentees mentored',
    amount: '25',
    icon: <People className="text-white" sx={{ fontSize: '60px' }} />,
    bgColor: 'bg-amber-600',
    hover: "hover:bg-amber-500"
  },
  {
    id: 'a1',
    title: 'Reviews',
    amount: '30',
    icon: <Reviews className="text-white" sx={{ fontSize: '60px' }} />,
    bgColor: 'bg-lime-600',
    hover: "hover:bg-lime-500"
  },
  {
    id: 'a1',
    title: 'Income',
    amount: '70k',
    icon: <AttachMoney className="text-white" sx={{ fontSize: '60px' }} />,
    bgColor: 'bg-amber-500',
    hover: "hover:bg-amber-600"
  },
];

const MyProfile = () => {
  return (
    <AdminLayout header="My Profile" icon={<AdminPanelSettings sx={{fontSize:"50px"}} />}>
      <div className="mx-6 space-y-6 w-full">
        <section className="flex flex-wrap gap-4">
          {achievements.map((achievement) => {
            const { title, amount, icon, bgColor, hover } = achievement;
            return <AchieveMentCard title={title} amount={amount} icon={icon} bgColor={bgColor} hover={hover} />;
          })}
        </section>
        <ProfileBaseData />
        <section className="flex gap-6">
          <MySkills />
          <MySkills />
          <MySkills />
          {/* <MySkills /> */}
        </section>
      </div>
    </AdminLayout>
  );
};

export default MyProfile;
