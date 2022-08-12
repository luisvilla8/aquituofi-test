import React from 'react'
import { Button, Input } from '../../components';
import { Cover } from "../components";
import { Content, CoverButton, CoverInputGroup } from "../styled-components";

export const Home = () => {
  return (
    <Cover>
      <Content>
        <h1>ENCUENTRA TU ESPACIO</h1>
        <h3>rápido, simple y seguro</h3>
      </Content>
      <CoverInputGroup>
        <Input />
        <CoverButton>BUSCAR</CoverButton>
      </CoverInputGroup>
    </Cover>
  );
};
