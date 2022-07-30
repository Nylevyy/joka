import React from 'react';

import { MainPage } from 'containers/MainPage';
import { headerContent } from 'content';
import { Layout } from 'components/Layout';

function App() {
  return (
    <Layout headerContent={headerContent}>
      <MainPage />
    </Layout>
  );
}

export default App;
