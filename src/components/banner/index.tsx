import React from 'react';
import Pokemon from '../../assets/images/logo.png'

import { BannerDiv, ButtonOrder, Title, ImageBanner } from './styles'

const Banner: React.FC = () => {
  return (

    <BannerDiv>

      <ImageBanner src={Pokemon} alt='Pokemon'/>

      <Title>
        Pizzas e salgados - Você encontra aqui !!
      </Title>

      <ButtonOrder>
        Quero pedir
      </ButtonOrder>

    </BannerDiv>

  );
};

export default Banner;
