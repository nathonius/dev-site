import React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Header } from '../Navigation/Header';
import { css, Global } from '@emotion/core';
import theme from '../../util/theme';

const { color } = theme;

const layoutGlobal = css`
  body {
    background-color: ${color.background};
  }
`;

export const Layout: React.FC = props => {
  return (
    <div>
      <Helmet>
        <title>Nathan Smith</title>
      </Helmet>
      <Global styles={layoutGlobal} />
      <Header />
      <Outlet />
    </div>
  );
};