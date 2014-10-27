(function(document) {
  'use strict';

  var tmpl = document.querySelector('template');
  tmpl.selected = 0;
  tmpl.addEventListener('template-bound', function() {
    var pages = document.querySelector('core-animated-pages');
    this.showPeople = function() {
      pages.selected = 1;
    }
  });

  // wrap document so it plays nice with other libraries
  // http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
