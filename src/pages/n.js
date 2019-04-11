import React from 'react';
import styled from 'styled-components';
import { injectIntl, Link } from 'gatsby-plugin-intl';

import Layout from '../2-components/Layout';
import SEO from '../2-components/SEO';
import MainHeading from '../1-elements/MainHeading';
import BodyText from '../1-elements/BodyText';
import fwstudio from '../images/fw-studio.gif';
import SecondaryHeading from '../1-elements/SecondaryHeading';
import Button from '../1-elements/Button';

const ImageUs = styled.img`
  margin: 0 auto 3vh auto;
`;

const BodyTextWithMarginBottom = styled(BodyText)`
  margin-bottom: 15vh;
`;

function Nosotros({ intl }) {
  return (
    <Layout>
      <SEO title="FW Studio" />
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
      <Link to="/contacto/">
        <Button>{intl.formatMessage({ id: 'cta_button' })}</Button>
      </Link>
    </Layout>
  );
}

export default injectIntl(Nosotros);
