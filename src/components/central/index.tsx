import React from 'react';
import { CentralDiv, Title, Description, Image } from './styles'
import Desconto from '../../assets/images/egg.png'

const Central: React.FC = () => {

  const handleClick = () => (

    console.log('Open Modal')

  )

  return (
    <CentralDiv>

      <Title>
          Bem-vindo a central PokéPizza!
      </Title>

      <Description onClick={( handleClick )}>
        Primeira vez que compra?? <br/>
        <Image src={Desconto}/>
      </Description>

    </CentralDiv>
  );
};

export default Central;
