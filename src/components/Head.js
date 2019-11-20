import React from 'react';
import Helmet from 'react-helmet';
import { injectIntl } from 'gatsby-plugin-intl';

export const Head = injectIntl(({ intl, title }) => {
  return (
    <Helmet
      htmlAttributes={{ lang: `${intl.formatMessage({ id: 'lang' })}` }}
      title={title}
      titleTemplate={`%s ― ${intl.formatMessage({ id: 'title' })}`}
      meta={[
        {
          name: `description`,
          content: `${intl.formatMessage({ id: 'description' })}`,
        },
        {
          property: `og:title`,
          content: `${intl.formatMessage({ id: 'title' })}`,
        },
        {
          property: `og:description`,
          content: `${intl.formatMessage({ id: 'description' })}`,
        },
        {
          property: `author`,
          content: `${intl.formatMessage({ id: 'author' })}`,
        },
      ]}
    />
  );
});
