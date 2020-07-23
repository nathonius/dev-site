import React from 'react';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { lightTheme, staticTheme } from '../../util/theme';
import { Root, Routes } from 'react-static';
import { Router } from '@reach/router';
import { Layout } from './Layout';
import { HelmetProvider } from 'react-helmet-async';
import '../../normalize.css';
import { NewTheme } from 'types/theme';

const { typography, space } = staticTheme;

// Any routes that start with 'dynamic' will be treated as non-static routes
// addPrefetchExcludes(['dynamic']);

export const App: React.FC = props => {
  const [theme, setTheme] = React.useState<NewTheme>(lightTheme);
  const { textColor, background } = theme;
  const globalStyles = css`
    html {
      box-sizing: border-box;
      color: ${textColor.primaryText};
      font-family: ${typography.fontFamily};
      font-size: ${typography.baseFontSize};
      background-color: ${background.background};
    }
    h1,
    h2,
    h3,
    h4,
    p {
      margin: 0;
      .muted {
        color: ${textColor.accentText};
      }
    }

    /* Headline */
    h1 {
      font-size: ${typography.headline.size};
      font-weight: ${typography.headline.weight};
      line-height: ${typography.headline.lineHeight};
    }
    /* Title */
    h2 {
      font-size: ${typography.title.size};
      font-weight: ${typography.title.weight};
      line-height: ${typography.title.lineHeight};
    }
    /* Subheading */
    h3 {
      font-size: ${typography.subheading.size};
      font-weight: ${typography.subheading.weight};
      line-height: ${typography.subheading.lineHeight};
      margin-bottom: ${typography.subheading.marginBottom!};
    }
    /* Lead text */
    h4 {
      font-size: ${typography.leading.size};
      font-weight: ${typography.leading.weight};
      line-height: ${typography.leading.lineHeight};
      margin-bottom: ${typography.leading.marginBottom!};
    }
    p {
      font-size: ${typography.body.size};
      font-weight: ${typography.body.weight};
      line-height: ${typography.body.lineHeight};
      margin-bottom: ${typography.body.marginBottom!};
      code {
        background-color: ${background.background10};
        padding-left: ${space.xs};
        padding-right: ${space.xs};
        border-radius: ${space.s};
      }
    }

    ol > li,
    ul > li {
      margin-bottom: ${space.s};
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
  `;
  return (
    <Root>
      <HelmetProvider>
        <ThemeProvider theme={{ ...theme, setTheme }}>
          <Global styles={globalStyles} />
          <Layout>
            <React.Suspense fallback={<em>Loading...</em>}>
              <Router>
                <Routes path="*" />
              </Router>
            </React.Suspense>
          </Layout>
        </ThemeProvider>
      </HelmetProvider>
    </Root>
  );
};
