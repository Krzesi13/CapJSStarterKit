exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['tests/FirstTest'],
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true
  },
  onPrepare: function() {
    require("babel-register")({
      "presets": ["es2015"]
    });
  }
};
