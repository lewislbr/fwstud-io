import React from 'react';
import { injectIntl, Link } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import MainHeading from '../elements/MainHeading';
import BodyText from '../elements/BodyText';
import Button from '../elements/Button';

function NotFoundPage({ intl }) {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <MainHeading>{intl.formatMessage({ id: 'notfound_title' })}</MainHeading>
      <BodyText>
        {intl.formatMessage({ id: 'notfound_text' })}{' '}
        <span role="img" aria-label="duh">
          😓
        </span>
      </BodyText>
      <Link to="/">
        <Button>{intl.formatMessage({ id: 'notfound_button' })}</Button>
      </Link>
    </Layout>
  );
}

export default injectIntl(NotFoundPage);
