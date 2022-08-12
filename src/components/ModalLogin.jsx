import React from "react";
import {
  CloseButton,
  ModalButton,
  ModalHeader,
  Title,
} from "../styled-components";
import { RiCloseFill } from "react-icons/ri";
import { Modal, Input } from "."
import { useDispatch } from "react-redux";
import { closeModal } from "../redux/states";

export const ModalLogin = ({ isOpen }) => {

  const dispatch = useDispatch()

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        <Title>Bienvenido a Aquituofi!</Title>
        <CloseButton onClick={() => dispatch(closeModal())}>
          <RiCloseFill />
        </CloseButton>
      </ModalHeader>
      <Input id="correo" type="email" inputType="modal">
        Email
      </Input>
      <Input id="contraseña" type="password" inputType="modal">
        Contraseña
      </Input>
      <ModalButton onClick={() => dispatch(closeModal())} color="acept">
        Iniciar Sesión
      </ModalButton>
    </Modal>
  );
};
