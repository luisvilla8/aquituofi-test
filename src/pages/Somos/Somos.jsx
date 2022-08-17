import { Image } from "../../components";
import {
  PageTitle,
  PageText,
  PageButton,
  PageLayout,
  PageContent,
} from "../../styled-components";

export const Somos = () => {
  return (
    <PageLayout>
      <PageTitle>QUIÉNES SOMOS</PageTitle>
      <PageContent>
        <PageText>
          Somos una herramienta digital que ayuda a los independientes,
          freelancers y a las micro y pequeñas empresas a llevar su negocio al
          siguiente nivel, entregando un sistema de alquiler de espacios físicos
          de una forma FLEXIBLE, RÁPIDA, BAJO DEMANDA, SIMPLE y SEGURA. Además
          con conocimiento de las condiciones ambientales monitoreadas en tiempo
          real. Así mismo lo pondrá en contactó con otras empresas de intereses
          comunes que colaboren en llevarlo al siguiente nivel.
          <PageButton>COMENZAR</PageButton>
        </PageText>
        <Image />
      </PageContent>
    </PageLayout>
  );
};
