import React from 'react';

import './styles.scss';
import Header from '../../components/Header';
import AboutProject from '../../components/AboutProject';
import MapSearch from '../../components/MapSearch';

const Home: React.FC = () => {
  return (
    <div className="main">
      <Header />
      <AboutProject />
      <MapSearch />
    </div>
  );
}

export default Home;