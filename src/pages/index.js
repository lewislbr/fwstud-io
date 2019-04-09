import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../2-components/Layout';
import SEO from '../2-components/SEO';

import MainHeading from '../1-elements/MainHeading';
import SecondaryHeading from '../1-elements/SecondaryHeading';
import Button from '../1-elements/Button';
import graphicdesign from '../images/graphic-design.png';
import webdesign from '../images/web-design.png';
import branding from '../images/branding.png';
import photography from '../images/photography.png';

const HeroText = styled(MainHeading)`
  margin-bottom: 25vh;

  @media (max-width: 849px) {
    margin-bottom: 17vh;
  }
`;

const HeroTextSpan = styled.span`
  background-image: linear-gradient(
    45deg,
    hsl(351, 100%, 63%),
    hsl(32, 100%, 54%)
  );
  padding: 0px 7px 2px 6px;
`;

const Services = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

const Service = styled.div`
  width: 48.5%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 2vw;
  margin-bottom: 3%;
  overflow: hidden;

  border-radius: 5px;
  -webkit-box-shadow: 1px 1px 16px 5px hsla(0, 0%, 50%, 0.22);
  box-shadow: 1px 1px 16px 5px hsla(0, 0%, 50%, 0.22);

  @media (max-width: 849px) {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 4vw;
    margin-bottom: 3vh;
  }
`;

const ServiceImage = styled.img`
  height: 25vh;
  width: 25vh;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5%;
  margin-left: 10%;

  border: 2px solid var(--primary-color-light);

  @media (max-width: 849px) {
    height: 17vh;
    width: 17vh;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 2.5vh;
  }
`;

const ServiceDetails = styled.div`
  display: inline-block;
`;

const ServiceName = styled.h3`
  width: 100%;
  margin-bottom: 1vh;
  line-height: 1.5;

  font-size: 32px;
  background: -webkit-linear-gradient(
    45deg,
    hsl(351, 100%, 63%),
    hsl(32, 100%, 54%)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 849px) {
    font-size: 28px;
  }
`;

const Subservice = styled.h4`
  width: 100%;

  font-weight: 400;
  font-size: 19px;
  line-height: 1.4;
`;

const TextHome = styled.p`
  max-width: 28em;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15vh;

  font-size: 22px;
  line-height: 1.6;
  color: var(--primary-color-light);

  @media (max-width: 849px) {
    font-size: 19px;
  }
`;

function Index() {
  return (
    <Layout>
      <SEO
        title="FW Studio"
        keywords={[`diseño gráfico`, `diseño web`, `branding`, `fotografía`]}
      />
      <HeroText>
        Hola, somos FW, un estudio creativo en el que ayudamos a empresas y
        marcas a ser <HeroTextSpan>únicas</HeroTextSpan>.
      </HeroText>
      <SecondaryHeading>Cosas que hacemos</SecondaryHeading>
      <Services>
        <Service>
          <ServiceImage src={graphicdesign} alt="diseño gráfico" />
          <ServiceDetails>
            <ServiceName>Diseño Gráfico</ServiceName>
            <Subservice>Carteles</Subservice>
            <Subservice>Publicidad</Subservice>
            <Subservice>Packaging</Subservice>
            <Subservice>Libros y revistas</Subservice>
            <Subservice>Catálogos</Subservice>
            <Subservice>Ilustraciones</Subservice>
          </ServiceDetails>
        </Service>
        <Service>
          <ServiceImage src={webdesign} alt="diseño web" />
          <ServiceDetails>
            <ServiceName>Diseño Web</ServiceName>
            <Subservice>Experiencia de usuario (UX)</Subservice>
            <Subservice>Diseño de interfaces (UI)</Subservice>
            <Subservice>Desarrollo web</Subservice>
            <Subservice>Copywriting</Subservice>
            <Subservice>CMS</Subservice>
            <Subservice>E-commerce</Subservice>
          </ServiceDetails>
        </Service>
        <Service>
          <ServiceImage src={branding} alt="branding" />
          <ServiceDetails>
            <ServiceName>Branding</ServiceName>
            <Subservice>Estrategia de marca</Subservice>
            <Subservice>Diseño de logotipos</Subservice>
            <Subservice>Creación de marcas</Subservice>
            <Subservice>Presencia online y offline</Subservice>
            <Subservice>Sistemas de identidad</Subservice>
            <Subservice>Renovación de marcas</Subservice>
          </ServiceDetails>
        </Service>
        <Service>
          <ServiceImage src={photography} alt="fotografia" />
          <ServiceDetails>
            <ServiceName>Fotografía</ServiceName>
            <Subservice>Redes sociales</Subservice>
            <Subservice>Producto</Subservice>
            <Subservice>Publicidad</Subservice>
            <Subservice>Web</Subservice>
            <Subservice>Espacios</Subservice>
            <Subservice>Edición</Subservice>
          </ServiceDetails>
        </Service>
      </Services>
      <TextHome>
        Nuestro enfoque es simple y pragmático, juntando la estética y la
        funcionalidad, puesto que la una sin la otra no generan resultados.
        <br />
        <br />
        Queremos hacer de lo bueno, lo mejor 🔥.
      </TextHome>
      <SecondaryHeading>¿Tienes algún proyecto en mente?</SecondaryHeading>
      <Link to="/contacto/">
        <Button>Hablemos</Button>
      </Link>
    </Layout>
  );
}

export default Index;
