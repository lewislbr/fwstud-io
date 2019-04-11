import React from 'react';
import styled from 'styled-components';
import { injectIntl, Link } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import Head from '../components/Head';
import MainHeading from '../elements/MainHeading';
import BodyText from '../elements/BodyText';
import fwstudio from '../images/fw-studio.gif';
import SecondaryHeading from '../elements/SecondaryHeading';
import Button from '../elements/Button';

const ImageUs = styled.img`
  margin: 0 auto 3vh auto;
`;

const BodyTextWithMarginBottom = styled(BodyText)`
  margin-bottom: 15vh;
`;

function About({ intl }) {
  return (
    <Layout>
      <Head title={intl.formatMessage({ id: 'about_title' })} />
      <MainHeading>{intl.formatMessage({ id: 'about_title' })}</MainHeading>
      <BodyText>{intl.formatMessage({ id: 'about_text1' })}</BodyText>
      <ImageUs src={fwstudio} alt="fw studio" />
      <BodyTextWithMarginBottom>
        {intl.formatMessage({ id: 'about_text2' })}
        <br />
        <br />
        {intl.formatMessage({ id: 'about_text3' })}
        <br />
        <br />
        {intl.formatMessage({ id: 'about_text4' })}
        <br />
        <br />
        {intl.formatMessage({ id: 'about_text5' })}
      </BodyTextWithMarginBottom>
      <SecondaryHeading>
        {intl.formatMessage({ id: 'secondary_heading2' })}
      </SecondaryHeading>
      <Link to="/c">
        <Button>{intl.formatMessage({ id: 'cta_button' })}</Button>
      </Link>
    </Layout>
  );
}

export default injectIntl(About);
