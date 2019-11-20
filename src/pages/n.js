import React from 'react';
import styled from 'styled-components';
import { injectIntl, Link } from 'gatsby-plugin-intl';

import {
  Button,
  Head,
  Heading1,
  Heading2,
  Layout,
  TextBody,
} from '../components';
import { fwstudio } from '../assets/images';

const ImageUs = styled.img`
  margin: 0 auto 3vh auto;
`;

const TextBodyWithMarginBottom = styled(TextBody)`
  margin-bottom: 15vh;
`;

function About({ intl }) {
  return (
    <Layout>
      <Head title={intl.formatMessage({ id: 'about_title' })} />
      <Heading1>{intl.formatMessage({ id: 'about_title' })}</Heading1>
      <TextBody>{intl.formatMessage({ id: 'about_text1' })}</TextBody>
      <ImageUs src={fwstudio} alt="fw studio" />
      <TextBodyWithMarginBottom>
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
      </TextBodyWithMarginBottom>
      <Heading2>{intl.formatMessage({ id: 'secondary_heading2' })}</Heading2>
      <Link to="/c">
        <Button>{intl.formatMessage({ id: 'cta_button' })}</Button>
      </Link>
    </Layout>
  );
}

export default injectIntl(About);
