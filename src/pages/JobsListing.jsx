import { useState } from 'react';
import { Work } from '@mui/icons-material';
import AdminLayout from '../components/layout/AdminLayout';
import JobCard from '../components/jobs/JobCard';
import useJobsFacade from '../facades/useJobsFacade';
import { useEffect } from 'react';
import FilterBar from '../components/ui/FilterBar';
import { toast } from 'react-toastify';
import { Pagination } from 'antd';
import JobCardSkeleton from '../components/ui/skeleton-loaders/JobCardSkeleton';
// import { jobs } from '../utils/dummy';

const JobsListing = () => {
  const { jobs, fetchJobs, loading, error, success } = useJobsFacade();
  const [id, setId] = useState('');
  console.log(error)

  useEffect(() => {
    if (loading) {
      setId(toast.loading('Fetching available jobs...'));
    }
    if (error) {
      toast.update(id, { render: error, type: 'error', isLoading: false, autoClose: 4000 });
    }
    if (success) {
      toast.update(id, {
        render: 'UI updated successfully!',
        type: 'success',
        isLoading: false,
        autoClose: 1000
      });
    }
  }, [loading, success, jobs]);

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <AdminLayout
      header="Jobs Listing"
      icon={<Work className="text-slate-800" sx={{ fontSize: '40px' }} />}>
      <div className="lg:mx-6 space-y-6 w-full">
        <FilterBar path="/jobs-listing/new-job" btnText="New Job" />
        <section className="flex flex-wrap gri grid-cols- gap-4">
          {loading
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((card) => <JobCardSkeleton key={card} />)
            : jobs.map((job) => {
                const {
                  id,
                  company,
                  postion,
                  imageUrl,
                  salary,
                  description,
                  category,
                  location,
                  date
                } = job;
                return (
                  <JobCard
                    key={id}
                    id={id}
                    company={company}
                    position={postion}
                    imageUrl={imageUrl}
                    salary={salary}
                    description={description}
                    category={category}
                    location={location}
                    datePosted={date}
                  />
                );
              })}
        </section>
        <Pagination defaultCurrent={1} total={300} />
      </div>
    </AdminLayout>
  );
};

export default JobsListing;
