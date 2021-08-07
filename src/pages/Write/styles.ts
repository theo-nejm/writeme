import styled from 'styled-components';

export const Container = styled.div`
  .write-container {
    margin-top: 5.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h2 {
      text-align: center;
    }

    .write-wrapper {
      background: #fff;
      padding: 1.5rem;
      width: 60vw;
      height: 70vh;
      border: 1px solid rgb(219, 219, 219);
      border-radius: 0.5rem;
      overflow: auto;

      h3 {
        text-align: center;
        padding: 0.5rem 0 1.5rem;
      }

      form {
        display: flex;
        flex-flow: nowrap column;

        textarea,
        input {
          margin-bottom: 1rem;
          margin-top: 0.25rem;
          outline: none;
          border: 1px solid rgb(219, 219, 219);
          border-radius: 0.25rem;
          transition: border 0.2s linear;

          &:focus {
            border: 1px solid #00acee;
          }
        }

        input {
          padding: 0 0.5rem;
          height: 2rem;
        }

        textarea {
          padding: 0.25rem 0.5rem;
          resize: vertical;
          height: 4rem;
        }
      }
    }
  }
`;
