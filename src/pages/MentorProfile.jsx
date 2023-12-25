import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  AdminPanelSettings,
  AttachMoney,
  AvTimer,
  Badge,
  People,
  Reviews
} from '@mui/icons-material';
import ProfileBaseData from '../components/profile/ProfileBaseData';
import AdminLayout from '../components/layout/AdminLayout';
import MentorSkills from '../components/profile/MentorSkills';
import AchieveMentCard from '../components/AchievementCard';
import AchieveMentCardSkeleton from '../components/ui/skeleton-loaders/AchievemntCardSkeleton';
import useMembersFacade from '../facades/useMembersFacade';
import useAuth from '../hooks/useAuth';

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
      amount: `$${!price? 0 : price}`,
      icon: <AttachMoney className="text-white" sx={{ fontSize: '60px' }} />,
      bgColor: 'bg-lime-600',
      hover: 'hover:bg-lime-500'
    },
    {
      id: 'a1',
      title: 'Experience',
      amount: !experience ? 0 : experience,
      icon: <AttachMoney className="text-white" sx={{ fontSize: '60px' }} />,
      bgColor: 'bg-amber-500',
      hover: 'hover:bg-amber-600'
    }
  ];

  return achievements;
};

const MentorProfile = () => {
  const { mentorId } = useParams();

  const { fetchMentor, loading, success, error, members: member } = useMembersFacade();
  const { accessToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate('/', { replace: true });
    }
  }, [accessToken]);

  useEffect(() => {
    fetchMentor(mentorId);
  }, [mentorId]);

  const {
    id,
    firstName,
    initials,
    email,
    country,
    industry,
    experience,
    skills,
    bio,
    telNumber,
    userId,
    verified,
    price,
    How_help,
    image,
    job_title,
    social_link,
    why_mentoring
  } = member.length !== 0 && member[0];

  return (
    <AdminLayout header={firstName && firstName} icon={<Badge sx={{ fontSize: '50px' }} />}>
      <div className="lg:mx-6 space-y-6 w-full">
        <section className="flex flex-wrap gap-4">
          {getAchievements(experience, price).map((achievement, index) => { 
            const { title, amount, icon, bgColor, hover } = achievement;
            return loading || member.length === 0 ? (
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
          Id={id}
          name={firstName}
          initials={initials}
          industry={industry}
          job_title={job_title}
          bio={bio}
          why_mentoring={why_mentoring}
          how_help={How_help}
          telNumber={telNumber}
          email={email}
          verified={verified}
          country={country}
          image={image}
          member={member}
          loading={loading}
        />
        <section className="flex gap-6">
          <MentorSkills skills={skills?.split(',')} experience={experience} />
        </section>
      </div>
    </AdminLayout>
  );
};

export default MentorProfile;
