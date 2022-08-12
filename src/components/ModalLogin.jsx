import React from "react";
import {
  CloseButton,
  ModalButton,
  ModalHeader,
  Title,
} from "../styled-components";
import { RiCloseFill } from "react-icons/ri";
import { Modal, Input, Button } from "."

export const ModalLogin = () => {

  const esTemporal = () => {
    console.log("cambia esta función")
  }
  
  return (
    <Modal>
      <ModalHeader>
        <Title>Bienvenido a Aquituofi!</Title>
        <CloseButton onClick={() => console.log("cerrar modal")}>
          <RiCloseFill />
        </CloseButton>
      </ModalHeader>
      <Input id="correo" type="email" inputType="modal">
        Email
      </Input>
      <Input id="contraseña" type="password" inputType="modal">
        Contraseña
      </Input>
      <ModalButton onClick={esTemporal} color="acept">
        Iniciar Sesión
      </ModalButton>
    </Modal>
  );
};
