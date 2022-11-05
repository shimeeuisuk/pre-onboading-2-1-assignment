import styled from 'styled-components';

const Container = styled.button<{ bgcolor: string; ftcolor: string }>`
  padding: 8px;
  display: flex;
  width: 60px;
  height: 30px;
  border-radius: 1rem;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.ftcolor};
`;

const S = {
  Container,
};

export default S;
