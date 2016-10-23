exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./tests/BankierE2E.js'],
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
