import styled from 'styled-components';

type PropsTypes = {
  isShown: boolean;
};

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background: rgba(0, 0, 0, 0.5);
`;
