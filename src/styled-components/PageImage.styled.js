import styled from "styled-components";

export const PageImage = styled.picture`
  display: flex;
  position: relative;
  width: clamp(15rem, 40vw, 20rem);
  margin: 2rem auto;
  position: relative;
  img {
    z-index: 1;
    border-radius: 1rem;
    width: 100%;
    object-fit: contain;
  }
  div {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    position: absolute;  
    z-index: 0;
  }
  div:nth-child(1) {
    background-color: #09240C;
    top: -1rem;
    right: -1rem;
  }
  div:nth-child(2) {
    background-color: #2FB43C;
    top: 1rem;
    left: -1rem;
  }
  @media (min-width: 768px) {
    max-width: 40%;
    display: inline-flex;
  }
`;
