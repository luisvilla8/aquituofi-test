import styled from "styled-components";

export const CoverStyled = styled.picture`
  display: flex;
  position: relative;
  height: 67vw;
  min-height: 18rem;
  max-height: 25rem;
  img {
    object-fit: cover;
    margin: 0 auto;
  }
  &::after {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background-color: var(--textColor);
    background: linear-gradient(#000, transparent);
    opacity: .5;
    position: absolute;
  }
`;