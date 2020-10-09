module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    staging: {
      plugins: ['transform-remove-console'],
    },
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
