import { Image } from "../../components";
import {
  PageTitle,
  PageText,
  PageButton,
  PageLayout,
  PageContent,
} from "../../styled-components";

export const Proposito = () => {
  return (
    <PageLayout>
      <PageTitle>NUESTRO PROPOSITO</PageTitle>
      <PageContent>
        <PageText>
          Nacimos con el propósito de brindar un servicio rápido y eficaz a
          aquellos emprendedores en surgimiento que necesitan de un espacio
          útil, que les facilite el logro de sus metas.
          Nacimos con el propósito de brindar un servicio rápido y eficaz a
          aquellos emprendedores en surgimiento que necesitan de un espacio
          útil, que les facilite el logro de sus metas.
          <PageButton>COMENZAR</PageButton>
        </PageText>
        <Image />
      </PageContent>
    </PageLayout>
  );
};
