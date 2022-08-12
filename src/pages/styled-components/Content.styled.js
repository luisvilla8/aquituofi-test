import styled from "styled-components";

export const Content = styled.div`
  position: absolute;
  z-index: 1;
  color: var(--titleColor);
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  width: 100%;
  h1 {
    margin: 0 auto;
    font-weight: 900;
    font-size: clamp(2rem,7vw,4.5rem);
    padding: 0 clamp(1rem, 12vw, 8rem);
  }
`