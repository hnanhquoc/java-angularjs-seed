'use strict';

exports.config = {
   allScriptsTimeout: 11000,

   specs: [
      'e2e/*.js'
   ],

   capabilities: {
	browserName: "chrome",
        chromeOptions: {
            args: ["--test-type", "--no-sandbox"],
        },
        loggingPrefs: {
            browser: "ALL"
        }
   },

   baseUrl: 'http://localhost:8000/',

   framework: 'jasmine',

   jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
   }
};
