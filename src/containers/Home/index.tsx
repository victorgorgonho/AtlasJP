import React from 'react';

import './styles.scss';
import Header from '../../components/Header';
import AboutProject from '../../components/AboutProject';
import MapSearch from '../../components/MapSearch';
import SendMessage from '../../components/SendMessage';

const Home: React.FC = () => {
  return (
    <div className="main">
      <Header />
      <AboutProject />
      <MapSearch />
      <SendMessage />
    </div>
  );
}

export default Home;