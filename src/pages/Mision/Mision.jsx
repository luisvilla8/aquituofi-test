import { Image } from "../../components";
import {
  PageTitle,
  PageText,
  PageButton,
  PageLayout,
  PageContent,
} from "../../styled-components";

export const Mision = () => {
  return (
    <PageLayout>
      <PageTitle>NUESTRA MISIÓN</PageTitle>
      <PageContent>
        <PageText>
          Ser la herramienta digital de independientes, freelancers, y a las
          micro y pequeñas empresas para entregar aquel espacio de trabajo
          físico más útil a través de un sistema de alquiler de espacios físicos
          de una forma FLEXIBLE, RÁPIDA, BAJO DEMANDA, SIMPLE y SEGURA. Además
          con conocimiento de las condiciones ambientales monitoreadas en tiempo
          real. Así mismo lo pondrá en contactó con otras empresas de intereses
          comunes que colaboren en llevarlo al siguiente nivel. Esto es posible
          gracias al uso de software IA y hardware iOT. Mientras hacemos esto
          nos preocupamos por los aspectos sociales y medio ambientales del
          entorno en el que nos movemos. Finalmente creamos un clima laboral de
          excelencia manteniendo un bienestar financiero saludable para nuestros
          accionistas.
          <PageButton>COMENZAR</PageButton>
        </PageText>
        <Image />
      </PageContent>
    </PageLayout>
  );
};
