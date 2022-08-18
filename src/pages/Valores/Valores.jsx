import { Image } from "../../components";
import {
  PageTitle,
  PageText,
  PageButton,
  PageLayout,
  PageContent,
} from "../../styled-components";

export const Valores = () => {
  return (
    <PageLayout>
      <PageTitle>NUESTROS VALORES</PageTitle>
      <PageContent>
        <PageText>
          Ser empáticos con los usuarios a través de interacciones como las
          reacciones en redes sociales, encuestas y entrevistas. Impulsar la
          “Mentalidad de crecimiento” en nuestros colaboradores para que se
          esfuercen en superar cualquier limitación y mantenerse firme ante
          cualquier desafío laboral o personal. Trabajar con Propósito, ¿Cómo?
          conectando nuestras pasiones individuales más profundas con la visión
          y misión de aquitofi. Desarrollamos nuestras actividades con
          INTEGRIDAD tanto para nuestros colaboradores como para los usuarios,
          formando así lazos de confianza.
          <PageButton>COMENZAR</PageButton>
        </PageText>
        <Image />
      </PageContent>
    </PageLayout>
  );
};
