import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import Head from '../components/Head';
import Heading1 from '../elements/Heading1';
import TextBody from '../elements/TextBody';
import Button from '../elements/Button';

function Contact({ intl }) {
  return (
    <Layout>
      <Head title={intl.formatMessage({ id: 'contact_title' })} />
      <Heading1>{intl.formatMessage({ id: 'contact_title' })}</Heading1>
      <TextBody>
        {intl.formatMessage({ id: 'contact_text1' })}
        <br />
        <br />
        {intl.formatMessage({ id: 'contact_text2' })}
      </TextBody>
      <a href="mailto:info@fwstud.io">
        <Button>info@fwstud.io</Button>
      </a>
    </Layout>
  );
}

export default injectIntl(Contact);
