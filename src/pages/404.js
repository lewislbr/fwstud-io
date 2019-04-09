import React from 'react';
import { Link } from 'gatsby';

import Layout from '../2-components/Layout';
import SEO from '../2-components/SEO';

import MainHeading from '../1-elements/MainHeading';
import BodyText from '../1-elements/BodyText';
import Button from '../1-elements/Button';

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <MainHeading>NOT FOUND</MainHeading>
      <BodyText>
        You just hit a route that doesn&#39;t exist... the sadness.
      </BodyText>
      <Link to="/">
        <Button>Go home</Button>
      </Link>
    </Layout>
  );
}

export default NotFoundPage;
