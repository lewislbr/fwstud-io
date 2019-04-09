import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Nav from './Nav';

const TopLine = styled.div`
  width: 100%;
  position: fixed;
  left: auto;
  right: auto;
  top: 0px;
  z-index: 999;
  height: 5px;
  background-image: linear-gradient(
    45deg,
    hsl(351, 100%, 63%),
    hsl(32, 100%, 54%)
  );
`;

const Bar = styled.header`
  width: 100%;
  position: fixed;
  left: auto;
  right: auto;
  z-index: 999;
  height: 8vh;
  top: 5px;

  background-color: var(--background-color-translucent);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
`;

const Wrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-between;
  -ms-flex-pack: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
  max-width: 1400px;
  padding: 0 var(--sides-padding-desktop);
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 849px) {
    padding: 0 var(--sides-padding-mobile);
  }
`;

const Logo = styled.p`
  font-size: 44px;
  font-weight: 400;
  color: var(--primary-color);

  @media (max-width: 849px) {
    font-size: 32px;
  }
`;

function Header({ pageTitle }) {
  return (
    <Bar>
      <TopLine />
      <Wrapper>
        <Logo>
          <Link to="/">{pageTitle}</Link>
        </Logo>
        <Nav />
      </Wrapper>
    </Bar>
  );
}

Header.propTypes = {
  pageTitle: PropTypes.string,
};

Header.defaultProps = {
  pageTitle: ``,
};

export default Header;
