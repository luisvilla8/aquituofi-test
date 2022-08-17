import styled from "styled-components";

export const PageTitle = styled.h1`
  font-weight: 900;
  font-size: clamp(2rem, 12vw, 5.5rem);
  line-height: 80%;
  background: linear-gradient(270.14deg, #09240c 0.12%, #2fb43c 113.07%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    max-width: clamp(5rem, 50vw , 25rem);
  }
`;
