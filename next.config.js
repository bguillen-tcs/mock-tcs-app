const withTM = require('next-transpile-modules')(['@truechoice-solutions/ui']);

module.exports = withTM({
  target: 'serverless',
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/game/:path*',
        destination: `http://localhost/game/:path*`
      }
    ];
  }
});
