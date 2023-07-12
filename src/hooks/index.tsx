import { useEffect } from 'react';

const useBeforeUnload = (fn: () => void) => {
  useEffect(() => {
    const onUnload = () => fn();

    window.addEventListener('beforeunload', onUnload);

    return () => window.removeEventListener('beforeunload', onUnload);
  }, [fn]);
};

export default useBeforeUnload;
