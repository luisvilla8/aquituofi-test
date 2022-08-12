import React from "react";
import { BackgroundModal, ModalStyled } from "../styled-components";

export const Modal = ({ children }) => {

  return (
    <BackgroundModal>
      <ModalStyled>
        {children}
      </ModalStyled>
    </BackgroundModal>
  );

}
