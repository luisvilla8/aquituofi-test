import React from "react";
import { BackgroundModal, ModalStyled } from "../styled-components";

export const Modal = ({ children, isOpen }) => {

  if( !isOpen ) return <></>

  return (
    <BackgroundModal>
      <ModalStyled>
        {children}
      </ModalStyled>
    </BackgroundModal>
  );

}
