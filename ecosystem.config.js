module.exports = {
  apps: [
    {
      name: 'devBackend',
      script: 'dist/index.js',
      watch: false,
    },
    {
      name: 'backend',
      script: 'dist/index.js',
      watch: false,
    },
  ],
};
