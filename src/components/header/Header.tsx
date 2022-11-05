import React from 'react';
import S from './Style';

interface Props {
  text: string;
}

const Header = ({ text }: Props) => {
  return <S.Container>{text}</S.Container>;
};

export default Header;
