import React from 'react';
import TagButton from 'components/tag/TagButton';

const Category = () => {
  const segment = ['전체', '소형', '중형', '대형', 'SUV'];

  return;
  <>
    {segment.map(() => (
      <TagButton />
    ))}
  </>;
};

export default Category;
