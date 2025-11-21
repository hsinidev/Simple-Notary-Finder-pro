
import React from 'react';
import Layout from './components/Layout';
import NotaryFinderTool from './components/NotaryFinderTool';
import SeoArticle from './components/SeoArticle';

const App: React.FC = () => {
  return (
    <Layout>
      <NotaryFinderTool />
      <SeoArticle />
    </Layout>
  );
};

export default App;
