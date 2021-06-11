module.exports = {
  siteMetadata: {
    title: "Rida's Field",
    description: `Hi friend, this is a personal site of tech & design study notes, art works, and all sorts of mind-wanderings.`,
    setences: [
      `One who makes no mistakes makes nothing at all`,
      `The ideal is not just tensionless state. It is the creative tension. `,
      `You don’t have to be responsible for the world that you’re in.`,
      `I was born not knowing, and have only had a little time to change that here and there. `,
    ],
    siteUrl: "https://www.ridafield.com",
  },
  plugins: [
    "gatsby-plugin-sass",
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
    "gatsby-plugin-sharp",
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
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
