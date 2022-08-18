import { Image } from "../../components";
import {
  PageTitle,
  PageText,
  PageButton,
  PageLayout,
  PageContent,
} from "../../styled-components";

export const Vision = () => {
  return (
    <PageLayout>
      <PageTitle>NUESTRA VISIÓN</PageTitle>
      <PageContent>
        <PageText>
          Nuestra Visión al 2023 es ser la herramienta digital más útil en
          ayudar a las los independientes, freelancers y a las micro y pequeñas
          empresas a llegar al siguiente nivel a través de la creación de una
          comunidad con valores, teniendo como medio las oficinas.
          <PageButton>COMENZAR</PageButton>
        </PageText>
        <Image />
      </PageContent>
    </PageLayout>
  );
};
