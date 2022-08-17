import styled from "styled-components";

export const PageButton = styled.button`
  padding: 0.5rem 2rem;
  margin: 1rem 0;
  background: linear-gradient(
    87.21deg,
    #74cd7d 0%,
    #52c05d 0.01%,
    #09240c 100%,
    #09240c 100%
  );
  border: none;
  border-radius: 6px;
  color: var(--bgColor);
  display: block;
  font-weight: 800;
  letter-spacing: 2px;
  cursor: pointer;
  transition: box-shadow var(--transition);
  :hover {
    box-shadow: 0px 0px 15px 0px #74cd7d;
  }
  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: 2rem;
  }
`;
