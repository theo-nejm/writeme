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
  }
}
`;
