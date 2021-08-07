import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .page-description-container {
    padding-top: 4rem;

    .description {
      font-size: 1.35rem;
      text-align: center;
      margin-top: 2rem;
    }
  }

  .choose-templates {
    display: flex;

    width: 100vw;
    align-items: center;
    justify-content: space-evenly;

    .template-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

      height: 30rem;
      width: 20rem;
      border: 1px solid rgb(219, 219, 219);
      background: #fff;
      border-radius: 0.5rem;
      transition: 0.2s linear;

      img {
        width: 20rem;
      }

      p {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;

        span {
          padding: 0.5rem 1.5rem;
          border: none;
          cursor: pointer;
          border-radius: 0.25rem;
          border: 1px solid #00acee;
          background: #00acee;
          transition: all 0.3s ease-in-out;

          a {
            font-weight: bold;
            font-size: 0.9rem;
            color: rgb(250, 250, 250);
          }

          &:hover {
            background: none;

            a {
              color: #00acee;
            }
          }
        }
      }

      &:hover {
        transform: scale(1.0175);
      }
    }
  }
`;
