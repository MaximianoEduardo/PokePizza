import React from 'react';
import Logo from '../../assets/images/logo.png'
import {  HeaderDiv, Input  } from './styles'

const Header: React.FC = () => {
  return (
    
  <HeaderDiv>

      <img src={Logo} alt="Logo" />

      <Input  type='text' placeholder='O que vai pedir?' />

      {/* cart */}

  </HeaderDiv>


  );
};

export default Header;
