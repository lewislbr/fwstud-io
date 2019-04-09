import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../2-components/Layout';
import SEO from '../2-components/SEO';
import MainHeading from '../1-elements/MainHeading';
import BodyText from '../1-elements/BodyText';
import fwstudio from '../images/fw-studio.gif';
import SecondaryHeading from '../1-elements/SecondaryHeading';
import Button from '../1-elements/Button';

const ImageUs = styled.img`
  margin: 0 auto 3vh auto;
`;

const BodyTextWithMarginBottom = styled(BodyText)`
  margin-bottom: 15vh;
`;

function Nosotros() {
  return (
    <Layout>
      <SEO
        title="FW Studio"
        keywords={[`diseño gráfico`, `diseño web`, `branding`, `fotografía`]}
      />
      <MainHeading>Nosotros</MainHeading>
      <BodyText>
        Hola, somos María y Luis, una pareja de creativos de Mallorca.
      </BodyText>
      <ImageUs src={fwstudio} alt="fw studio" />
      <BodyTextWithMarginBottom>
        Lo que hacemos es simple: diseñamos aquello que conecta tu marca o
        empresa con tu audiencia o clientes. Puede ser algo tangible como un
        color o algo intangible como la experiencia de usar una web. Cualquier
        detalle cuenta.
        <br />
        <br />
        La correcta aplicación de una tipografía o el número de clicks
        necesarios para llegar a una acción influyen en la percepción que los
        usuarios tienen de una marca. Y queremos hacer que sea lo más positiva
        posible.
        <br />
        <br />
        Para conseguir eso usamos el diseño gráfico y el branding, de lo que se
        encarga María, y el diseño web y la fotografía, de lo que encarga Luis.
        <br />
        <br />
        Previamente hemos desempeñado trabajos relacionados con el sector en
        diversas empresas y de manera autónoma hasta que hemos decidido empezar
        este proyecto en común.
      </BodyTextWithMarginBottom>
      <SecondaryHeading>¿Tienes algún proyecto en mente?</SecondaryHeading>
      <Link to="/contacto/">
        <Button>Hablemos</Button>
      </Link>
    </Layout>
  );
}

export default Nosotros;
