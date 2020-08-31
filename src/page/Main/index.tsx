import React from 'react';
import Banner from '../../components/banner';
import Header from '../../components/header';
import Central from '../../components/central';

import { Container } from '../../styles';

const Main: React.FC = () => {
  return (
    <Container>

        <Header />
        <Banner />
        {/* <Central /> */}
    </Container>
  );
};

export default Main;
