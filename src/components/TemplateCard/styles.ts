import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  height: 30rem;
  width: 20rem;
  border: 1px solid rgb(219, 219, 219);
  background: #fff;
  border-radius: 0.5rem;
  transition: 0.2s cubic-bezier(1,.33,.55,.44);

  img {
    width: 20rem;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding: 0 1.25rem;
    gap: 1rem;
    line-height: 1.5rem;

    a {
      padding: 0.5rem 1.5rem;
      border: none;
      cursor: pointer;
      border-radius: 0.25rem;
      border: 1px solid #00acee;
      background: #00acee;
      transition: all 0.3s ease-in-out;

      span {
        font-weight: bold;
        font-size: 0.9rem;
        color: rgb(250, 250, 250);
      }

      &:hover {
        background: none;

        span {
          color: #00acee;
        }
      }
    }
  }

  &:hover {
    transform: scale(1.0175);
    box-shadow: 0 0 10px rgba(219, 219, 219, .25);
  }
}
`;
