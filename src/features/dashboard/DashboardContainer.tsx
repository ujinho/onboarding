import { memo, Suspense } from 'react';
import { Provider as HttpProvider } from 'use-http';
import Spinner from '../../ui-kit/Spinner/Spinner';

import Dashboard from './Dashboard';

const fetchProviderOptions = {
  suspense: true,
};

const DashboardContainer = () => {
  return (
    <HttpProvider
      url="https://jsonplaceholder.typicode.com"
      options={fetchProviderOptions}
    >
      <Suspense fallback={<Spinner loading />}>
        <Dashboard />
      </Suspense>
    </HttpProvider>
  );

  return <></>;
};

export default memo(DashboardContainer);
