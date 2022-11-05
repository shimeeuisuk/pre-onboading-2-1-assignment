import React from 'react';
import S from './Style';

interface Props {
  text: string;
  mode: 'BLACK' | 'GREY';
}

interface OptionType {
  BLACK: {
    bgcolor: string;
    ftcolor: string;
  };
  GREY: {
    bgcolor: string;
    ftcolor: string;
  };
}

const ColorOptions: OptionType = {
  BLACK: {
    bgcolor: '#000000',
    ftcolor: '#FFFFFF',
  },
  GREY: {
    bgcolor: '#D9D9D9',
    ftcolor: '#000000',
  },
};

const TagButton = ({ text, mode }: Props) => {
  const { bgcolor, ftcolor } = ColorOptions[mode];

  return (
    <S.Container bgcolor={bgcolor} ftcolor={ftcolor}>
      {text}
    </S.Container>
  );
};

export default TagButton;
