import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { injectIntl } from 'gatsby-plugin-intl';

function Head({ lang, title, intl }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
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
}

Head.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``,
};

Head.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default injectIntl(Head);
