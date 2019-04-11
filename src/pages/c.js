import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';

import Layout from '../2-components/Layout';
import SEO from '../2-components/SEO';
import MainHeading from '../1-elements/MainHeading';
import BodyText from '../1-elements/BodyText';
import Button from '../1-elements/Button';

function Contacto({ intl }) {
  return (
    <Layout>
      <SEO title="FW Studio" />
      <MainHeading>{intl.formatMessage({ id: 'contact_title' })}</MainHeading>
      <BodyText>
        {intl.formatMessage({ id: 'contact_text1' })}
        <br />
        <br />
        {intl.formatMessage({ id: 'contact_text2' })}
      </BodyText>
      <a href="mailto:info@fwstud.io">
        <Button>info@fwstud.io</Button>
      </a>
      <BodyText>{intl.formatMessage({ id: 'contact_text3' })}</BodyText>
      <a href="tel:687131061">
        <Button>687 131 061</Button>
      </a>
    </Layout>
  );
}

export default injectIntl(Contacto);
