import React from 'react';
import styled from 'styled-components';

import Layout from '../2-components/Layout';
import MainHeading from '../1-elements/MainHeading';
import BodyText from '../1-elements/BodyText';

const LinkOut = styled.a`
  text-decoration: underline;
`;

function TerminosYPrivacidad() {
  return (
    <Layout>
      <MainHeading>Términos y privacidad</MainHeading>
      <BodyText>
        Estos términos de uso y política de privacidad se aplican al sitio web
        www.fwstud.io.
        <br />
        <br />
        <br />
        <br />
        <strong>Condiciones generales</strong>
        <br />
        <br />
        Todos los contenidos, incluidos fotos, videos, textos, diseños, marcas
        comerciales, logotipos o cualquier otro elemento susceptible de
        protección por la legislación de propiedad intelectual o industrial, que
        están accesibles en este sitio web, son de nuestra propiedad o de sus
        legítimos titulares y tienen expresamente todos los derechos sobre los
        mismos.
        <br />
        <br />
        Usted acepta no reproducir, duplicar, copiar, vender, revender o
        explotar ningún producto o parte del sitio web, ni transmitirle ningún
        malware o virus.
        <br />
        <br />
        <br />
        <br />
        <strong>Información de los usuarios</strong>
        <br />
        <br />
        Cuando visita este sitio web, cierta información anónima sobre su
        dispositivo, incluida información sobre su navegador web, dirección IP,
        zona horaria y algunas de las cookies que están instaladas en su
        dispositivo, se recopila automáticamente a través de cookies (para
        obtener más información sobre las cookies, visite
        <LinkOut href="www.allaboutcookies.org">
          {' '}
          www.allaboutcookies.org
        </LinkOut>
        ).
        <br />
        <br />
        Además, a medida que navega por el sitio web, también se recopila
        información sobre las páginas web individuales que ve, los sitios web o
        los términos de búsqueda que lo remiten al sitio web y la información
        sobre cómo interactúa con el sitio web.
        <br />
        <br />
        Básicamente, esta información es para ayudar a detectar posibles riesgos
        y fraudes, y más generalmente para mejorar y optimizar el sitio web (por
        ejemplo, generando análisis sobre cómo los clientes navegan e
        interactúan con el sitio web, y para evaluar el éxito de las campañas de
        marketing y publicidad).
        <br />
        <br />
        Fin del rollo legal.
      </BodyText>
    </Layout>
  );
}

export default TerminosYPrivacidad;
