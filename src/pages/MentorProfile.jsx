import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  AdminPanelSettings,
  AttachMoney,
  AvTimer,
  Badge,
  People,
  Reviews,
  Work
} from '@mui/icons-material';
import ProfileBaseData from '../components/profile/ProfileBaseData';
import AdminLayout from '../components/layout/AdminLayout';
import MentorSkills from '../components/profile/MentorSkills';
import AchieveMentCard from '../components/AchievementCard';
import AchieveMentCardSkeleton from '../components/ui/skeleton-loaders/AchievemntCardSkeleton';
import { useGetMentorQuery } from '../store/api/memberApi';
import { getToken } from '../utils/authHelpers';

const getAchievements = (experience, price) => {
  const achievements = [
    {
      id: 'a1',
      title: 'Mentor Hours',
      amount: '0',
      icon: <AvTimer className="text-white" sx={{ fontSize: '60px' }} />,
      bgColor: 'bg-lime-500',
      hover: 'hover:bg-lime-600'
    },
    {
      id: 'a1',
      title: 'Mentees mentored',
      amount: '0',
      icon: <People className="text-white" sx={{ fontSize: '60px' }} />,
      bgColor: 'bg-amber-600',
      hover: 'hover:bg-amber-500'
    },
    {
      id: 'a1',
      title: 'Price',
      amount: `$${!price ? 0 : price}`,
      icon: <AttachMoney className="text-white" sx={{ fontSize: '60px' }} />,
      bgColor: 'bg-lime-600',
      hover: 'hover:bg-lime-500'
    },
    {
      id: 'a1',
      title: 'Experience',
      amount: !experience ? 0 : experience,
      icon: <Work className="text-white" sx={{ fontSize: '60px' }} />,
      bgColor: 'bg-amber-500',
      hover: 'hover:bg-amber-600'
    }
  ];

  return achievements;
};

const MentorProfile = () => {
  const { mentorId } = useParams();

  const token = getToken();
  const { isLoading, isError, error, isSuccess, data: member } = useGetMentorQuery(mentorId);
  const navigate = useNavigate();
  // console.log(mentor);

  useEffect(() => {
    if (!token) {
      navigate('/', { replace: true });
    }
  }, [token]);

  const mentor = member?.data[0];

  return (
    <AdminLayout header={mentor?.firstName && mentor?.firstName} icon={<Badge sx={{ fontSize: '50px' }} />}>
      <div className="lg:mx-6 space-y-6 w-full">
        <section className="flex flex-wrap gap-4">
          {getAchievements(mentor?.experience, mentor?.price).map((achievement, index) => {
            const { title, amount, icon, bgColor, hover } = achievement;
            return isLoading || !mentor ? (
              <AchieveMentCardSkeleton key={index} />
            ) : (
              <AchieveMentCard
                key={index}
                title={title}
                amount={amount}
                icon={icon}
                bgColor={bgColor}
                hover={hover}
              />
            );
          })}
        </section>
        <ProfileBaseData
          mentor={mentor}
          loading={isLoading}
        />
        <section className="flex gap-6">
          <MentorSkills skills={mentor?.skills?.split(',')} experience={mentor?.experience} />
        </section>
      </div>
    </AdminLayout>
  );
};

export default MentorProfile;
