import React from 'react';

import Layout from '../2-components/Layout';
import SEO from '../2-components/SEO';
import MainHeading from '../1-elements/MainHeading';
import BodyText from '../1-elements/BodyText';
import Button from '../1-elements/Button';

function Contacto() {
  return (
    <Layout>
      <SEO
        title="FW Studio"
        keywords={[`diseño gráfico`, `diseño web`, `branding`, `fotografía`]}
      />
      <MainHeading>Contacto</MainHeading>
      <BodyText>
        Para hablar de cualquier proyecto en el que necesites ayuda o si quieres
        preguntarnos algo, no dudes en contactar con nosotros.
        <br />
        <br />
        Puedes enviarnos un email a:
      </BodyText>
      <Button>
        <a href="mailto:info@fwstud.io">info@fwstud.io</a>
      </Button>
      <BodyText>O llamarnos al:</BodyText>
      <Button>
        <a href="tel:687131061">687 131 061</a>
      </Button>
    </Layout>
  );
}

export default Contacto;
