import React from 'react';
import styled from 'styled-components';
import { injectIntl } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import MainHeading from '../elements/MainHeading';
import BodyText from '../elements/BodyText';

const LinkOut = styled.a`
  text-decoration: underline;
`;

function Terms({ intl }) {
  return (
    <Layout>
      <MainHeading>{intl.formatMessage({ id: 't&p_title' })}</MainHeading>
      <BodyText>
        {intl.formatMessage({ id: 't&p_text1' })}
        <br />
        <br />
        <br />
        <br />
        <strong>{intl.formatMessage({ id: 't&p_text2' })}</strong>
        <br />
        <br />
        {intl.formatMessage({ id: 't&p_text3' })}
        <br />
        <br />
        {intl.formatMessage({ id: 't&p_text4' })}
        <br />
        <br />
        <br />
        <br />
        <strong>{intl.formatMessage({ id: 't&p_text5' })}</strong>
        <br />
        <br />
        {intl.formatMessage({ id: 't&p_text6' })}
        <LinkOut href="www.allaboutcookies.org">
          {' '}
          www.allaboutcookies.org
        </LinkOut>
        ).
        <br />
        <br />
        {intl.formatMessage({ id: 't&p_text7' })}
        <br />
        <br />
        {intl.formatMessage({ id: 't&p_text8' })}
        <br />
        <br />
        {intl.formatMessage({ id: 't&p_text9' })}
      </BodyText>
    </Layout>
  );
}

export default injectIntl(Terms);
