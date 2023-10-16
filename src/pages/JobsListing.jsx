import { useState } from 'react';
import { Work } from '@mui/icons-material';
import AdminLayout from '../components/layout/AdminLayout';
import JobCard from '../components/jobs/JobCard';
import useJobsFacade from '../facades/useJobsFacade';
import { useEffect } from 'react';
import FilterBar from '../components/ui/FilterBar';
import { toast } from 'react-toastify';
// import { jobs } from '../utils/dummy';

const JobsListing = () => {
  const { jobs, fetchJobs, loading, error, success } = useJobsFacade();
  const [id, setId] = useState('');

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
          {jobs.map((job) => {
            const { id, company, postion, imageUrl, salary, description, category, location } = job;
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
              />
            );
          })}
        </section>
      </div>
    </AdminLayout>
  );
};

export default JobsListing;
