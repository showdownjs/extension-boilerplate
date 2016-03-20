// Conditional loader to make the extension compatible with Node
if (typeof require === 'function') {
  showdown = require('showdown');
}

showdown.extension('showdown-extension-boilerplate', function() {
  'use strict';

  return [{
    type: 'lang', //or output
    filter: function (text, converter, options) {
      // your code here
      // ...
      // text is the text being parsed
      // converter is an instance of the converter
      // ...
      // don't forget to return the altered text. If you don't, nothing will appear in the output
      return text;
    },
    regex: /foo/g, // if filter is present, both regex and replace properties will be ignored
    replace: 'bar'
  }];
});

