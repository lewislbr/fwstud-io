/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';
import * as font from '../fonts/font.js';

const GlobalStyles = createGlobalStyle`
  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    height: 100%;
    width: 100%;
    margin: 0;
    margin-left: auto;
    margin-right: auto;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    -webkit-margin-before: 0;
    margin-block-start: 0;
    -webkit-margin-after: 0;
    margin-block-end: 0;
    -webkit-margin-start: 0;
    margin-inline-start: 0;
    -webkit-margin-end: 0;
    margin-inline-end: 0;

    display: inline-block;
    font-size: inherit;
  }

  a {
    text-decoration: none;
    -webkit-tap-highlight-color: hsla(0, 0%, 0%, 0);
    -webkit-tap-highlight-color: transparent;
    color: inherit;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    width: 100%;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @font-face {
    font-family: "NKGW";
    src: local('NKGW400'), url('${font.NKGW400}') format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: "NKGW";
    src: local('NKGW700'), url('${font.NKGW700}') format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: block;
  }

  body {
    padding-top: 20vh;
    line-height: 1;
    --sides-padding-desktop: 3%;
    --sides-padding-mobile: 5%;

    --background-color: hsl(0, 0%, 99%);
    --background-color-translucent: hsla(0, 0%, 99%, 0.92);
    --primary-color: hsl(150, 3%, 14%);
    --primary-color-light: hsla(150, 3%, 14%, 0.85);
    --secondary-color-a: hsl(351, 100%, 63%);
    --secondary-color-b: hsl(32, 100%, 54%);
    background-color: var(--background-color);
    font-family: 'NKGW', sans-serif;
    font-size: 19px;
    font-weight: 400;
    color: var(--primary-color);

    @media (max-width: 849px) {
      font-size: 18px;
    }
  }

  body.noscroll {
    overflow: hidden;
  }
`;

const Wrapper = styled.div`
  padding: 0 var(--sides-padding-desktop);
  margin: 0 auto;
  max-width: 1400px;

  @media (max-width: 849px) {
    padding: 0 var(--sides-padding-mobile);
  }
`;

const Footer = styled.footer`
  padding-top: 5vh;
  padding-bottom: 3vh;
  margin-top: 25vh;
  text-align: left;

  font-size: 17px;

  @media (max-width: 849px) {
    font-size: 16px;
  }
`;

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <GlobalStyles />
          <Header pageTitle={data.site.siteMetadata.title} />
          <Wrapper>
            <main>{children}</main>
            <Footer>
              <Link to="/t&p">Términos y privacidad</Link>
              <p>© {new Date().getFullYear()}, FW Studio</p>
            </Footer>
          </Wrapper>
        </>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
