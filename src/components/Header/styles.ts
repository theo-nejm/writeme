import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.5rem;

  border-bottom: 1px solid rgb(219, 219, 219);
  background: #fff;

  h1 {
    color: #fff;

    b {
      -webkit-text-stroke: 2px rgb(25, 25, 80);
    }
  }
`;
