import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterStyled = styled.footer`
  padding: var(--paddingY) var(--paddingX);
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  margin-top: 20rem;
  p {
    font-style: italic;
  }
  @media (min-width: 768px) {
    padding: var(--paddingYMD) var(--paddingXMD);
  }
`;

export const LinkGroup = styled.ul`
  margin: 0.5rem;
  li {
    margin: 0.5rem 0;
  }
  @media (min-width: 768px) {
    &:nth-child(1) {
      margin-right: 4rem;
    }
  }
`;

export const LinkStyled = styled(Link)`
  font-size: 0.8rem;
  color: var(--textColor);
  &:hover {
    font-weight: 600;
  }
`;
