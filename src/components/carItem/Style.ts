import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
`;

const ItemLeftSide = styled.div`
  border: 1px solid red;
`;
const ItemRightSide = styled.div`
  border: 1px solid blue;
`;

const S = {
  Container,
  ItemLeftSide,
  ItemRightSide,
};

export default S;
