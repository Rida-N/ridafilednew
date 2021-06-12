module.exports = {
  siteMetadata: {
    title: "Rida's Field",
    description: `Hi friend, this is a personal site of tech & design study notes, art works, and all sorts of mind-wandering.`,
    setences: [
      `One who makes no mistakes makes nothing at all`,
      `The ideal is not just tensionless state. It is the creative tension. `,
      `You don’t have to be responsible for the world that you’re in.`,
      `I was born not knowing, and have only had a little time to change that here and there. `,
    ],
    siteUrl: "https://www.ridafield.com",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-XG6FVWW2V6", // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/ridafield-part.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/videos/",
      },
      __key: "videos",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
