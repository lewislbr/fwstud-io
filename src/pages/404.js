import React from 'react';
import { injectIntl, Link } from 'gatsby-plugin-intl';

import Layout from '../2-components/Layout';
import SEO from '../2-components/SEO';

import MainHeading from '../1-elements/MainHeading';
import BodyText from '../1-elements/BodyText';
import Button from '../1-elements/Button';

function NotFoundPage({ intl }) {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <MainHeading>{intl.formatMessage({ id: 'notfound_title' })}</MainHeading>
      <BodyText>{intl.formatMessage({ id: 'notfound_text' })}</BodyText>
      <Link to="/">
        <Button>{intl.formatMessage({ id: 'notfound_button' })}</Button>
      </Link>
    </Layout>
  );
}

export default injectIntl(NotFoundPage);
