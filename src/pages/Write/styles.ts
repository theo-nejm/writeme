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
      padding: 0 1.5rem 1.5rem;
      width: 50vw;
      height: 70vh;
      border: 1px solid rgb(219, 219, 219);
      border-radius: 0.5rem;
      overflow: auto;
      scroll-behavior: smooth;

      .write-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.5rem 2rem 1.5rem;
        background: #fff;

        border-bottom: 1px solid rgb(219, 219, 219);
        width: calc(100% + 3rem);
        margin-bottom: 1rem;
        margin-left: -1.5rem;

        h3 {
          text-align: center;

          span {
            color: #00acee;
            margin-left: 0.5rem;
          }
        }

        a {
          font-size: 1.1rem;
          letter-spacing: 0.05rem;
          position: relative;
          transition: 0.25s;

          &::after {
            content: '';
            height: 2px;
            width: 100%;
            bottom: -0.5rem;
            left: 0;
            transform: scale(0);
            background: #00acee;
            position: absolute;
            transition: 0.25s;
          }

          &:hover {
            color: #00acee;

            &::after {
              transform: scale(1);
            }
          }
        }
      }

      form {
        p {
          font-weight: 400;
          text-align: center;
          padding: 0.5rem 0 1rem;
        }

        display: flex;
        flex-flow: nowrap column;
        font-weight: 300;
        letter-spacing: 0.125rem;

        textarea,
        input {
          margin-bottom: 2rem;
          margin-top: 0.25rem;
          outline: none;
          border: 1px solid rgb(219, 219, 219);
          border-radius: 0.25rem;
          transition: border 0.2s linear;
          letter-spacing: 0.05rem;
          font-size: 0.8rem;
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
          min-height: 3rem;
          height: 4rem;
        }

        .submit-btn-wrapper {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          button {
            height: 2.4rem;
            width: 12rem;
            padding: 0.5rem 0;
            background: none;
            border: 2px solid #00acee;
            border-radius: 0.25rem;
            color: #00acee;

            overflow: hidden;
            position: relative;
            transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);
            text-transform: uppercase;
            z-index: 1;

            &::before {
              content: '';
              height: 100%;
              width: 100%;
              background: #00acee;
              position: absolute;
              top: 0;
              left: 0;
              transform: scaleX(0);

              z-index: -1;
              transition: 0.3s cubic-bezier(0.42, 0, 0.58, 1);
            }

            &:hover {
              color: #fff;

              &:hover::before {
                transform: scale(1);
              }
            }
          }

          p#success-text {
            text-decoration: none;
            font-weight: bold;
            color: #44ff44 !important;
          }
        }
      }
    }
  }
`;
