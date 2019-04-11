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
      <Button>
        <a href="mailto:info@fwstud.io">info@fwstud.io</a>
      </Button>
      <BodyText>{intl.formatMessage({ id: 'contact_text3' })}</BodyText>
      <Button>
        <a href="tel:687131061">687 131 061</a>
      </Button>
    </Layout>
  );
}

export default injectIntl(Contacto);
