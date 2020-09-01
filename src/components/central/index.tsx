import React from 'react';
import { CentralDiv, Title, Image } from './styles'
import Desconto from '../../assets/images/egg.png'

const Central: React.FC = () => {

  const handleClick = () => (

    console.log('Open Modal')

  )

  return (
    <CentralDiv onClick={() => handleClick}>

      <Title>
          Bem-vindo a central PokéPizza!
      </Title>
      <Image  src={Desconto}/>
    </CentralDiv>
  );
};

export default Central;
