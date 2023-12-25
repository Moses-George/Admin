import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const useApiToast = ({ data, loading, success, error }, { loadingMsg, successMsg }) => {
  const [id, setId] = useState(undefined);

  useEffect(() => {
    if (loading && !error) {
      setId(toast.loading(loadingMsg));
    }
    if (error) {
      toast.update(id, { render: error, type: 'error', isLoading: false, autoClose: 3000 });
    }
    if (success) {
      toast.update(id, {
        render: successMsg,
        type: 'success',
        isLoading: false,
        autoClose: 1000
      });
    }
  }, [loading, success, data, error]);
};

export default useApiToast;
