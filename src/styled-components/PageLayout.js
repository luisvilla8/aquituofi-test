import styled from "styled-components";

export const PageLayout = styled.section`
  margin-bottom: var(--paddingXMD);
  @media (min-width: 768px) {
    margin: var(--paddingX);
  }
`

export const PageContent = styled.section`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    column-gap: 2rem;
    margin-bottom: 3rem;
  }
`