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
    background: linear-gradient(#000, transparent);
    opacity: 0.5;
    position: absolute;
  }
`;
export const CoverInputGroup = styled.div`
  position: absolute;
  z-index: 2;
  bottom: -6rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const CoverButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  display: block;
  margin: 1rem auto 0;
  padding: 1rem 3rem;
  border-radius: .5rem;
  background: linear-gradient(90deg, #52C05D, #09240C);
  color: var(--titleColor);
  font-weight: 800;
  letter-spacing: 2px;
  transition: box-shadow var(--transition), transform var(--transition);
  :hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 30px 5px rgba(47, 180, 60, 0.5);
  }
`