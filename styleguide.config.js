const path = require('path');
const isDEV = process.env.NODE_ENV === 'development';
const moduleSource = isDEV ? 'src' : 'src';

module.exports = {
  //ignore: ['**/*.test.js', '**/DateInput/*', '**/DayCell/*', '**/Month/*', '**/InputRangeField/*'],
  showSidebar: false,
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400',
        },
        {
          rel: 'stylesheet',
          href: './dist/styles.css',
        },
        {
          rel: 'stylesheet',
          href: './dist/theme/default.css',
        },
        {
          rel: 'stylesheet',
          href: './demo/styles.css',
        },
      ],
    },
  },
  theme: {
    baseBackground: '#fdfdfc',
    link: '#274e75',
    linkHover: '#90a7bf',
    border: '#e0d2de',
    font: ['Open Sans'],
    fontFamily: {
      base: '"Open Sans", "Helvetica", sans-serif',
    },
  },

  styles: function styles(theme) {
    return {
      Playground: {
        preview: {
          paddingLeft: 0,
          paddingRight: 0,
          borderWidth: [[0, 0, 1, 0]],
          borderRadius: 0,
        },
      },
      Code: {
        code: {
          color: theme.color.link,
          fontSize: 14,
        },
      },
    };
  },
  // Override Styleguidist components
  styleguideComponents: {
    StyleGuideRenderer: path.join(__dirname, 'demo/components/StyleGuide'),
    SectionsRenderer: path.join(__dirname, 'demo/components/SectionsRenderer'),
  },
  moduleAliases: {
    'react-date-range/dist': path.resolve(__dirname, moduleSource),
    'react-date-range': path.resolve(__dirname, moduleSource),
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules',
        },
        {
          test: /\.svg$/,
          loader: 'url-loader',
        },
      ],
    },
  },
  pagePerSection: false,
  sections: [
    {
      sections: [
        {
          components: () => ['src/components/DateRangePicker/index.js'],
          usageMode: 'hide',
        },
      ],
      sectionDepth: 0,
    },
  ],
};
