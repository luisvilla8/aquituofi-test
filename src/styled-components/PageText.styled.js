import styled from "styled-components";

export const PageText = styled.p`
  font-size: clamp(.8rem, 2vw, 1rem);
  color: var(--textColor);
  @media (min-width: 768px) {
    max-width: 50%;
    display: inline-block;
  }
`