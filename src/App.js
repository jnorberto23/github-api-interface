import React from 'react';
import { Layout, Profile, Repositories } from './components/';
import { ResetCSS } from './global/resetCSS';

function App() {
  return (
    <main>
      <ResetCSS/>
      <Layout>
      <Profile />
      <Repositories/>
      </Layout>
    </main>

  );
}

export default App;
