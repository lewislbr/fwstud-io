import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import Head from '../components/Head';
import MainHeading from '../elements/MainHeading';
import BodyText from '../elements/BodyText';
import Button from '../elements/Button';

function Contact({ intl }) {
  return (
    <Layout>
      <Head title={intl.formatMessage({ id: 'contact_title' })} />
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

export default injectIntl(Contact);
