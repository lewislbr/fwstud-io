import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';

import { Button, Head, Heading1, Layout, TextBody } from '../components';

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
