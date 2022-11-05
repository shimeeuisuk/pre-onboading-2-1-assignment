import React from 'react';
import { useLocation } from 'react-router-dom';
import S from './Style';
import Header from '../header/Header';

interface Props {
  children: React.ReactElement;
}

const Layout = ({ children }: Props) => {
  const location = useLocation();

  const Text = (): string => {
    if (location.pathname === '/') return '전체차량';
    if (location.pathname.includes('/detail')) return '차량상세';
    return '';
  };

  return (
    <S.Container>
      <Header text={Text()} />
      {children}
    </S.Container>
  );
};

export default Layout;
