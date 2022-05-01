module.exports = {
  name: 'shell',
  remotes: [
    'about',
    ['catalog', 'https://my-catalog.netlify.app/remoteEntry.mjs'],
  ],
};
