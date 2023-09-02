import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    line-height: 1.5;
    color: #f5e1e8;
    background: #061e45;
}

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
    margin: 0;
    }
    ul,
    li {
    margin: 0;
    padding: 0;
    list-style: none;
    }
    img {
    display: block;
    max-width: 100%;
    height: auto;
    }

    a {
    color: #f5e1e8;
    font-size: 18px;
    font-style: normal;
    cursor: pointer;
    text-decoration: none;
    }

`;
