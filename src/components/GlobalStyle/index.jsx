import { createGlobalStyle } from 'styled-components';
import fontGrifterBold from '../../fonts/grifterbold.otf';

import fontGilroyThin from '../../fonts/Gilroy-Thin.ttf';
import fontGilroyUltraLight from '../../fonts/Gilroy-UltraLight.ttf';
import fontGilroyLight from '../../fonts/Gilroy-Light.ttf';
import fontGilroyRegular from '../../fonts/Gilroy-Regular.ttf';
import fontGilroyMedium from '../../fonts/Gilroy-Medium.ttf';
import fontGilroySemiBold from '../../fonts/Gilroy-SemiBold.ttf';
import fontGilroyBold from '../../fonts/Gilroy-Bold.ttf';
import fontGilroyExtraBold from '../../fonts/Gilroy-ExtraBold.ttf';
import fontGilroyBlack from '../../fonts/Gilroy-Black.ttf';
import fontGilroyHeavy from '../../fonts/Gilroy-Heavy.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Century Gothic';
      src: url(${fontGrifterBold});
  }

  @font-face {
      font-family: 'Gilroy';
      src: url(${fontGilroyLight});
      font-weight: 100;
      font-style: normal;
  }

  @font-face {
      font-family: 'Gilroy';
      src: url(${fontGilroyThin});
      font-weight: 100;
      font-style: normal;
  }

  @font-face {
      font-family: 'Gilroy';
      src: url(${fontGilroyUltraLight});
      font-weight: 200;
      font-style: normal;
  }

  @font-face {
      font-family: 'Gilroy';
      src: url(${fontGilroyLight});
      font-weight: 300;
      font-style: normal;
  }

  @font-face {
      font-family: 'Gilroy';
      src: url(${fontGilroyRegular});
      font-weight: 400;
      font-style: normal;
  }

  @font-face {
      font-family: 'Gilroy';
      src: url(${fontGilroyMedium});
      font-weight: 500;
      font-style: normal;
  }

  @font-face {
      font-family: 'Gilroy';
      src: url(${fontGilroySemiBold});
      font-weight: 600;
      font-style: normal;
  }

  @font-face {
      font-family: 'Gilroy';
      src: url(${fontGilroyBold});
      font-weight: 700;
      font-style: normal;
  }

  @font-face {
      font-family: 'Gilroy';
      src: url(${fontGilroyExtraBold});
      font-weight: 800;
      font-style: normal;
  }

  @font-face {
      font-family: 'Gilroy';
      src: url(${fontGilroyBlack});
      font-weight: 900;
      font-style: normal;
  }

  @font-face {
      font-family: 'Gilroy';
      src: url(${fontGilroyHeavy});
      font-weight: 1000;
      font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.colorBackground || '#000000'};

    font-family: Gilroy, DM Sans, sans-serif;
    position: relative;
  }

  div, p {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  /* Resetting default button styles */
  button {
    /* Resetting margin and padding */
    margin: 0;
    padding: 0;

    /* Resetting border and outline */
    border: none;
    outline: none;

    /* Resetting background, text, and cursor */
    background: none;
    color: inherit;
    cursor: pointer;

    /* Resetting font styles */
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;

    /* Resetting other styles */
    text-align: inherit;
    text-decoration: none;
    display: inline-block;
    line-height: normal;
    overflow: visible;
    -webkit-appearance: none; /* For webkit browsers (like Safari) */
    -moz-appearance: none; /* For Firefox */
  }

  /* Общие стили полосы прокрутки */
  &::-webkit-scrollbar {
    width: 6px; /* Ширина полосы прокрутки */
    height: 6px; /* Высота полосы прокрутки */
  }

  /* Стили фона полосы прокрутки */
  &::-webkit-scrollbar-track {
    background: #110C11; /* Цвет фона полосы прокрутки */
  }

  /* Стили ползунка прокрутки */
  &::-webkit-scrollbar-thumb {
    background: #331345; /* Цвет ползунка прокрутки */
    border-radius: 6px; /* Радиус скругления ползунка */
  }

  /* Изменение стилей при наведении на ползунок */
  &::-webkit-scrollbar-thumb:hover {
    background: #331345; /* Новый цвет ползунка при наведении */
  }

  .react-horizontal-scrolling-menu--wrapper {
    width: 100%;
  }

  .moon-image {
    position: absolute !important;
    top: 0;
    right: 0;
    width: 50%;
    opacity: .8;
    z-index: -1;

    @media (max-width: 1200px) {
      width: 100%;
    }
  }

  .teams-scroll-container {
    display: flex;
    align-items: stretch;
  }
`;

export default GlobalStyle;
