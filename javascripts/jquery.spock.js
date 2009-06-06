(function($) {
  
  var opts, keywords;
 
  $.fn.extend({
    spock: function(options) {
      
      opts = $.extend({}, $.fn.spock.defaults, options);

      // This will be called on an element or collection of elements
      // Go through each element
      this.each(processElements);
      
      console.log(keywords);

      // Set up handlers that when clicked it runs the item through Wolfram Alpha

      // Display the result in a tooltip
      
    }
  });

  $.fn.spock.defaults = {
    identifierRegexp: /((?:[A-Z]\w+\s?)+)/g
  };
  
  function processElements () {
    // Find anything in the element's text that seems like it's a proper noun
    match = $(this).text().match(opts.identifierRegexp);
    // Trim and remove duplicates
    var seen = [];
    keywords = jQuery.map(match, function(w) { 
      var kw = jQuery.trim(w);
      if (jQuery.inArray(kw,seen) < 0) {
        seen.push(kw);
        return kw;
      }
      return null;
    });
  }
  
})(jQuery);
