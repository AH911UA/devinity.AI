/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `DevInity`,
    siteUrl: `https://www.devinity.ai`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true, // optional parameter to include script in development
        id: process.env.GATSBY_HOTJAR_ID,
        sv: process.env.GATSBY_HOTJAR_SV,
      },
    },
    {
      resolve: "gatsby-plugin-dts-css-modules",
      options: {
        namedExport: false,
        banner: "// My own banner",
        customTypings: (classes) =>
          classes
            .map((className) => `export const ${className}: string;`)
            .join("\n"),
        dropEmptyFile: true,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    `gatsby-plugin-ffmpeg`,
    `gatsby-transformer-ffmpeg`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo 3.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/videos`,
        name: "videos",
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: "gatsby-plugin-ffmpeg",
      options: {
        presets: ["h264", "aac"], // Ensure the 'aac' preset is included for audio
      },
    },
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        pathToCreateStoreModule: "./src/state/createStore",
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-WQB8QC5R',
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-RQ6715TYL0",
          "GTM-WQB8QC5R",
          "AW-11470082789",
          // "GT-W6NKJZM",
        ],
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
  ],
};
